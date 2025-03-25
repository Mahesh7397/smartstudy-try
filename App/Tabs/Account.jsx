import { Dimensions, Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors, Fonst } from '../Constants/colors'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Loadingpage from '../component/Pages/Loadingpage';
import { useUser } from '../controller/userContext';

const {width,height}=Dimensions.get('window')

const Account = () => {
  const [user, setuser] = useState({})
  const [isLoading, setisLoading] = useState(false)
  const {Checkuser}=useUser()
  
  const handlelogout=async()=>{
     try {
      await AsyncStorage.removeItem('account')
      Checkuser()
     } catch (error) {
       console.log(error)
     }
  }
  const Getuser = async () => {
    try {
      setisLoading(true)
      const user = JSON.parse(await AsyncStorage.getItem('account'))
      setuser(user)
      setisLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    Getuser()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? <Loadingpage /> : <>
      <View style={styles.section1}>
         <Image source={require("../assets/images/user.png")} style={styles.image}/>
        <View style={styles.textbox}>
          <Text style={styles.text}>{user.name}</Text>
          <Text style={styles.text}>{user.email}</Text>
        </View>
      </View>
        <View style={styles.section2}>
          <View style={{height:40}}/>
           <Pressable style={styles.butbox} onPress={()=>handlelogout()}>
            <Text style={styles.text}>Log out</Text>
           </Pressable>
        </View></>}
    </SafeAreaView>
  )
}

export default Account

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.BACKGROUND_COLOR,
    flex: 2,
    justifyContent:'center',
    alignItems:'center'
  },
  text: {
    color: Colors.TEXT_COLOR,
    fontSize: 18,
    fontFamily: Fonst.POPPINS_BOLD,
    padding:3,
    margin:3
  },
  section1:{
    flex:1,
    width:(90/100)*width,
     backgroundColor:'red',
     justifyContent:'center',
     alignItems:'center',
     backgroundColor:Colors.LIGHT_BACKGROUND_COLOR,
     borderWidth:1,
     borderColor:Colors.BORDER_COLOR,
     borderRadius:12,
     margin:10,
  },
  section2:{
    flex:1,
    width:(90/100)*width,
    alignItems:'center'
  },
  image:{
    width:70,
    height:70,
    borderWidth:1,
    borderRadius:50,
    padding:5,
    margin:8,
  },
  textbox:{
    padding:8,
    margin:10,
    justifyContent:'center',
    alignItems:'center',
  },
  butbox:{
    width:(80/100)*width,
    borderWidth:1,
    borderColor:Colors.BORDER_COLOR,
    borderRadius:12,
    backgroundColor:Colors.MAIN_COLOR,
    justifyContent:'center',
    alignItems:'center'
  }
})