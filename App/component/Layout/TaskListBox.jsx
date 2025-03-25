import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../Constants/colors'

const TaskListBox = (data) => {
  return (
    <View>
      <Text style={{color:Colors.TEXT_COLOR}}>{data.Title}</Text>
    </View>
  )
}

export default TaskListBox

const styles = StyleSheet.create({})