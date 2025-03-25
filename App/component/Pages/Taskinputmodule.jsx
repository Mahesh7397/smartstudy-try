import { Dimensions, Modal, Pressable, StyleSheet, Switch, Text, Keyboard, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors, Fonst } from '../../Constants/colors'
import Icons from "react-native-vector-icons/Feather"
import DateTimePickerModal from "react-native-modal-datetime-picker";//optional
import DatePicker from 'react-native-modern-datepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get('window')

const Taskinputmodule = ({ vis, set }) => {
  //info
  const [date, setdate] = useState("" || new Date().toDateString())
  const [Tasktitle, setTasktitle] = useState("")
  const [Dec, setDec] = useState("")
  const [fromtime, setfromtime] = useState("")
  const [totime, settotime] = useState("")
  // console.log(new Date().getDate()+"-"+new Date().getMonth()+"-"+new Date().getFullYear())
  //show picker
  const [isdate, setisdate] = useState(false)
  const [daily, setdaily] = useState(false)
  const [isfrom, setisfrom] = useState(false)
  const [isto, setisto] = useState(false)

  //handel clickes 
  const handeldateconf = (selectedDate) => {
    setdate(selectedDate.toDateString())
  }


  const handleSave=async()=>{
    const data={
      CreatedAt:new Date(),
      Title:Tasktitle,
      Description:Dec,
      Date:daily?"daily":date,
      Timing:{
        start:fromtime,
        Stop:totime
      }
    }
    try {
      const getdata=JSON.parse(await AsyncStorage.getItem("Task"))
      if(getdata?.length>0){
        const clr=[...getdata,data]
        await AsyncStorage.setItem("Task",JSON.stringify(clr))
        // console.log(clr)
        set(false)
        setTasktitle("")
        setdaily(false)
        setDec("")
        setdate("")
        setfromtime("")
        settotime("")

      }
      else{
        await AsyncStorage.setItem("Task",JSON.stringify([data]))
        // console.log([data])
        set(false)
        setTasktitle("")
        setdaily(false)
        setDec("")
        setdate("")
        setfromtime("")
        settotime("")
      }
    } catch (error) {
      console.log(error)
    }
  }
  // useEffect(()=>{
  //    console.log(Dec)
  //    console.log(Tasktitle)
  // },[Dec,Tasktitle])
  useEffect(()=>{
    const d=new Date().toDateString()
    setdate(d)
  },[])
  return (
    <>
      <Modal
        transparent
        visible={vis}
        animationType='fade'
        onRequestClose={() => { set(false); setDec(""); setfromtime(""); settotime(""); setTasktitle(""); setisdate(false); setisfrom(false); setisto(false) }}
      >
        <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.headertext}>Add Task</Text>
              <Pressable style={styles.icon} onPress={() => { set(false); setDec(""); setfromtime(""); settotime(""); setTasktitle(""); setisdate(false); setisfrom(false); setisto(false) }}>
                <Icons name='x' color={Colors.TEXT_COLOR} size={30} />
              </Pressable>
            </View>
            <View style={styles.body}>
              <View style={styles.section1} >
                <Pressable style={styles.date} disabled={daily

                } onPress={() => setisdate(true)}>
                  <Text style={styles.textbut}>{date}</Text>
                </Pressable>
                <Text style={{ marginBottom: 10, fontSize: 20, color: Colors.TEXT_COLOR, fontFamily: Fonst.POPPINS_BOLD }}>Daily</Text>
                <View style={{
                  padding: 5, // Adds spacing around the Switch
                  backgroundColor: daily ? Colors.MAIN_COLOR : "#767577",
                  borderRadius: 30,
                  height:30,
                  justifyContent:'center',
                  alignItems:'center',
                  marginBottom:10,               
                 }}
                >
                  <Switch
                    trackColor={{ false: "#767577", true:Colors.MAIN_COLOR }}
                    thumbColor={daily ? Colors.INPUT_BG : "#f4f3f4"} // Custom thumb color
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => setdaily((prev) => !prev)}
                    value={daily}
                    style={{
                      transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }], // Scale entire Switch
                    }}
                    
                  />
                </View>
                <DateTimePickerModal
                  isVisible={isdate}
                  mode='date'
                  onConfirm={handeldateconf}
                  onCancel={() => setisdate(false)}
                  display='spinner'
                  textColor={Colors.TEXT_COLOR}
                  isDarkModeEnabled={true}
                />
              </View>
              <View style={styles.section2}>
                <TextInput
                  style={[styles.input, { fontSize: 15 }]}
                  placeholder='Task title'
                  placeholderTextColor={'#F1F5F9'}
                  value={Tasktitle}
                  onChangeText={setTasktitle}
                  onSubmitEditing={Keyboard.dismiss}
                />
              </View>
              <View style={styles.section3}>
                <TextInput
                  style={[styles.input, { fontSize: 14 }]}
                  multiline
                  numberOfLines={4}
                  placeholder='Description'
                  placeholderTextColor={'#F1F5F9'}
                  value={Dec}
                  onChangeText={setDec}
                  blurOnSubmit={true}
                  onSubmitEditing={Keyboard.dismiss}
                />
              </View>
              <View style={styles.section4}>
                <Text style={{ marginBottom: 10, fontSize: 20, color: Colors.TEXT_COLOR, fontFamily: Fonst.POPPINS_BOLD }}>Time</Text>
                <View style={styles.time}>
                  <Pressable style={styles.timebut} onPress={() => setisfrom(true)}>
                    <Text style={styles.textbut}>{fromtime.length > 0 ? fromtime : "Start"}</Text>
                  </Pressable>
                  <Pressable style={styles.timebut} onPress={() => setisto(true)}>
                    <Text style={styles.textbut}>{totime.length > 0 ? totime : "Finish"}</Text>
                  </Pressable>
                </View>
              </View>
              <DateTimePickerModal
                mode='time'
                onConfirm={(e) => setfromtime(e.toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true, // Set to true for AM/PM format
                }))}
                isVisible={isfrom}
                onCancel={() => setisfrom(false)}
                themeVariant='dark'
                textColor={Colors.TEXT_COLOR}
                display='spinner'
              />
              <DateTimePickerModal
                mode='time'
                onConfirm={(e) => settotime(e.toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true, // Set to true for AM/PM format
                }))}
                isVisible={isto}
                onCancel={() => setisto(false)}
                themeVariant='dark'
                  textColor={Colors.TEXT_COLOR}
                  display='spinner'
              />
              <View style={{ justifyContent: 'center', alignItems: 'center', width: '90%', padding: 3, alignSelf: 'center' }}>
                <Pressable disabled={Tasktitle.length > 4 || Dec.length > 0 ? false : true} onPress={()=>handleSave()} style={{ width: 'auto', maxWidth: 400, minWidth: 150, height: 40, backgroundColor: Tasktitle.length > 4 || Dec.length > 0 ? Colors.MAIN_COLOR : '#531A5D', borderWidth: 1, borderColor: Colors.BORDER_COLOR, borderRadius: 8, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={[styles.textbut, { color: Colors.TEXT_COLOR }]}>Save</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
        <TouchableWithoutFeedback>
          <View style={styles.modalbg} />
        </TouchableWithoutFeedback>
      </Modal >
    </>
  )
}

