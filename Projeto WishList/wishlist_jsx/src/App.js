import { Component } from 'react';
import desejo from './img/trash-alt-solid.svg';
import logo from './img/LogoWishList.png';
import './App.css';

function DataFormatada(props)
{
  return <h4>Data de criação: {props.date.toLocaleDateString()}</h4>
}

class wishlist extends Component
{
  constructor(props)
  {
    super(props);
    this.state = 
    {
       descricaoArray : [],
       email          : '',
       senha          : '',
       idUser         : 0,
       idUserBuscado  : 0,
       desejo         : '',
       idDesejo       : 0,

       date : new Date()
    }
  }

  componentDidMount()
  {
    this.listarDesejo()
  }

  listarDesejo = () =>
  {
    console.log('ta funfando confia!!')

    fetch('http://localhost:5000/api/Desejo') 

    .then(resposta => resposta.json())

    .then(dados => this.setState({descricaoArray : dados}))

    .catch(erro => console.log(erro))
  }

  buscarIdDesejo = (desejo) => {
    this.setState({
        
        idDesejo       : desejo.idDesejo,
        descricaoArray : desejo.descricao
    });
};

  deletarDesejo = (desejo) => {

    fetch('http://localhost:5000/api/Desejo/'+ desejo.idDesejo, {
      
      method : 'DELETE'
    })

    .catch(erro => console.log(erro))
  }

  cadastrarDesejo = (event) =>
  {
    event.preventDefault();

    fetch('http://localhost:5000/api/Desejo',
    {
      method : 'POST',

      body : JSON.stringify({ descricao : this.state.desejo,
                              idUsuario : this.state.idUser}),

      headers : {
        "Content-Type" : "application/json"
    }
    })

    .then(console.log('Desejo cadastrado!'))

    .catch(erro => console.log(erro))

    .then(this.listarDesejo)
  }

  cadastrarUser = (event) =>
  {
    event.preventDefault();

    fetch('http://localhost:5000/api/Usuario',
    {
      method : 'POST',

      body : JSON.stringify({ email : this.state.email,
                              senha : this.state.senha }),

      headers : {
        "Content-Type" : "application/json"
    }
  })
      .then(console.log('Usuário cadastrado!'))

      .catch(erro => console.log(erro))

      .then(this.listarDesejo)
  }

  // buscarDesejosUser = (usuario) => {
  //   fetch('http://localhost:5000/api/Desejo/'+ usuario.idUsuario)

  //   .then(resposta => resposta.json())

  //   .then(dados => this.setState({descricaoArray : dados}))

  //   .catch(erro => console.log(erro))
  // }
  
  atualiazarDesejo = async (event) =>
  {
    await this.setState({ desejo : event.target.value})
  }

  atualiazarid = async (event) =>
  {
    await this.setState({ idUser : event.target.value})
  }

  atualiazarEmail = async (event) =>
  {
    await this.setState({ email : event.target.value })
  }

  atualiazarSenha = async (event) =>
  {
    await this.setState({ senha : event.target.value })
  }

    render()
    {
      return ( 
       
        <div className="coluna body">

          <section className="container dis spa">

              <section className="contaiter-wishlist coluna spa">

                  <img src={logo} alt="Logo Wish List"/>

                    <div className="content-wishlist dis">

                        {
                          this.state.descricaoArray.map( (wish) => {
                            return(

                          <div key={wish.idDesejo} className="wishlist dis">
                                <div className="texto-wishlist">
                                  <h4>Desejo número: {wish.idDesejo}</h4>
                                  <h4>Descrição: </h4>
                                  <p>{wish.descricao}</p>
                                  <h4>Id do usuário: {wish.idUsuario}</h4>
                                  <DataFormatada date={this.state.date}/>
                                </div>
        
                              <img src={desejo} alt="Botão de exluir (formato de lixo)" onClick={ () => this.deletarDesejo(wish)} />
                          </div>
                            )
                          })

                        }

                    </div>

          </section>

              <section className="container-inputs coluna">

                      <form className="box coluna spa">
                          <h1>Cadastrar Usuário</h1>
                          <input type="email" value={this.state.email} onChange={this.atualiazarEmail} placeholder="E-mail"/>
                          <input type="password" value={this.state.senha} onChange={this.atualiazarSenha} placeholder="Senha"/>

                          <div className="botao dis">
                              <button onClick={this.cadastrarUser} type="submit">Cadastrar</button>
                          </div>
                      </form>

                      {/* <div className="box coluna spa">
                          <h1>Listar Desejos</h1>
                          <input type="number" value={this.state.idUser} onChange={this.atualiazarid} placeholder="Id do Usuário"/>
                          <input type="password" value={this.state.senha} onChange={this.atualiazarSenha} placeholder="Senha"/>

                          <div className="botao dis">
                              <button onClick={this.buscarDesejosUser} type="submit">Visualizar</button>
                          </div>
                      </div> */}

                      <form onSubmit={this.cadastrarDesejo} className="box coluna spa">
                          <h1>Cadastrar novo desejo</h1>
                          <input type="number" value={this.state.idUser} onChange={this.atualiazarid} placeholder="Id do seu usuário"/>
                          <input type="text" value={this.state.desejo} onChange={this.atualiazarDesejo} placeholder="Digite seu desejo"/>
                          <button type="submit">→</button>
                      </form>
                      
              </section>

          </section>

        </div>

      );
    }
}

export default wishlist;
