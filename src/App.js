/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  
  View,
} from 'react-native';
import {DefaultTheme,Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignupScreen from './screens/SignupScreen';
import LoginScreen from './screens/SignupScreen';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: 'green',
   
  },
};


const Stack = createNativeStackNavigator();

const Navigation=()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
 

const App = () => {
   

  return (
    <PaperProvider theme={theme}>
     <View style={styles.container}>
     <Navigation/>
     </View>
     </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    

  },
})


export default App;
