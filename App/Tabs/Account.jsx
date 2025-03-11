import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../Constants/colors'

const Account = () => {
  return (
    <View style={styles.container}>
      <Text >Account</Text>
    </View>
  )
}

export default Account

const styles = StyleSheet.create({
      container:{
          backgroundColor:Colors.BACKGROUND_COLOR,
          flex:1
        }
})