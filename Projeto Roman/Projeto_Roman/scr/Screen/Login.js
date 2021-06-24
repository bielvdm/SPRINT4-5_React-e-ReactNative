import React, { Component } from 'react';
import {ImageBackground, StyleSheet, TextInput, TouchableOpacity, View, Text} from 'react-native';


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
        <ImageBackground source={require('../../assets/img/backgroundLogin.png')} style={styles.imageBackground}>
          <View style = {styles.containerLogin}>
            <TextInput
              placeholder = 'E-Mail'
              placeholderTextColor = '#fff'
              keyboardType = 'email-address'
              style={styles.inputCadastro}
              onChangeText={email => this.setState({ email })}
            />

            <TextInput
              placeholder = 'Senha'
              placeholderTextColor = '#fff'
              secureTextEntry = {true}
              style={styles.inputCadastro}
              onChangeText={email => this.setState({ email })}
            />

            <TouchableOpacity 
              style={styles.btnLogin} 
              //onPress = {}
            >
              <Text style = {styles.btnText}>Logar</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
    )
}
}

const styles = StyleSheet.create({
  imageBackground : {
    flex: 1,
    justifyContent: 'center'
  },

  inputCadastro : {
    width: 260,
    height: 40, 
    backgroundColor: '#7C8FA6',
    marginBottom: 25,
    paddingLeft: 15,
    borderRadius : 4,
    shadowColor :'#000',
    shadowOffset : {
        width: 2, height: 2
    },
    shadowOpacity: 0.2
  },

  btnLogin : {
    backgroundColor: '#275C9F',
    width: 120,
    height: 30,
    borderRadius: 4,
    textAlign: 'center',
    paddingTop: 5,
    shadowColor :'#000',
    shadowOffset : {
        width: 3, height: 3
    },
    shadowOpacity: 0.3,
  },

  btnText : {
    color: '#fff'
  },

  containerLogin : {
    marginTop: '60%',
    alignItems: 'center',
  }
})