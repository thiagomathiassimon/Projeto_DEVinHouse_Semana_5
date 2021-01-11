import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/css/estilos.css'
import Alunos from './pages/alunos'
import { criarServidor } from './services/mirage-server';
import reportWebVitals from './reportWebVitals';

const ambiente = process.env.NODE_ENV;
if (ambiente !== "production") {
  criarServidor({ environment: ambiente });
}

ReactDOM.render(
  <React.StrictMode>
    <Alunos />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
