import React, { Component } from 'react';
import { ScrollView, Platform, StyleSheet, Text, View, Button, TouchableOpacity, TextInput , Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './components/Header';
import { HomeScreen } from './components/HomeScreen'
import { DetailsScreen } from './components/DetailsScreen'

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
        },
      }}
      initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} 
        options={{ headerTitle: props => <LogoTitle {...props} /> }}/>
        <Stack.Screen name="Details" component={DetailsScreen} 
        options={{ headerTitle: props => <LogoTitle {...props} /> }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
