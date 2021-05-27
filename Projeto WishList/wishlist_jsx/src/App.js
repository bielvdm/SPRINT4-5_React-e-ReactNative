import { Component } from 'react';
import desejo from './img/trash-alt-solid.svg';
import logo from './img/LogoWishList.png';
import './App.css';

class wishlist extends Component
{
  constructor(props)
  {
    super(props);
    this.state = 
    {
       descricao  : [],
       email      : '',
       senha      : ''
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

    .then(dados => this.setState({descricao : dados}))

    .catch(erro => console.log(erro))
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
                          this.state.descricao.map( (wish) => {
                            return(

                          <div className="wishlist dis">
                                <div className="texto-wishlist">
                                  <h4>Desejo número: {wish.idDesejo}</h4>
                                  <h4>Descrição:</h4>
                                  <p>{wish.descricao}</p>
                                </div>
        
                              <img src={desejo} alt="Botão de exluir (formato de lixo)" onclick="deletar()" />
                          </div>
                            )
                          })

                        }

                    </div>

          </section>

              <section className="container-inputs coluna">

                      <div className="box coluna spa">
                          <h1>Usuário</h1>
                          <input type="email" placeholder="E-mail"/>
                          <input type="password" placeholder="Senha"/>

                          <div className="botao dis">
                              <button type="submit">Cadastrar →</button>
                              <button type="submit">Visualizar →</button>
                          </div>
                      </div>

                      <div className="box coluna spa">
                          <h1>Cadastrar novo desejo</h1>
                          <input type="email" placeholder="E-mail"/>
                          <input type="password" placeholder="Digite seu desejo"/>
                          <button type="submit">→</button>
                      </div>

              </section>

          </section>

        </div>

      );
    }
}

export default wishlist;
