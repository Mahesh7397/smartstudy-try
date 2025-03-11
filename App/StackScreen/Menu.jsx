import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, Fonst } from '../../Constants/colors'
import Icon from 'react-native-vector-icons/Ionicons'

const {width,height}=Dimensions.get('window')
const Menu = () => {
  return (
    <View style={styles.container} >
      <View>
         <Pressable><View style={styles.buttonbox}><Text style={styles.text}>Helpdesk</Text></View></Pressable>
         <Pressable><View style={styles.buttonbox}><Text style={styles.text}>Feedback</Text></View></Pressable>
         <Pressable><View style={styles.buttonbox}><Text style={styles.text}>Donate</Text></View></Pressable>
      </View>
    </View>
  )
}

export default Menu

const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.BACKGROUND_COLOR,
        flex:1,
        alignItems:'center'
    },
    buttonbox:{
       width:(90/100)*width,
       height:50,
       backgroundColor:Colors.MAIN_COLOR,
       padding:5,
       margin:5,
       borderWidth:1,
       borderColor:Colors.MAIN_COLOR,
       borderRadius:12,
       justifyContent:'center',
       alignItems:'center'
    },
    text:{
       fontSize:22,
       fontFamily:Fonst.POPPINS_BOLD,
       color:Colors.TEXT_COLOR,
    }
})