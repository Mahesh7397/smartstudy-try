import { Modal, StyleSheet, Text, View, TouchableWithoutFeedback, Pressable } from 'react-native'
import React from 'react'
import { Colors, Fonst } from '../../Constants/colors'
//icon
import Delete from 'react-native-vector-icons/MaterialCommunityIcons'

const TaskDetail = ({ isvisible, setisvisible, data, ondelete }) => {
  return (
    <><Modal
      visible={isvisible}
      animationType='slide'
      onRequestClose={() => setisvisible(false)}
      transparent
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headertext}>{data.date+"-"+data.month+"-"+data.year}</Text>
          <Pressable onPress={ondelete}>
            <Delete name='delete' color={'#E53935'} size={30} style={{padd:2,margin:2}}/>
          </Pressable>
        </View>
        <View style={styles.body}>
          <View style={styles.title}>
            <Text style={styles.text}>Title:</Text>
            <Text style={styles.titletext}>{data?.task?.Title}</Text>
          </View>
          <View style={styles.dec}>
            <Text style={styles.text}>Description:</Text>
            <Text style={styles.dectext}>{data?.task?.Description}</Text>
          </View>
          
            <View style={styles.time}><Text style={styles.text}>
              {data?.task?.Timing?.start.length>0?data?.task?.Timing?.start :"----"}</Text>
              <Text style={styles.text}>
              {data?.task?.Timing?.Stop.length>0?data?.task?.Timing?.Stop :"----"}</Text></View>
          
        </View>
      </View>
      <TouchableWithoutFeedback onPressIn={()=>setisvisible(false)}>
        <View style={styles.modalbg} />
      </TouchableWithoutFeedback>
    </Modal>
    </>
  )
}

export default TaskDetail

const styles = StyleSheet.create({
  modalbg: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: Colors.MODAL_BG
  },
  container: {
    backgroundColor: Colors.BACKGROUND_COLOR,
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0,
    top: '50%',
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderLeftWidth: 2,
    borderColor: Colors.BORDER_COLOR,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent:'center',
    alignItems:'center',
    zIndex:1000
  },
  header:{
    height:'10%',
    width:'90%',
    backgroundColor:Colors.BOX_COLOR ,
    padding:5,
    margin:5,
    borderRadius:12,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  headertext:{
     paddingHorizontal:5,
     marginHorizontal:5,
     fontSize:20,
     fontFamily:Fonst.POPPINS_BOLD,
     color:Colors.TEXT_COLOR,
  },
  body:{
    height:'80%',
    width:'90%',
    backgroundColor:Colors.BOX_COLOR,
    padding:5,
    margin:5,
    borderRadius:12,

    // justifyContent:'center',
    // alignItems:'center'
  },
  title:{
    width:'90%',
    padding:3,
    margin:2,
    flexDirection:'row'
    // justifyContent:'center',
    // alignItems:'center'
  },
  titletext:{
      color:Colors.TEXT_COLOR,
      fontSize:18,
      fontFamily:Fonst.POPPINS_BOLD,
      paddingHorizontal:10,
      marginHorizontal:20,
      paddingVertical:3,
      marginVertical:5
  },
  dec:{
    width:'90%',
    maxHeight:'40%',
    minHeight:'15%',
    padding:2,
    margin:3,
    flexDirection:'row'
    // justifyContent:'center',
    // alignItems:'center',
  },
  dectext:{
    padding:3,
    margin:5,
    fontSize:18,
    fontFamily:Fonst.POPPINS_BOLD,
    color:Colors.TEXT_COLOR
  },
  text:{
    padding:3,
    margin:5,
    fontSize:20,
    fontFamily:Fonst.POPPINS_BOLD,
    color:Colors.MAIN_COLOR
  },
  time:{
    width:'90%',
    flexDirection:'row',
    justifyContent:'space-evenly',
    padding:3,
    margin:5,
    // justifyContent:'center',
    // alignItems:'center'
  },
  butbox:{
    width:'90%',
    height:'20%',
    justifyContent:'center',
    alignItems:'center'
  },
  buttext:{

  }
})