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
      style={{ width: 50, height: 50, borderRadius:50 }}
      source={{uri: 'data:image/png;base64,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' }} />
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
