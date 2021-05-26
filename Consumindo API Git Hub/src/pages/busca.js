import {Component} from 'react';
import {} from './busca.css'
//import {papeldeparede} from './img/papeldeparede.jpg'

const dadosIniciais = {
    usuario : '',
    nome : '',
    seguidores : ''
}

class busca extends Component {

    //aqui cria um construtor de busca
    constructor(props){
        super(props);

        //aqui são os meus estados
        this.state = {
            repositorios : [],
            data : dadosIniciais,
            usuarioId : ''
        }
    }

    url = () => {
        return `https://api.github.com/users/${this.state.usuario}`;
    }

    atualizarState = (event) => {
        const value = event.target.value;
        const name = event.target.name;    
        this.setState({ [name] : value }, () => { this.buscarUsuarios() }, () => { this.buscarRepositorios() });
    }

    buscarUsuarios=()=>{

        fetch(this.url(), {mode: 'cors'})
        //transforma a resposta em json
        .then((resposta) => resposta.json())

        //atualizada o state com o valor buscado
        .then((data) => {
            if (data.hasOwnProperty("erro")) {
                this.setState({data: dadosIniciais});
                alert('Usuario não encontrado');
            } else {
                this.setState({data});
            }
        })

        //tratamento de erro
        .catch(erro => console.log(erro))

    }
    
    
    buscarRepositorios = () => {
        console.log('agora vamos fazer a chamada para a API')

        // Faz a chamada para a API usando o fetch
        fetch(`https://api.github.com/users/${this.state.usuario}/repos`)

        // Fetch retorna uma Promise que se resolve em uma resposta ( Response )
        .then(resposta => resposta.json())
        // .then(resposta => console.log(resposta.json()))

        // e atualiza o state listaTiposEventos com os dados obtidos
        .then(dados => this.setState({ repositorios : dados }))

        // Caso ocorra algum erro, mostra no console do navegador
        .catch(erro => console.log(erro))

    }

    

    //o render serve para indicar o que será renderizado na página
    render(){

        const dados = this.state.data;

        return(
            <body>
                <section className="tudo">

                    <header className= "dja">
                        
                        <div className= "header dja">
                            <div className="h1">
                             <h1>Busque o repositório utilizando o nome de usuário</h1>
                            </div>

                            <div className="inputs">
                                <input placeholder="Nome de usuário" name="usuario" onChange={this.atualizarState}/>
                                <button onClick={this.buscarRepositorios}>➜</button>
                            </div>

                        </div>
                        <div className="informacoes dja">

                            <img src={dados.avatar_url} alt=""foto do perfil/>

                            <div className="dadosBuscados">

                                <h1>{dados.name}</h1>
                                <p>{dados.location}</p>
                                <p>{dados.bio}</p>

                            </div>

                        </div>
                        
                    </header>

                    <section className="containerRepositorios">

                        {
                            this.state.repositorios.map( (dados) => {
                                return (
                                    <div className="repositorios" key={dados.id}>

                                        <div className="identificacao">
                                            <h1>{dados.name}</h1>
                                            <h2>ID: {dados.id}</h2>
                                        </div>
                                        
                                        <div className="descricao">
                                            <p>{dados.description}</p>
                                        </div>
                                        
                                    </div>
                                )
                            } )
                        }

                    </section>
                </section>
            </body>
        )
    }
}

export default busca;
