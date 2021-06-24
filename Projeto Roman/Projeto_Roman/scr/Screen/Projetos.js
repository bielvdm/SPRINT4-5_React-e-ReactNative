import React, {Component} from 'react';
import api from '../Services/api'
import {Text, Image, View, FlatList, ImageBackground, StyleSheet} from 'react-native'


export default class Projetos extends Component{
    constructor(props){
        super(props)
        this.state ={
            ListaProjeto : []
        }
    }

    ListarProjeto = async() => {
        try{
        const resposta = await api.get('/projetos', {headers : { 'Authorization' : 'Bearer ' }})
        this.setState({ListaProjeto : resposta.data})

        console.warn(resposta.data)
        }
        
        catch(erro){
            console.warn(erro)
        }

    }

    componentDidMount(){
        this.ListarProjeto();
    }

    render(){
        return(
            <View style={Styles.container}>
                <Image source = {require('../../assets/img/logo.png')} style = {Styles.logo}/>
                <Text style = {Styles.tituloPag}>projetos cadastrados</Text>
                <FlatList 
                data={this.state.ListaProjeto}
                contentContainerStyle={Styles.Lista}
                keyExtractor={item => item.idProjeto}
                renderItem={this.renderItem}
                />
            </View>
        )
    }

    renderItem = ({item}) => (
        <ImageBackground source = {require('../../assets/img/Novo projeto.png')} imageStyle={{ borderRadius: 5}} style = {Styles.contentConsulta}>
            <View style={Styles.linhaListar}>
                <Image source = {require('../../assets/img/chalkboard-teacher-solid.svg')} style={Styles.iconTema}/>
                <Text style={Styles.listaText}>{item.idTema}</Text>
            </View>

            <View style={Styles.linhaListar}>
                <Image source = {require('../../assets/img/lightbulb-solid.svg')} style={Styles.iconName}/>
                <Text style={Styles.listaText}>{item.nome}</Text>
            </View>

            <View style={Styles.linhaListarDesc}>
                <Image source = {require('../../assets/img/descricao.svg')} style={Styles.iconDesc}/>
                <Text numberOfLines={2} style={Styles.listaTextDesc}>{item.descricao}</Text>
            </View>

        </ImageBackground>
    )
}
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#062C5A',
        alignItems: 'center'
      },

      contentConsulta: {
        width: 250,
        height: 140,
        fontSize: 19,
        paddingLeft: 14,
        marginRight: 20,
        marginBottom: 20,
        justifyContent: 'center'
      },

      logo : {
          width: 265,
          height : 165
      },

      tituloPag : {
          fontSize : 18,
          textTransform : 'uppercase',
          letterSpacing : 6,
          color : '#fff',
          marginBottom: 25
      },

      listaText: {
        fontSize: 17,
        color: 'white',
        marginLeft: 4
      },

      listaTextDesc: {
        fontSize: 14,
        color: 'white',
        marginLeft: 4
      },

      linhaListar: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
      },

      linhaListarDesc: {
        flexDirection: 'row',
        marginBottom: 10,
        marginRight: 15
      },

      iconDesc : {
        width: 18,
        height: 18,
        tintColor: '#fff',
        marginRight : 15
      },

      iconName : {
          width: 16,
          height: 23,
          tintColor: '#fff',
          marginRight : 12,
          marginLeft : 4
      },

      iconTema : {
          width: 23,
          height : 18,
          tintColor: '#fff',
          marginRight : 10
      }

})