import { View, Text, Button, SafeAreaView, StyleSheet, Dimensions, Pressable, Image } from 'react-native'
import React from 'react'
import { Colors } from '../../Constants/colors'

const {width,height}=Dimensions.get('window')

const Intro = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container1}>
                <Image source={require('../assets/images/icon_cr.png')}  style={styles.image}/>
                <Text style={styles.headtext}>Smart Study</Text>
                <Text style={styles.subtext}>Experience a new way to enhance your learning.</Text>
            </View>
            <Pressable style={styles.button} onPress={() => navigation.navigate('login')}>
                <Text style={styles.text}>Get Started</Text>
            </Pressable>
        </SafeAreaView>
    )
}

export default Intro

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.BACKGROUND_COLOR,
        
    },
    container1:{
        height:(85/100)*height,
        justifyContent:'center',
        alignItems:'center'
    },
    button: {
        borderColor: Colors.BACKGROUND_COLOR,
        borderWidth: 1,
        width: (90/100)*width,
        height: (6/100)*height,
        borderRadius: 9,
        backgroundColor:Colors.MAIN_COLOR,
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        color: '#ffff',  
        fontSize:20,
        fontWeight:600,
    },
    image:{
        width:120,
        height:120,
        alignSelf:'center',
    },
    headtext:{
        color:'#fff',
        fontSize:30,
        fontWeight:'bold',
        fontFamily:'Poppins'
    },
    subtext:{
        color:'#fff',
        width:(80/100)*width,
        textAlign:'center',
        paddingVertical:5
    }
})

// .text {
//       position: absolute; 
//       top: 404px; 
//       left: 67px; 
//       font-family: Poppins; 
//       font-size: 40px; 
//       line-height: 56px; 
//       font-weight: 700; 
//       color: #FFFFFFFF; 
//     }