import { StyleSheet, Text, View, ScrollView, Dimensions, FlatList, SafeAreaView} from 'react-native'
import React from 'react'
import { Futures } from '../Constants/Content'
import FutureBox from '../component/Layout/FutureBox'
import { Colors, Fonst } from '../Constants/colors'

const {width,height}=Dimensions.get('window')
const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
       <View style={styles.Adbox}>
         
       </View>
       <View style={styles.task}>

       </View>
       <View style={styles.feature}>
        <Text style={styles.text}>Features</Text>
        <FlatList 
        data={Futures} 
        numColumns={2} 
        columnWrapperStyle={{justifyContent:'space-between'}} 
        scrollEnabled={false}
        renderItem={({item})=><FutureBox data={item} onpress={()=>navigation.navigate(item.Path)}/>}/>
       </View>
       </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
   container:{
      backgroundColor:Colors.BACKGROUND_COLOR,
      flex:1
    },
  Adbox:{
    borderColor:Colors.BORDER_COLOR,
    borderWidth:1,
    width:(90/100)*width,
    height:(30/100)*height,
    alignSelf:'center',
    margin:3,
    backgroundColor:Colors.LIGHT_BACKGROUND_COLOR,
    borderRadius:15
  },
  task:{
    width:(90/100)*width,
    height:400,
  },
  feature:{
    width:(90/100)*width,
    alignSelf:'center'
  },
  text:{
    color:Colors.TEXT_COLOR,
}
})
