import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../Constants/colors'

export default function Calculater() {
  return (
    <View style={styles.container}>
      <Text>Calculater</Text>
    </View>
  )
}

const styles = StyleSheet.create({
   container:{
      backgroundColor:Colors.BACKGROUND_COLOR,
      flex:1
    }
})