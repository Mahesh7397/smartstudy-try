import { Dimensions, Image, Pressable, SafeAreaView, TouchableOpacity, StyleSheet, Text, TextInput, View, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../Constants/colors'
import Api from '../api/Api'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useUser } from '../controller/userContext'

const { width, height } = Dimensions.get('window')


const Login = ({ navigation}) => {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [enter, setenter] = useState(false)
    const [secureText, setSecureText] = useState(true);
    const {Checkuser}=useUser()
     
    const Storeuserdata=async(data)=>{
        try {
            await AsyncStorage.setItem('account',JSON.stringify(data))
        } catch (error) {
            console.log(error)
        }
    }

    const storeToken=async(token)=>{
        try {
            const data={token:token}
            await AsyncStorage.setItem('token',JSON.stringify(data))
        } catch (error) {
            console.log(error)
        }
    }

    const handlesubmet = async () => {
        if (email?.split('@')[1].includes('gmail.com') && password?.length > 4) {
            const data = {
                email: email,
                password: password
            }
            try {
                setenter(false)
                const responce = await Api.Ser_Url.post('/api/login', data)
                if (responce.data.token) {
                    setenter(false)
                    Storeuserdata(responce.data.user)
                    storeToken(responce.data.token)
                    Checkuser()
                }
                else {
                    setenter(true)
                }
            } catch (error) {
                console.log(error)
                setenter(true)
            }
        }
        else {
            console.log("hii")
        }
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView style={styles.container}>
                <View style={styles.maincontainer}>
                    <Image source={require('../assets/images/icon_cr.png')} style={styles.image} />
                    <Text style={styles.headtext}>Smart Study</Text>
                    <Text style={styles.subtext}>Your Study Companion</Text>
                </View>
                <View style={styles.bodycontainer}>
                    <Text style={{ color: '#fff', fontSize: 20, fontWeight: '700', padding: 8 }}>Welcome back</Text>
                    <View style={styles.inputbox}>
                        <Text style={{ color: '#fff', fontSize: 17, fontWeight: '700' }}>Email</Text>
                        <TextInput placeholder='Enter email' textContentType='emailAddress' keyboardType='email-address' placeholderTextColor={Colors.MAIN_COLOR} style={styles.input} multiline={false} value={email} onChangeText={setemail} />
                    </View>
                    <View style={styles.inputbox}>
                        <Text style={{ color: '#fff', fontSize: 17, fontWeight: '700' }}>Password</Text>
                        <View><TextInput placeholder='Enter Password' secureTextEntry={secureText ? true : false} textContentType='password' placeholderTextColor={Colors.MAIN_COLOR} style={styles.input}
                            multiline={false} value={password} onChangeText={setpassword}
                        />
                            <TouchableOpacity
                                onPress={() => setSecureText(!secureText)}
                                style={{ marginTop: 10 }}
                            >
                                <Text style={{ color: '#fff', textAlign: 'right' }}>{secureText ? "Show Password" : "Hide Password"}</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                    <View style={styles.buttonbox}>
                        <Pressable style={styles.button} onPress={() => handlesubmet()}>
                            <Text style={{ color: '#fff', fontSize: 20, fontWeight: '800' }}>Sign in</Text>
                        </Pressable>
                    </View>{enter ? <Text style={{ color: 'red' }}>Invalide Email and Password</Text> : null}
                </View>
                <View style={styles.footcontainer}>
                    <Pressable onPress={() => navigation.navigate('signup')}><Text style={{ color: '#fff', fontSize: 15, padding: 5, margin: 5 }} >Don't have an account? <Text style={{ color: Colors.MAIN_COLOR, fontWeight: '700' }}>Sign up</Text></Text></Pressable>
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.BACKGROUND_COLOR,
        flex: 1,
    },
    maincontainer: {
        height: (40 / 100) * height,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bodycontainer: {
        height: (50 / 100) * height,
        // justifyContent:'center',
        alignItems: 'center',
    },
    footcontainer: {
        height: (10 / 100) * height,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 120,
        height: 120,
    },
    headtext: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'Poppins'
    },
    subtext: {
        color: '#fff',
        width: (80 / 100) * width,
        textAlign: 'center',
        paddingVertical: 5
    },
    input: {
        backgroundColor: '#fff',
        width: (80 / 100) * width,
        height: 40,
        padding: 2,
        paddingHorizontal: 4,
        borderRadius: 5,
        marginVertical: 3,
        color: Colors.MAIN_COLOR
    },
    inputbox: {
        padding: 5,
        height: (50 / 100) * height / 5,
    },
    buttonbox: {
        margin: 30,
        height: (50 / 100) * height / 5
    },
    button: {
        width: (80 / 100) * width,
        height: 40,
        backgroundColor: Colors.MAIN_COLOR,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    }
})