import React, { Component } from 'react';
import Pagina from '../components/pagina';
import Section from '../components/section';
import Formulario from '../components/formulario'

class Alunos extends Component {

  render() {
    return (
      <>
        <Pagina>
          <Section titulo='Cadastro de Alunos'>
            <Formulario />
          </Section>
          <Section titulo='Listagem de Alunos'>
          </Section>
        </Pagina>
      </>
    )
  }
}

export default Alunos;