import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../Constants/colors'

export default function Courses() {
  return (
    <View style={styles.container}>
      <Text>Courses</Text>
    </View>
  )
}

const styles = StyleSheet.create({
   container:{
      backgroundColor:Colors.BACKGROUND_COLOR,
      flex:1
    }
})