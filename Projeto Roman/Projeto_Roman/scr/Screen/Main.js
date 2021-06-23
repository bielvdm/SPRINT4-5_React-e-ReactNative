import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Projetos from './Projetos.js';
import Cadastro from './Cadastro.js';

const bottomTab = createBottomTabNavigator();

export default class Main extends Component{
    render(){
        return(
            <View>
                <bottomTab.Navigator initialRouteName = 'Projetos'>
                    <bottomTab.Screen name='Projetos' component={Projetos}/>
                    <bottomTab.Screen name='Cadastro' component={Cadastro}/>
                </bottomTab.Navigator>
            </View>
        )
    }
}
