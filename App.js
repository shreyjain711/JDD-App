import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';
import { Icon } from 'react-native-elements'

const BtnWords = {
  text1: 'Hello There!',
  text2: 'I am Money Mitra.\nI’ll be your money genie!',
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
}

export default class App extends Component {
  render() {
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
}

const styles = StyleSheet.create({
  texB: {
    alignItems: 'center',
    textAlign:'center',
    textAlignVertical:'center',
    color:'black',
    fontSize: 18,
    height:60,

  },
  icnB: {
    alignItems: 'center',
    textAlign:'center',
    textAlignVertical:'center',
    color:'black',
    fontSize: 18,
    height:40,

  },
  disB: {
    alignItems: 'center',
    textAlign:'center',
    textAlignVertical:'center',
    color:'black',
    fontSize: 18,
    height:80,
    color:'red',
  },
  supercontainer: {
    flex: 5,
    flexDirection: 'column',
    justifyContent: 'center',

  },
  textcontainer: {
    flex: 2.3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  buttoncontainerA:{
    flex:0.1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor:'#f4cccc',
    margin:5,
    borderRadius:10,
    padding:5,
    borderWidth:2,
    borderColor:'#ff7777',
  },
  buttoncontainerB:{
    flex:0.1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor:'#ccf4cc',
    margin:5,
    borderRadius:10,
    padding:5,
    borderWidth:2,
    borderColor:'#33ff33',
  },
  searchBox: {
    flex:0.1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor:'#cccccc',
    margin:5,
    borderRadius:10,
    padding:5,
    borderWidth:2,
    borderColor:'#666666',
  },
  hw: {
    fontSize: 24,
    textAlign: 'center',
    marginTop:25,
  },
  searchF:{
    width:500,
    backgroundColor:'#ffffff22',
    flex:0.5,
    height:60,
    alignItems: 'center',
    textAlign:'center',
    textAlignVertical:'center',
    borderRadius:2,
    color:'black',
    fontSize: 18,
    borderColor:'#e06666',

  },
  aBtntext:{
    backgroundColor:'#ffffff22',
    flex:0.4,
    height:60,
    alignItems: 'center',
    textAlign:'center',
    textAlignVertical:'center',
    borderRadius:2,
    color:'black',
    fontSize: 18,
    borderColor:'#e06666',

  },
  aBtnicon:{
    backgroundColor:'#ffffff22',
    flex:0.12,
    height:46,
    alignItems: 'center',
    textAlign:'center',
    textAlignVertical:'center',
    borderRadius:100,
    color:'black',
    fontSize: 20,
    borderColor:'#000000',
    borderWidth:2,
  },
  aBtndist:{

    flex:0.15,
    height:80,
    alignItems: 'center',
    textAlign:'center',
    textAlignVertical:'center',
    borderRadius:50,
    color:'red',
    fontSize: 20,
    borderColor:'#e06666',
  },
});
