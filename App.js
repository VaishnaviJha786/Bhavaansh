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
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Home from './screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Weather from './screens/Weather';

const Stack=createStackNavigator();
const App= () => {
  return (
    <>
    <StatusBar barStyle='dark-content' backgroundColor='#0b0'/>
    <View style={styles.appview}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Weather" component={Weather}/>
       </Stack.Navigator>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  appview:{
    flex:1,
    backgroundColor: '#00bb00',
  }
});

export default()=>{
  return( 
   <NavigationContainer>
         <App /> 
   </NavigationContainer>
  );
 }
