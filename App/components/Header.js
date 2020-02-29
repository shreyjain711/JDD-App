import React, { Component } from 'react';
import { ScrollView, Platform, StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';
import { Appbar } from 'react-native-paper';


const Header = ()=>{
    return (
        <Appbar.Header>
      
          <Appbar.Content
            title="Title"
            subtitle="Subtitle"
          />
         </Appbar.Header>
      );
}

export default Header;