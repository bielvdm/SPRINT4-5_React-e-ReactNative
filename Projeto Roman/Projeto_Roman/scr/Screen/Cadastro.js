import React, {Component} from 'react';
import api from '../Services/api'
import {Text, Image, View, FlatList, ImageBackground, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import RNPickerSelect from 'react-native-picker-select';
import { color } from 'react-native-reanimated';

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
        await api.post('/projetos', {
        IdTema : this.state.IdTema, 
        nome : this.state.Titulo,
        descricao : this.state.Descricao
    }, 
        {headers : { 'Authorization' : 'Bearer ' }})
        this.setState({IdTema : '', Titulo : '', Descricao : ''})
    }
    catch (erro){
        console.warn(erro)
    }
}



render(){
        return(
            <View style={Styles.container}>
                <Image source = {require('../../assets/img/logo.png')} style = {Styles.logo}/>
                <Text style={Styles.tituloPag}>novo projeto</Text>

            <View style={Styles.SelectCadastro}>
                <RNPickerSelect
                    onValueChange={(value) => this.setState({IdTema : value})}
                    items={[
                            { label: 'HQs', value: '1'},
                            { label: 'Gestão', value: '2' },
                            { label: 'Banco de Dados', value: '3' },
                            { label: 'BackEnd', value: '4' },
                            { label: 'FrontEnd', value: '5' },
                    ]}
                    useNativeAndroidPickerStyle={false}
                    placeholder={{
                        label: 'Escolha o tema...',
                        value: null,
                    }}
                    />
            </View>
                {/* <TextInput 
                    style={Styles.inputCadastro}
                    placeholder="IdTema"
                    placeholderTextColor="#FFF"
                    onChangeText={IdTema => this.setState({ IdTema })}
                    value = {this.state.IdTema}
                /> */}

                <TextInput 
                    style={Styles.inputCadastro}
                    placeholder="Nome"
                    placeholderTextColor="#FFF"
                    onChangeText={Titulo => this.setState({ Titulo })}
                    value = {this.state.Titulo}
                />

                <TextInput 
                    multiline = {true}
                    numberOfLines = {5}
                    style={Styles.inputCadastroDesc}
                    placeholder="Descrição"
                    placeholderTextColor="#FFF"
                    onChangeText={Descricao => this.setState({ Descricao })}
                    value = {this.state.Descricao}
                />

                <TouchableOpacity
                    style={Styles.btnCadastro}
                    onPress={this.Cadastrar}
                >
                        <Text style={Styles.btnText}>Cadastar</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const Styles = StyleSheet.create({ 
    container: {
        flex: 1,
        backgroundColor: '#062C5A',
        alignItems: 'center'
    },

    tituloPag : {
        fontSize : 18,
        textTransform : 'uppercase',
        letterSpacing : 6,
        color : '#fff',
        marginBottom: 50,
        marginTop: 20
    },

    logo : {
        width: 265,
        height : 165
    },

    
    inputCadastro : {

        width: 260,
        height: 40, 
        backgroundColor: '#7C8FA6',
        marginBottom: 20,
        paddingLeft: 15,
        borderRadius : 4,
        shadowColor :'#000',
        shadowOffset : {
            width: 3, height: 3
        },
        shadowOpacity: 0.5
    },

    SelectCadastro : {
        width: 260,
        backgroundColor: '#7C8FA6',
        marginBottom: 20,
        borderRadius : 4,
        shadowColor :'#000',
        shadowOffset : {
            width: 3, height: 3
        },
        shadowOpacity: 0.5
    },

    inputCadastroDesc : {
        width: 260,
        height: 80, 
        backgroundColor: '#7C8FA6',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 8,
        marginBottom: 20,
        borderRadius : 4,
        shadowColor :'#000',
        shadowOffset : {
            width: 3, height: 3
        },
        shadowOpacity: 0.3,
    },
    btnText : {
        color: '#fff'
    },

    btnCadastro : {
        backgroundColor: '#275C9F',
        width: 150,
        height: 30,
        borderRadius: 4,
        textAlign: 'center',
        paddingTop: 5,
        shadowColor :'#000',
        shadowOffset : {
            width: 3, height: 3
        },
        shadowOpacity: 0.3,
    }

}) 

  