export default Taskinputmodule

const styles = StyleSheet.create({
  container: {
    padding: 24,
    width: '90%',
    maxWidth: 400,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: Colors.BORDER_COLOR,
    backgroundColor: Colors.LIGHT_BACKGROUND_COLOR,
    zIndex: 1000,
    shadowColor: '#fff',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  headertext: {
    padding: 5,
    margin: 5,
    fontSize: 25,
    fontFamily: Fonst.POPPINS_BOLD,
    color: Colors.TEXT_COLOR,
  },
  body: {
    padding: 8,
    justifyContent: 'center',
  },
  icon: {
    padding: 5,
    margin: 5,
  },
  modalbg: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: Colors.MODAL_BG
  },
  date: {
    backgroundColor: Colors.INPUT_BG,
    borderWidth: 1,
    borderColor: Colors.BORDER_COLOR,
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center'
  },
  time: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  timebut: {
    backgroundColor: Colors.INPUT_BG,
    borderWidth: 1,
    borderColor: Colors.BORDER_COLOR,
    borderRadius: 8,
    padding: 12,
    margin: 5,
    minWidth: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textbut: {
    color: Colors.MAIN_COLOR,
    fontSize: 15,
    fontFamily: Fonst.POPPINS_BOLD,
    height: 20
  },
  input: {
    backgroundColor: Colors.INPUT_BG,
    borderWidth: 1,
    borderColor: Colors.BORDER_COLOR,
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
    width: "auto",
    color: Colors.TEXT_COLOR,
    fontFamily: Fonst.POPPINS_BOLD
  },
  section1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

})