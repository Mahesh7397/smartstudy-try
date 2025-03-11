import { StyleSheet, Text, View } from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Intro from '../Layout/Intro'
import Login from '../Layout/Login'
import Singup from '../Layout/Singup'

const Stack=createNativeStackNavigator()

const Starting = ({getuse}) => {
  return (
    <Stack.Navigator screenOptions={{
       headerShown:false,
    }}>
        <Stack.Screen name='start' component={Intro}/>
        <Stack.Screen name='login' component={Login} initialParams={{getuse}}/>
        <Stack.Screen name='signup' component={Singup}/>
    </Stack.Navigator>
  )
}

export default Starting

const styles = StyleSheet.create({})