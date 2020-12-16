import React, { Component } from 'react';
import Pagina from '../components/pagina';
import Section from '../components/section';

class Alunos extends Component {

  render() {
    return (
      <>
        <Pagina>
          <Section titulo='Cadastro de Alunos'>
            <form>
              <label htmlFor="nome">Informe o nome do(a) aluno(a):</label>
              <input type="text" id='nome' placeholder='Nome...' />
              <label htmlFor="dataNascimento">Informe a data de nascimento do(a) aluno(a):</label>
              <input type="date" id='dataNascimento' placeholder='Data de nascimento...' />
              <br />
              <label htmlFor="nomeResponsavel">Informe o nome do(a) responsável:</label>
              <input type="text" id='nomeResponsavel' placeholder='Nome...' />
              <label htmlFor="telefone">Informe o telefone do(a) responsável:</label>
              <input type="number" id='telefone' placeholder='Telefone...' />
              <br />
              <label htmlFor="emergencia">Em caso de emergência avisar:</label>
              <select name="emergencia" id="emergencia">
                <option value="opcao0">Selecione uma opção</option>
                <option value="opcao1">Pais</option>
                <option value="opcao2">Tios</option>
                <option value="opcao3">Avós</option>
                <option value="opcao4">Padrinhos/Madrinhas</option>
              </select>
            </form>
          </Section>
          <Section titulo='Listagem de Alunos'>

          </Section>
        </Pagina>
      </>
    )
  }
}

export default Alunos;