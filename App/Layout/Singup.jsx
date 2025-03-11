import { Alert, Dimensions, Keyboard, Pressable, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity,TouchableWithoutFeedback, View } from 'react-native'
import React,{useEffect, useState} from 'react'
import { Colors } from '../../Constants/colors'
import Api from '../api/Api'

const { width, height } = Dimensions.get('window')

const Singup = ({ navigation }) => {

  const [secureText, setSecureText] = useState(true);
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')
  const [name,setname]=useState('')
  const [passwordwrong,setpasswordwrong]=useState(false)
  const [newpas,setnewpas]=useState('')
  const [conpas,setconpas]=useState('')
  const [disable,setdisable]=useState(true)
  const [message,setmessage]=useState('')
  const [ismessage,setismessage]=useState(false)

  const checkpassword=()=>{
    if(newpas===conpas){
      setpassword(conpas)
      setpasswordwrong(false)
      return true
    }
    else{
      setpasswordwrong(true)
      return false
    }
  }

  const handlesubmit=async()=>{
    if(checkpassword()){
      const data={
        name:name,
        email:email,
        password:password
      }
      try {
        const responce=await Api.Ser_Url.post('/api/register',data)
        console.log(responce.data)
        if(responce.data?.permisson){
            Alert.alert(
              "Sign up",
              responce.data?.message
            ,[
              {text:"ok" ,onPress:()=>navigation.navigate('login')}
            ])
        }
        else if(!responce.data?.permisson){
            setismessage(true)
            setmessage(responce.data.message)
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

  const checkfill=()=>{
     if(name?.length>3 && email?.split('@')[1]?.includes('gmail.com')){//
        setdisable(false)
     }else{
      setdisable(true)
     }
  }

  useEffect(()=>{
    checkfill()
  },[name,email,conpas,newpas])

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container} >
        <View style={styles.mainbox}>
          <Text style={{ color: '#fff', fontSize: 18, fontWeight: '400' }}>Welcome  to</Text>
          <Text style={{ color: '#fff', fontSize: 30, fontWeight: 'bold', padding: 4, fontFamily: 'Poppins' }}>Smart Study</Text>
        </View>
        <View style={styles.bodybox}>
        <View style={styles.inputbox}>
            <Text style={styles.tex}>Name</Text>
            <TextInput style={styles.input} placeholder='enter Name' placeholderTextColor={Colors.MAIN_COLOR} textContentType='name' value={name} onChangeText={setname} />
          </View>
          <View style={styles.inputbox}>
            <Text style={styles.tex}>Email</Text>
            <TextInput style={styles.input} placeholder='enter Email' placeholderTextColor={Colors.MAIN_COLOR} textContentType='emailAddress' value={email} onChangeText={setemail}  />
            {ismessage?<Text>{message}</Text>:null}
          </View>
          <View style={styles.inputbox}>
            <Text style={styles.tex}>Password</Text>
            <TextInput style={styles.input} placeholder='Create Password' placeholderTextColor={Colors.MAIN_COLOR} textContentType='newPassword' secureTextEntry={secureText ? true : false} value={newpas} onChangeText={setnewpas}  />
          </View>
          <View style={styles.inputbox}>
            <Text style={styles.tex}>Conform Password</Text>
            <TextInput style={styles.input} placeholder='Conform Password' placeholderTextColor={Colors.MAIN_COLOR} textContentType='password' secureTextEntry={secureText ? true : false} value={conpas} onChangeText={setconpas} />
            {passwordwrong?<Text style={{color:'red'}}>incorrect password</Text>:null}
            <TouchableOpacity
              onPress={() => setSecureText(!secureText)}
              style={{ marginTop: 10 ,padding:4}}
            >
              <Text style={{ color: '#fff', textAlign: 'right' }}>{secureText ? "Show Password" : "Hide Password"}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonbox}>
            <Pressable style={styles.button} disabled={disable}  onPress={()=>handlesubmit()}>
              <Text style={{ color: '#fff', fontSize: 20, fontWeight: '800' }}>Sign up</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.footbox}>
          <Pressable onPress={() => navigation.navigate('login')}  ><Text style={{ color: '#fff', fontSize: 15, padding: 5,margin:5 }}>Already have an account? <Text style={{ color: Colors.MAIN_COLOR, fontWeight: '700' }}>Log in</Text></Text></Pressable>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default Singup

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.BACKGROUND_COLOR,
    flex: 1
  },
  tex: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
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
    height: (60 / 100) * height / 5,
    padding: 3,

  },
  mainbox: {
    height: (30 / 100) * height,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bodybox: {
    height: (60 / 100) * height,
    // justifyContent:'center',
    alignItems: 'center'
  },
  footbox: {
    height: (10 / 100) * height,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    width: (80 / 100) * width,
    height: 40,
    backgroundColor: Colors.MAIN_COLOR,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },  
    buttonbox: {
    margin: 30,
    height: (50 / 100) * height / 5
},
})