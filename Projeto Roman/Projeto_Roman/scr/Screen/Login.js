import React, { Component } from 'react';
import {ImageBackground, StyleSheet, TextInput, TouchableOpacity, View, Text} from 'react-native';
import api from '../Services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      email : '',
      senha : ''
    }
  }

  Login = async() => {
    try {
      const resposta = await api.post('/Login', {
        email : this.state.email,
        senha : this.state.senha,
      });

      this.setState({email : '', senha : ''})
      
      await AsyncStorage.setItem('userToken', resposta.data.token);
      this.props.navigation.navigate('Main');
    }catch(error) {
      console.warn(error)
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
              value = {this.state.email}
            />

            <TextInput
              placeholder = 'Senha'
              placeholderTextColor = '#fff'
              secureTextEntry = {true}
              style={styles.inputCadastro}
              onChangeText={senha => this.setState({ senha })}
              value = {this.state.senha}
            />

            <TouchableOpacity 
              style={styles.btnLogin} 
              onPress = {this.Login}
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