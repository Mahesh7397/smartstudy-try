import { Dimensions, Image, Pressable, StyleSheet, Keyboard,Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Tabs/Home'
import Courses from '../Tabs/Courses'
import Task from '../Tabs/Task'
import Ai from '../Tabs/Ai'
import { Colors, Fonst } from '../Constants/colors'
//icons
import Icon from 'react-native-vector-icons/AntDesign'
import Icon3 from "react-native-vector-icons/Ionicons"
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons"
import Menu from "react-native-vector-icons/Entypo"
import Account from '../Tabs/Account'

const { width, height } = Dimensions.get('window')

const Tap = createBottomTabNavigator()
const Main = ({navigation}) => {

  // const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  // useEffect(() => {
  //   const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
  //     setKeyboardVisible(true);
  //   });
  //   const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
  //     setKeyboardVisible(false);
  //   });

  //   return () => {
  //     showSubscription.remove();
  //     hideSubscription.remove();
  //   };
  // }, []);

  return (
    <Tap.Navigator screenOptions={
      {
        tabBarShowLabel: false,
        tabBarStyle: {
          display:false?'none':'flex',
          backgroundColor: Colors.NAVBAR_COLOR,
          height: 60,
          borderColor: Colors.BACKGROUND_COLOR
        }, 
        headerStyle: {
          backgroundColor: Colors.BACKGROUND_COLOR,
        },
        headerTitleStyle: {
          color: Colors.TEXT_COLOR,
          fontFamily: Fonst.POPPINS_BOLD,
          fontSize: 22,
          paddingTop: 4,
          width: "auto"
        },
        headerTitleAlign: 'center',
        tabBarInactiveTintColor: Colors.TINTY_COLOR,
        tabBarActiveTintColor: Colors.MAIN_COLOR,
        tabBarItemStyle: {
          margin: 2,
          paddingTop: 4,
        }
      }
    }>
      <Tap.Screen name='Home'
        component={Home}
        options={
          {
            tabBarIcon: ({ color }) => <Icon name='home' color={color} size={25} />,
            headerTitle: 'Smart Study',
            headerTitleAlign: 'left',
            headerTitleStyle: {
              color: Colors.TEXT_COLOR,
              fontFamily: Fonst.POPPINS_BOLD,
              fontSize: 22,
              paddingTop: 4,
              width: 150
            },
            headerLeft: () => <Pressable onPress={()=>navigation.navigate('about')}><Image source={require('../assets/images/icon_cr.png')} style={styles.image} /></Pressable>,
            headerRight: () => <Menu name='menu' onPress={()=>navigation.navigate('menu')} color={Colors.TEXT_COLOR} size={35} style={{ padding: 4 }} />
          }}
      />
      <Tap.Screen name='Courses'
        component={Courses}
        options={{ tabBarIcon: ({ color }) => <Icon3 name='book-outline' color={color} size={25} /> }}
      />
      <Tap.Screen name='Ai'
        component={Ai}
        options={{
          tabBarIcon: ({ color }) => <Image source={require('../assets/images/Ai_icon.png')} style={{
            borderWidth: 2, padding: 1, width: 38,
            height: 38, borderColor: color, borderRadius: 50
          }} />
        }}
      />
      <Tap.Screen name='Task'
        component={Task}
        options={{ 
          tabBarIcon: ({ color }) => <Icon2 name='calendar-check-outline' color={color} size={25} /> ,
          headerTitle:'Study Planer'
        }}
      />

      <Tap.Screen name='Account'
        component={Account}
        options={{
           tabBarIcon: ({ color }) => <Icon2 name='account-circle-outline' color={color} size={30} /> ,
          headerTitle:'Profile'
          }}
      />
    </Tap.Navigator>
  )
}

export default Main

const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60
  },
  aiimage: {
    width: 38,
    height: 38
  },
})