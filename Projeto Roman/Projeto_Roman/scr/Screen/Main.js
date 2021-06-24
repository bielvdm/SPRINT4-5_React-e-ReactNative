import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Projetos from './Projetos.js';
import Cadastro from './Cadastro.js';

const bottomTab = createBottomTabNavigator();

export default class Main extends Component{
    render(){
        return(
                <bottomTab.Navigator 
                tabBarOptions = {{
                    showLabel : false,
                    showIcon : true,
                    activeBackgroundColor : '#FF9D0A',
                    style : { backgroundColor:"#FF8D00"}
                }}

                screenOptions = {({route}) => ({
                    tabBarIcon : () => {
                        if(route.name === 'Projetos'){
                            return(
                                <Image source={require('../../assets/img/lista.svg')} style = {styles.listaImg}/>
                            )
                        }

                        if(route.name === 'Cadastro'){
                            return(
                                <Image source = {require('../../assets/img/cadastro.svg')} style = {styles.listaImg}/>
                            )
                        }
                    }
                })}
    >
                    <bottomTab.Screen name='Projetos' component={Projetos}/>
                    <bottomTab.Screen name='Cadastro' component={Cadastro}/>
                </bottomTab.Navigator>
        )
    }
}

const styles = StyleSheet.create({
    listaImg : {
        width: 23,
        height: 23,
        tintColor: '#fff'
    }
})
