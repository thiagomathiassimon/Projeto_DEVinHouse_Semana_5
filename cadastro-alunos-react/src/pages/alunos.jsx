import React, { Component } from 'react';
import Pagina from '../components/pagina';
import Section from '../components/section';
import Formulario from '../components/formulario'
import Listagem from '../components/listagem';

class Alunos extends Component {
  constructor(props) {
    super(props);

    this.state = { alunos: [{ nome: 'Thiago', dataNascimento: '26/08/2002', turma: 'Faculdade', telefoneEmergencia: 48996570207, avisarEmEmergencia: 'Pai e Mãe' }] };
  }

  render() {
    return (
      <>
        <Pagina>
          <Section titulo='Cadastro de Alunos'>
            <Formulario />
          </Section>
          <Section titulo='Listagem de Alunos'>
            <Listagem alunos={this.state.alunos} />
          </Section>
        </Pagina>
      </>
    )
  }
}

export default Alunos;