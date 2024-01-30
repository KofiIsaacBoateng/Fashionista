import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native'
import MainNavigation from './src/navigation/GeneralNav'
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
      <SafeAreaProvider>
        <NavigationContainer>
            <StatusBar style='light' backgroundColor='#0c0d34' />
            <MainNavigation />
        </NavigationContainer>
      </SafeAreaProvider>
  );
}
