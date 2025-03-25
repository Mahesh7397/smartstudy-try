import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from "lottie-react-native";

const Loadingpage = () => {
  return (
    <View style={styles.container}>
      <LottieView
              source={require("../../assets/Json/Animation - 1742122867473.json")} // Replace with your animation file
              autoPlay
              loop
              style={{ width: 150, height: 150 }}
              />
    </View>
  )
}

export default Loadingpage

const styles = StyleSheet.create({
  container:{
     flex:1,
     justifyContent:'center',
     alignItems:'center'
  }
})