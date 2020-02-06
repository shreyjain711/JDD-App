import React, { Component } from 'react';
import { ScrollView, Platform, StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

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


function HomeScreen({ navigation }) {
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

function DetailsScreen() {
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
          <TouchableOpacity style={styles.aBtntext}><Text style={styles.texB}>Andhra Bank</Text></TouchableOpacity>
          <TouchableOpacity style={styles.aBtnicon}><Text style={styles.icnB}>Nav</Text></TouchableOpacity>
          <TouchableOpacity style={styles.aBtnicon}><Text style={styles.icnB}>Call</Text></TouchableOpacity>
          <TouchableOpacity style={styles.aBtnicon}><Text style={styles.icnB}>+</Text></TouchableOpacity>
          <Text style={styles.aBtndist}>200m</Text>
        </View>

        <View style={styles.buttoncontainerB}>
          <TouchableOpacity style={styles.aBtntext}><Text style={styles.texB}>HDFC Bank ATM</Text></TouchableOpacity>
          <TouchableOpacity style={styles.aBtnicon}><Text style={styles.icnB}>Nav</Text></TouchableOpacity>
          <TouchableOpacity style={styles.aBtnicon}><Text style={styles.icnB}>Call</Text></TouchableOpacity>
          <TouchableOpacity style={styles.aBtnicon}><Text style={styles.icnB}>+</Text></TouchableOpacity>
          <Text style={styles.aBtndist}>850m</Text>
        </View>

        <View style={styles.buttoncontainerB}>
          <TouchableOpacity style={styles.aBtntext}><Text style={styles.texB}>Keshav Sehkari Bank Ltd</Text></TouchableOpacity>
          <TouchableOpacity style={styles.aBtnicon}><Text style={styles.icnB}>Nav</Text></TouchableOpacity>
          <TouchableOpacity style={styles.aBtnicon}><Text style={styles.icnB}>Call</Text></TouchableOpacity>
          <TouchableOpacity style={styles.aBtnicon}><Text style={styles.icnB}>+</Text></TouchableOpacity>
          <Text style={styles.aBtndist}>900m</Text>
        </View>

        <View style={styles.buttoncontainerA}>
          <TouchableOpacity style={styles.aBtntext}><Text style={styles.texB}>PNB Bank</Text></TouchableOpacity>
          <TouchableOpacity style={styles.aBtnicon}><Text style={styles.icnB}>Nav</Text></TouchableOpacity>
          <TouchableOpacity style={styles.aBtnicon}><Text style={styles.icnB}>Call</Text></TouchableOpacity>
          <TouchableOpacity style={styles.aBtnicon}><Text style={styles.icnB}>+</Text></TouchableOpacity>
          <Text style={styles.aBtndist}>1.3k</Text>
        </View>

        <View style={styles.buttoncontainerA}>
          <TouchableOpacity style={styles.aBtntext}><Text style={styles.texB}>Oriental Bank of Commerce</Text></TouchableOpacity>
          <TouchableOpacity style={styles.aBtnicon}><Text style={styles.icnB}>Nav</Text></TouchableOpacity>
          <TouchableOpacity style={styles.aBtnicon}><Text style={styles.icnB}>Call</Text></TouchableOpacity>
          <TouchableOpacity style={styles.aBtnicon}><Text style={styles.icnB}>+</Text></TouchableOpacity>
          <Text style={styles.aBtndist}>1.3k</Text>
        </View>


        <View style={styles.buttoncontainerB}>
          <TouchableOpacity style={styles.aBtntext}><Text style={styles.texB}>State Bank of India</Text></TouchableOpacity>
          <TouchableOpacity style={styles.aBtnicon}><Text style={styles.icnB}>Nav</Text></TouchableOpacity>
          <TouchableOpacity style={styles.aBtnicon}><Text style={styles.icnB}>Call</Text></TouchableOpacity>
          <TouchableOpacity style={styles.aBtnicon}><Text style={styles.icnB}>+</Text></TouchableOpacity>
          <Text style={styles.aBtndist}>1.5k</Text>
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

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
