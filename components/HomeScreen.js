import React, { Component } from 'react';
import { ScrollView, Platform, StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  Header from './Header';
import { DetailsScreen } from './DetailsScreen';
var styles = require('../style');

const BtnWords = {
    text1: 'Hello There!',
    text2: 'I am Mr. Money Mitra.\nI’ll be your money genie!',
    text3: 'What can I help you with\ntoday?',
    atm: 'Nearby\nATMs',
    bank:'Nearby\nBanks',
    mitra:'Nearby\nBank Mitra',
    po: 'Nearby\nPost Office',
    csc:'Nearby\nCommon\nService Center',
    mmic:'Money Mitra\nInformation\nCenter'
  };
  
  const Discarded = {
    btn1:'<Button title={BtnWords.atm} style={styles.row1btn} overrides={{backgroundColor: "#cd3c29"}}></Button>',
    btn2:'<Button title={BtnWords.bank} underlayColor="#FFF" style={styles.row1btn}></Button>',
    btn3:"<Button title={BtnWords.mitra} underlayColor='#FFF' style={styles.row2btn}></Button>",
    btn4:"<Button title={BtnWords.po} underlayColor='#FFF' style={styles.row2btn}></Button>",
    btn5:"<Button title={BtnWords.csc} underlayColor='#FFF' style={styles.row3btn}></Button>",
    btn6:"<Button title={BtnWords.mmic} underlayColor='#FFF' style={styles.row3btn}></Button>",
  };
 


export function HomeScreen({navigation}) {
    return (
      <View style={styles.supercontainer}>
        <View style={styles.textcontainer}>
          <Text style={styles.hw}>{BtnWords.text1}</Text>
          <Text style={styles.hw}>{BtnWords.text2}</Text>
          <Text style={styles.hw}>{BtnWords.text3}</Text>
        </View>
  
        <View style={styles.buttoncontainer}>
          <Button 
            style = {styles.row1btn}
            title={BtnWords.atm}
            onPress={() => navigation.navigate('Details')}
          />
          <Button
            style = {styles.row1btnn}
            title={BtnWords.bank}
            onPress={() => navigation.navigate('Details')}
          />
        </View>
  
        <View style={styles.buttoncontainer}>
          <Text style={styles.row2btn}>{BtnWords.mitra}</Text>
          <Text style={styles.row2btn}>{BtnWords.po}</Text>
        </View>
  
  
        <View style={styles.buttoncontainer}>
          <Text style={styles.row3btn}>{BtnWords.csc}</Text>
          <Text style={styles.row3btn}>{BtnWords.mmic}</Text>
        </View>
      </View>
    );
  }