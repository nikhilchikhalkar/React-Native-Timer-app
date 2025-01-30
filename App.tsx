import { View } from 'react-native';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './src/navigation/bottomTabNavigation/bottomTabNavigation';
import { TimerProvider } from './src/context/TimerContext'; 
const App = () => {
  return (
    <TimerProvider>

    <View style={{flex:1}}>

      <NavigationContainer>
        <BottomTabNavigator/>
      </NavigationContainer>
    </View>
    </TimerProvider>
      
  )
}

export default App;

