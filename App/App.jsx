import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Starting from './Screen/Starting'
import { NavigationContainer } from '@react-navigation/native';
import { Colors } from '../Constants/colors';

import Loadingpage from './component/Pages/Loadingpage';

import { UserProvider } from './controller/userContext';
import Main from './Main';


export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Main/>
      </NavigationContainer>
    </UserProvider>
  );
}



