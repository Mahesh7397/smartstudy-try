import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../Constants/colors'

const Task = () => {
  return (
    <View style={styles.container}>
      <Text>Task</Text>
    </View>
  )
}

export default Task

const styles = StyleSheet.create({
   container:{
      backgroundColor:Colors.BACKGROUND_COLOR,
      flex:1
    }
})