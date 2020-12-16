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
              <table>
                <tr>
                  <td><label htmlFor="nome">Informe o nome do(a) aluno(a):</label></td>
                  <td><input type="text" id='nome' placeholder='Nome...' /></td>
                </tr>
                <tr>
                  <td><label htmlFor="dataNascimento">Informe a data de nascimento do(a) aluno(a):</label></td>
                  <td><input type="date" id='dataNascimento' placeholder='Data de nascimento...' /></td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="nomeResponsavel">Informe o nome do(a) responsável:</label>
                  </td>
                  <td>
                    <input type="text" id='nomeResponsavel' placeholder='Nome...' />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="telefone">Informe o telefone do(a) responsável:</label>
                  </td>
                  <td>
                    <input type="number" id='telefone' placeholder='Telefone...' />
                  </td>
                </tr>
                <tr>
                  <td>       <label htmlFor="emergencia">Em caso de emergência avisar:</label></td>
                  <td>
                    <select name="emergencia" id="emergencia">
                      <option value="opcao0">Selecione uma opção</option>
                      <option value="opcao1">Pais</option>
                      <option value="opcao2">Tios</option>
                      <option value="opcao3">Avós</option>
                      <option value="opcao4">Padrinhos/Madrinhas</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="telefoneEmergencia">Informe o telefone de emergência:</label>
                  </td>
                  <td>
                    <input type="number" id='telefoneEmergencia' placeholder='Telefone...' />
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <button id='cancelar'>Cancelar</button>
                    <button id='cadastrar'>Cadastrar</button></td>
                </tr>
              </table>



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