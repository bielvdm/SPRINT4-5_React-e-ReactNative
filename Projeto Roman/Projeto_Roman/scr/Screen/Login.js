import React, { Component } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      email : '',
      senha : ''
    }
  }

  render(){
    return(
        <Text>Teste</Text>
    )
}
}