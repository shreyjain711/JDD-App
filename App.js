import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Navigator } from 'react-native';

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

export default class App extends Component {
  render() {
    return (
      <Navigator
        initialRoute = {{screen:'Page1'}}
        renderScene = {this.navigatorRenderScene}/>
    );
  }
  navigatorRenderScene(route, nav){
        switch (route.screen) {
          case "Page1":
            return(<Page1 navigator = {nav} />);
          case "Page2":
            return(<Page2 navigator = {nav} />);
        }
  }
}

class Page1 extends Component{
  render(){
    return (
      <Text> This is page one  </Text>
    );
  }
}

const styles = StyleSheet.create({
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
});
