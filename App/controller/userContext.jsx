import React, { createContext, useContext, useState ,useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserContext = createContext();

import * as Font from "expo-font";

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [isUser, setisUser] = useState(false)
  const [isLoading, setisLoading] = useState(false)
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      "Poppins-Black":require('../assets/Fonts/Poppins-Black.ttf'),
      "Poppins-Bold":require('../assets/Fonts/Poppins-Bold.ttf')
    });
  };


  const Checkuser = async () => {
    try {
      setisLoading(true)
      const extesuser = await AsyncStorage.getItem('account')
      if (extesuser === null) {
        setisUser(false)
        setisLoading(false)
      }
      else {
        setisUser(true)
        setisLoading(false)
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    Checkuser()
    setFontsLoaded(true)
    loadFonts().then(() => setFontsLoaded(false));
  },[])


  return (
    <UserContext.Provider value={{isUser,isLoading,fontsLoaded,Checkuser }}>
      {children}
    </UserContext.Provider>
  );
};
