import { Dimensions, Pressable, SectionList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, Fonst } from '../../Constants/colors'

const {width,height}=Dimensions.get('window')

const MultiSectionList = ({data,setisdetail,setdetail}) => {

    const randomcolor=()=>{
        const color=[ "#00695c","#00838f","#733380","#ad4263","#c76548","#e08a25","#431ee","#3aoca3"]
        const white=["#E3F2FD","#E6E6FA","#FFE4E1","#F5FFFA","#FFF0F5","#FDF5E6"]
        return color[Math.floor(Math.random() * color.length )]
    }
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const handleselected=(day,date,year,t)=>{
       const r={
         year:year,
         month:day,
         date:date,
         task:t
       }
       setdetail(r)
       setisdetail(true)
    }

  return (
    <View style={{width:'100%',justifyContent:'center',alignItems:'center'}}>
    {data.map((d,i)=>{
        const crl=d.task.map((e)=>{
            return{
               title:e.month,
               data:e.datelist
            }
        })
       return (
        <View style={styles.header} key={i}>
        <View style={styles.year}><Text style={styles.yeartext}>{d.year}</Text></View>
       <SectionList
        sections={crl}
        nestedScrollEnabled={true}
        scrollEnabled={false} 
        keyExtractor={(item) => item.day}
        renderSectionHeader={({section:{title}})=><View style={styles.month}><Text style={styles.monthtext}>{monthNames[title-1]}</Text></View>}//month
        renderItem={({item,section})=><View style={styles.day} key={item.day}>
            <View style={styles.date}><Text style={styles.datetext}>{item.day}</Text></View>
            <View key={item.day} style={styles.taskbox}>{item.list.map((t,index)=><Pressable onPress={()=>handleselected(section.title,item.day,d.year,t)} style={[styles.task]} key={index}><Text style={styles.tasktext}>{t.Title}</Text></Pressable>)}</View>
            </View>}
       />
       </View>
       )
    })}
    </View>
  )
}

export default MultiSectionList

const styles = StyleSheet.create({
    header:{
      alignItems:'center'
    },
    year:{
       width:(90/100)*width,
       justifyContent:'center',
       alignItems:'center',
       backgroundColor:Colors.LIGHT_BACKGROUND_COLOR,
       borderRadius:10,
    },
    yeartext:{
       color:Colors.TEXT_COLOR,
       fontSize:25,
       fontFamily:Fonst.POPPINS_BOLD
    },
    month:{
       width:(90/100)*width,
       height:150,
       margin:4,
       borderColor:Colors.BORDER_COLOR,
       backgroundColor:Colors.LIGHT_BACKGROUND_COLOR,
       flexDirection:'row',
       borderRadius:12,
    },
    monthtext:{
       alignSelf:'flex-end',
       color:Colors.TEXT_COLOR,
       fontSize:23,
       fontFamily:Fonst.POPPINS_BOLD,
       padding:5,
       margin:8,
    },
    day:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-evenly',
      height:'auto'
    },
    date:{
      width:40,
      height:40,
      // backgroundColor:Colors.MAIN_COLOR,
      alignSelf:'flex-start',
      // borderRadius:50,
      // borderColor:Colors.BORDER_COLOR,
      borderRightWidth:2,
      borderRightColor:Colors.MAIN_COLOR,
      padding:4,
      marginVertical:10,
      justifyContent:'center',
      alignItems:'center'
    },
    datetext:{
      fontSize:16,
      color:Colors.TEXT_COLOR,
      fontFamily:Fonst.POPPINS_BOLD
    },
    taskbox:{
       padding:2,
       margin:2,
       width:'80%',
       alignSelf:'center',
       
    },
    task:{
       width:'100%',
       backgroundColor:"#5f31a9",
       padding:2,
       marginVertical:4,
       borderRadius:8,
       borderColor:Colors.BORDER_COLOR
    },
    tasktext:{
       padding:2,
       margin:2,
       fontSize:15,
       fontFamily:Fonst.POPPINS_BOLD,
       color:Colors.TEXT_COLOR
    }
})