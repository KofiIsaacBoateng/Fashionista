import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native'
import MainNavigation from './src/navigation/GeneralNav'

export default function App() {
  return (
      <NavigationContainer>
          <StatusBar style='dark' />
          <MainNavigation />
      </NavigationContainer>
  );
}

const fun = (name) => {
  return name === name
}