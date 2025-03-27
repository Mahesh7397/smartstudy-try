import { Dimensions, SectionList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, Fonst } from '../../Constants/colors'

const {width,height}=Dimensions.get('window')

const MultiSectionList = ({data}) => {

    const randomcolor=()=>{
        const color=[ "#B71C1C",
            "#880E4F",
             "#4A148C",
             "#311B92",
            "#1A237E",
             "#0D47A1",
             "#01579B","#006064","#004D40","#1B5E20","#33691E","#827717","#F57F17","#F57F17","#E65100","#BF360C"]
        const white=["#E3F2FD","#E6E6FA","#FFE4E1","#F5FFFA","#FFF0F5","#FDF5E6"]
        return color[Math.floor(Math.random() * color.length )]
    }
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
  return (
    <View style={{width:'100%',justifyContent:'center',alignItems:'center'}}>
    {data.map((item,i)=>{
        const crl=item.task.map((e)=>{
            return{
               title:e.month,
               data:e.datelist
            }
        })
       return (
        <View style={styles.header} key={i}>
        <View style={styles.year}><Text style={styles.yeartext}>{item.year}</Text></View>
       <SectionList
        sections={crl}
        nestedScrollEnabled={true}
        scrollEnabled={false} 
        keyExtractor={(item) => item.day}
        renderSectionHeader={({section:{title}})=><View style={styles.month}><Text style={styles.monthtext}>{monthNames[title-1]}</Text></View>}//month
        renderItem={({item})=><View style={styles.day} key={item.day}>
            <View style={styles.date}><Text style={styles.datetext}>{item.day}</Text></View>
            <View style={styles.taskbox}>{item.list.map((t)=><View style={[styles.task,{backgroundColor:randomcolor()}]}><Text style={styles.tasktext}>{t.Title}</Text></View>)}</View>
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
      width:30,
      height:30,
      backgroundColor:Colors.MAIN_COLOR,
      alignSelf:'flex-start',
      borderRadius:50,
      borderColor:Colors.BORDER_COLOR,
      padding:2,
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
       alignSelf:'center'
    },
    task:{
       width:'100%',
       
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