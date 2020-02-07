import React, { Component } from 'react';
import { ScrollView, Platform, StyleSheet, Text, View, Button, TouchableOpacity, TextInput , Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './components/Header';
import { HomeScreen } from './components/HomeScreen'
import { ATMScreen } from './components/ATMScreen';
import { BankScreen } from './components/BankScreen';
import { BMScreen } from './components/BMScreen';
import { POScreen } from './components/POScreen';
import { CSCScreen } from './components/CSCScreen';
import { MMICScreen } from './components/MMICScreen';



function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={{uri: '' }} />
 );
}



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          color:'white',
        },
      }}
      initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}
        options={{ headerTitle: props => <LogoTitle {...props} /> }}/>
        <Stack.Screen name="ATMs" component={ATMScreen}
        options={{ headerTitle: props => <LogoTitle {...props} /> }} />
        <Stack.Screen name="Banks" component={BankScreen}
        options={{ headerTitle: props => <LogoTitle {...props} /> }} />
        <Stack.Screen name="BMs" component={BMScreen}
        options={{ headerTitle: props => <LogoTitle {...props} /> }} />
        <Stack.Screen name="POs" component={POScreen}
        options={{ headerTitle: props => <LogoTitle {...props} /> }} />
        <Stack.Screen name="CSCs" component={CSCScreen}
        options={{ headerTitle: props => <LogoTitle {...props} /> }} />
        <Stack.Screen name="MMIC" component={MMICScreen}
        options={{ headerTitle: props => <LogoTitle {...props} /> }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
