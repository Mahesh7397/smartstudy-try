import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable, Dimensions, FlatList, ScrollView } from "react-native";
import { Colors } from '../Constants/colors'
import Taskinputmodule from "../component/Pages/Taskinputmodule";
import Icons from "react-native-vector-icons/MaterialIcons"
import { Calendar } from 'react-native-calendars';
import { useUser } from '../controller/userContext'
import TaskListBox from "../component/Layout/TaskListBox";
import MultiSectionList from "../component/Layout/MultiSectionList";
import TaskDetail from "../component/Pages/TaskDetail";


const { width, height } = Dimensions.get('window')
const Task = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [tstask, settstask] = useState([])
  const { Task ,GetTaskdet} = useUser()

  const [selecteddetail,setselecteddetail]=useState({})
  const [isdetail,setisdetail]=useState(false)

  const transfrom = (data) => {
    const al = Object.keys(data).map((e) => {
      return {
        year: e,
        task: Object.keys(data[e].month).map((r) => {
          return {
            month: r,
            datelist: Object.keys(data[e].month[r]).map((t) => {
              return {
                day: t,
                list: data[e].month[r][t]
              }
            })
          }
        })
      }
    })
    settstask(al)
  }

  useEffect(() => {
    transfrom(Task)
    
  }, [Task])

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ width: '100%', alignItems: 'center' }}>
          <Calendar
            onDayPress={(day) => console.log("Selected day:", day)}
            theme={{
              // selectedDayBackgroundColor: Colors.TEXT_COLOR,
              selectedDayBackgroundColor: '#00adf5',
              selectedDayTextColor: '#ffffff',
              todayTextColor: Colors.MAIN_COLOR,
              arrowColor: Colors.MAIN_COLOR,
              backgroundColor: Colors.INPUT_BG,
              calendarBackground: Colors.INPUT_BG,
              monthTextColor: Colors.MAIN_COLOR, // Month name color [ [Object] ] 
              dayTextColor: Colors.TEXT_COLOR,
              textDisabledColor: Colors.LIGHT_BACKGROUND_COLOR
            }}
            style={{
              width: (90 / 100) * width, height: 380, backgroundColor: Colors.INPUT_BG, borderRadius: 10,
              padding: 5,
              marginVertical: 10
            }}
          />
        </View>
      
          <MultiSectionList data={tstask} setisdetail={setisdetail} setdetail={setselecteddetail}/>
        
      </ScrollView>
      <Pressable style={styles.addbut} onPress={() => setIsVisible(true)}>
        <Icons name="add" color={Colors.TEXT_COLOR} size={30} />
      </Pressable>
      <Taskinputmodule vis={isVisible} set={setIsVisible} />
      {selecteddetail?<TaskDetail data={selecteddetail} isvisible={isdetail} setisvisible={setisdetail} />:null}
    </View>
  );
}

export default Task

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.BACKGROUND_COLOR,
    flex: 1
  },
  addbut: {
    width: 55,
    height: 55,
    backgroundColor: Colors.MAIN_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 15,
    position: 'absolute',
    borderColor:Colors.MAIN_COLOR,
    right: 20,
    bottom: 30,
    zIndex: 1000,
    shadowColor: Colors.MAIN_COLOR,
    shadowOffset: {
      width: 4,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  }
})