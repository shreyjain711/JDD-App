'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

module.exports = StyleSheet.create(

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