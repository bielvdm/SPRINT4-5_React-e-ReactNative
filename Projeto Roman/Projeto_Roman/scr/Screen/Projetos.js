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

    ListaProjeto = async() => {
        try{
        const resposta = await api.get('/projetos', {headers : { 'Authorization' : 'Bearer ' }})
        this.setState({ListaProjeto : resposta.data})
        }
        
        catch(erro){
            console.warn(erro)
        }

    }

    componentDidMount(){
        this.ListaProjeto();
    }

    render(){
        return(
            <View>
                <FlatList 
                data={this.state.ListaProjeto}
                contentContainerStyle={Styles.Lista}
                keyExtractor={item => item.IdProjeto}
                renderItem={this.renderItem}
                />
            </View>
        )
    }

    renderItem = ({item}) => (
        <View>
            <View>
                <Text>{item.nome}</Text>
                <Text>{item.descricao}</Text>
                <Text>{item.IdTema}</Text>
            </View>
        </View>
    )
}
const Styles = StyleSheet.create({

})