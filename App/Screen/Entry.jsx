 import { StyleSheet, Text, View } from 'react-native'
 import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Main from './Main'
import Calculater from '../StackScreen/Calculater'
import About from '../StackScreen/About'
import Menu from '../StackScreen/Menu'
import { Colors, Fonst } from '../../Constants/colors'
 

 const NestedStack=createNativeStackNavigator()
 
 const Entry = () => {
   return (
     <NestedStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:Colors.BACKGROUND_COLOR
      },
      headerTitleStyle:{
        color:Colors.TEXT_COLOR,
        fontFamily:Fonst.POPPINS_BOLD,
        fontSize:25,
        fontWeight:'500',
      },
      headerTitleAlign:'center',
      headerTintColor:Colors.TEXT_COLOR
     }}>
        <NestedStack.Screen name='Main'
         component={Main}
         options={{headerShown:false}}/>
         <NestedStack.Screen name='calculater'
         component={Calculater}/>
         <NestedStack.Screen name='about' 
         component={About}/>
         <NestedStack.Screen 
         name='menu' 
         component={Menu}/>
     </NestedStack.Navigator>
   )
 }
 
 export default Entry
 
 const styles = StyleSheet.create({})