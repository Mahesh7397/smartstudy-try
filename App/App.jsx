import { NavigationContainer } from '@react-navigation/native';

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



