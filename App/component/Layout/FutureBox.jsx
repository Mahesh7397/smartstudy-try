import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, Fonst } from '../../Constants/colors'

const FutureBox = ({data,onpress}) => {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>{data.Title}</Text>
      <Pressable style={styles.button} onPress={onpress}><Text style={styles.bt}>{data.Bname}</Text></Pressable>
    </View>
  )
}

export default FutureBox

const styles = StyleSheet.create({
    box:{
        width:160,
        minHeight:120,
        maxHeight:180,
        marginTop:40,
        borderWidth:1,
        borderColor:Colors.BORDER_COLOR,
        borderRadius:8,
        backgroundColor:Colors.LIGHT_BACKGROUND_COLOR,
        padding:4,
    },
    text:{
        color:Colors.TEXT_COLOR,
        fontSize:20,
        fontFamily:Fonst.POPPINS_BOLD,
        padding:5,
        margin:5,
    },
    button:{
        minWidth:100,
        height:30,
        borderWidth:1,
        borderColor:Colors.MAIN_COLOR,
        borderRadius:6,
        padding:3,
        margin:5,
        justifyContent:'center',
        alignItems:'center'
    },
    bt:{
        color:Colors.MAIN_COLOR,
        fontSize:17,
        fontFamily:Fonst.POPPINS_BOLD
    }
})