import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import busca from './pages/busca';



const rotas = (
  <Router>
    <Switch>
      <Route path = "/" component = {busca}/>
    </Switch>
  </Router>
)


ReactDOM.render(rotas, document.getElementById('root'));


reportWebVitals();
