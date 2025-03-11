import { StyleSheet, Text, Scro, ScrollView} from 'react-native'
import React from 'react'
import { Colors } from '../../Constants/colors'

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={{color:'#fff',fontSize:30,fontFamily:'Poppins-Black'}}>Home</Text>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
   container:{
      backgroundColor:Colors.BACKGROUND_COLOR,
      flex:1
    }
})