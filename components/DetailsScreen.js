import React, { Component } from 'react';
import { ScrollView, Platform, StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './Header';
import { HomeScreen } from './HomeScreen';

const styles = StyleSheet.create(
    {
      supercontainer: {
        flex: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      },
      textcontainer: {
        flex: 2.3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
      },
      buttoncontainer:{
        flex: 0.9,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fff',
      },
      hw: {
        fontSize: 24,
        textAlign: 'center',
        marginTop:25,
      },
      row1btn:{
        backgroundColor:'#cd3c29',
        flex:0.4,
        height:120,
        alignItems: 'center',
        textAlign:'center',
        textAlignVertical:'center',
        borderRadius:10,
        color:'white',
        fontSize: 20,
  
      },
      row2btn:{
        backgroundColor:'#69a84f',
        flex:0.4,
        height:120,
        alignItems: 'center',
        textAlign:'center',
        textAlignVertical:'center',
        borderRadius:10,
        color:'white',
        fontSize: 20,
      },
      row3btn:{
        backgroundColor:'#3d85c6',
        flex:0.4,
        height:120,
        alignItems: 'center',
        textAlign:'center',
        textAlignVertical:'center',
        borderRadius:10,
        flexWrap:'wrap',
        color:'white',
        fontSize: 20,
      },
    }
  );


export function DetailsScreen() {
    return (
      <View style={styles.supercontainer}>
  
          <View style={styles.searchBox}>
            <TouchableOpacity style={styles.aBtntext}><Text style={styles.texB}>Search</Text></TouchableOpacity>
            <TouchableOpacity style={styles.searchF}><TextInput style={styles.texB}/></TouchableOpacity>
          </View>
  
          <View style={styles.buttoncontainerB}>
            <TouchableOpacity style={styles.aBtntext}><Text style={styles.texB}>State Bank of India</Text></TouchableOpacity>
            <TouchableOpacity style={styles.aBtnicon}><Text style={styles.icnB}>Nav</Text></TouchableOpacity>
            <TouchableOpacity style={styles.aBtnicon}><Text style={styles.icnB}>Call</Text></TouchableOpacity>
            <TouchableOpacity style={styles.aBtnicon}><Text style={styles.icnB}>+</Text></TouchableOpacity>
            <Text style={styles.disB}>90m</Text>
          </View>
  
  
          <View style={styles.buttoncontainerB}>
            <TouchableOpacity style={styles.aBtntext}><Text style={styles.texB}>ICICI Bank ATM</Text></TouchableOpacity>
            <TouchableOpacity style={styles.aBtnicon}><Text style={styles.icnB}>Nav</Text></TouchableOpacity>
            <TouchableOpacity style={styles.aBtnicon}><Text style={styles.icnB}>Call</Text></TouchableOpacity>
            <TouchableOpacity style={styles.aBtnicon}><Text style={styles.icnB}>+</Text></TouchableOpacity>
            <Text style={styles.aBtndist}>1.8k</Text>
          </View>
  
  
        </View>
      );
  }
  

