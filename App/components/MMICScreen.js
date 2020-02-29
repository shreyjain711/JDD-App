import React, { Component } from 'react';
import { ScrollView, Platform, StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './Header';
import { HomeScreen } from './HomeScreen';
var styles = require('../style');

export function MMICScreen() {
    return (
      <View style={styles.supercontainer}>

          <View style={styles.searchBox}>
            <TouchableOpacity style={styles.aBtntext}><Text style={styles.texB}>AGE</Text></TouchableOpacity>
            <TouchableOpacity style={styles.searchF}><TextInput style={styles.texB} keyboardType={'numeric'} /></TouchableOpacity>
          </View>

          <Text style={styles.texB}>Subsequest screens will be as in the wireframes</Text>

        </View>
      );
  }
