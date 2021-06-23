import React, {Component} from 'react';
import api from '../Services/api'
import {Text, Image, View, FlatList, ImageBackground, StyleSheet, TextInput, TouchableOpacity} from 'react-native'

export default class Cadastro extends Component{
    constructor(props){
        super(props);
        this.state = {
            ListaTemas : [],
            IdTema : '',
            Titulo : '',
            Descricao : '',
        }

    }
    
Cadastrar = async() => {
    try{
        const resposta = await api.post('/projetos', {
        IdTema : this.state.IdTema, 
        nome : this.state.Titulo,
        descricao : this.state.Descricao
    }, 
        {headers : { 'Authorization' : 'Bearer ' }})
    }
    catch (erro){
        console.warn(erro)
    }
    }



render(){
        return(
            <View>
                <TextInput 
                    style={Styles.Cadastro}
                    placeholder="IdTema"
                    placeholderTextColor="#FFF"
                    onChangeText={IdTema => this.setState({ IdTema })}
                />

                <TextInput 
                    style={Styles.Cadastro}
                    placeholder="Titulo"
                    placeholderTextColor="#FFF"
                    onChangeText={Titulo => this.setState({ Titulo })}
                />

                <TextInput 
                    style={Styles.descricao}
                    placeholder="Descrição"
                    placeholderTextColor="#FFF"
                    onChangeText={Descricao => this.setState({ Descricao })}
                />

                <TouchableOpacity
                    style={Styles.Cadastrar}
                    onPress={this.Cadastrar}
                >
                        <Text style={Styles.btnLoginText}>Cadastar</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const Styles = StyleSheet.create({ 

}) 