import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../Constants/colors'

const Ai = () => {
  return (
    <View style={styles.container}>
      <Text>Ai</Text>
    </View>
  )
}

export default Ai

const styles = StyleSheet.create({
  container:{
    backgroundColor:Colors.BACKGROUND_COLOR,
    flex:1
  }
})