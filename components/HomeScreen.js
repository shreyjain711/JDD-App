import React, { Component } from 'react';
import { ScrollView, Platform, StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  Header from './Header';
import { ATMScreen } from './ATMScreen';
import { BankScreen } from './BankScreen';
import { BMScreen } from './BMScreen';
import { POScreen } from './POScreen';
import { CSCScreen } from './CSCScreen';
import { MMICScreen } from './MMICScreen';
var styles = require('../style');

const BtnWords = {
    text1: 'Hello There!',
    text2: 'I am Money Mitra.\nI’ll be your money genie!',
    text3: 'What can I help you with\ntoday?',
    atm: '\n        Nearby        \n\nATMs\n',
    bank:'\n        Nearby        \n\nBanks\n',
    mitra:'\n        Nearby        \n\nBank Mitra\n',
    po: '\n        Nearby        \n\nPost Office\n',
    csc:'\n        Nearby        \nCommon\nService Center\n',
    mmic:'\n  Money Mitra  \nInformation\nCenter\n'
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
            color= {'#cd3c29'}
            style = {styles.row1btn}
            title={BtnWords.atm}
            onPress={() => navigation.navigate('ATMs')}
          />
          <Button
            color= {'#cd3c29'}
            style = {styles.row1btnn}
            title={BtnWords.bank}
            onPress={() => navigation.navigate('Banks')}
          />
        </View>

        <View style={styles.buttoncontainer}>
          <Button
            color= {'#69a84f'}
            style = {styles.row2btn}
            title={BtnWords.mitra}
            onPress={() => navigation.navigate('BMs')}
          />
          <Button
            color= {'#69a84f'}
            style = {styles.row2btn}
            title={BtnWords.po}
            onPress={() => navigation.navigate('POs')}
          />
        </View>


        <View style={styles.buttoncontainer}>
          <Button
            color= {'#3d85c6'}
            style = {styles.row2btn}
            title={BtnWords.csc}
            onPress={() => navigation.navigate('CSCs')}
          />
          <Button
            color= {'#3d85c6'}
            style = {styles.row2btn}
            title={BtnWords.mmic}
            onPress={() => navigation.navigate('MMIC')}
          />
        </View>
      </View>
    );
  }
