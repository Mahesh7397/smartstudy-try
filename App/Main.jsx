import { View,StatusBar } from 'react-native'
import React from 'react'
import Starting from './Screen/Starting'
import { Colors } from '../Constants/colors';

import Loadingpage from './component/Pages/Loadingpage';
import Mainpage from './Screen/Main'
import { useUser } from './controller/userContext';
import Entry from './Screen/Entry';



const Main = () => {
    const {isUser,isLoading,fontsLoaded}=useUser()
  return (
    <View style={{backgroundColor:Colors.BACKGROUND_COLOR,flex:1}}>
    <StatusBar style="light" />
    {isUser?<Entry/>:isLoading || fontsLoaded?<Loadingpage/>:<Starting />}
    </View>
  )
}

export default Main