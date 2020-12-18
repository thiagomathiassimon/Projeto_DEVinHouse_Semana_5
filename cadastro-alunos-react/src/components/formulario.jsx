import React from 'react';

class Formulario extends React.Component {
  render() {
    return (
      <>
        <form>
          <table>
            <tr>
              <td>
                <label htmlFor="nome">Informe o nome do(a) aluno(a):</label></td>
              <td>
                <input type="text" id='nome' placeholder='Nome...' /></td>
            </tr>
            <tr>
              <td>
                <label htmlFor="dataNascimento">Informe a data de nascimento do(a) aluno(a):</label></td>
              <td>
                <input type="date" id='dataNascimento' placeholder='Data de nascimento...' /></td>
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
              <td>
                <label htmlFor="emergencia">Em caso de emergência avisar:</label></td>
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
              <td>
                <label htmlFor="restricaoAlimentarSim">  Possui restrição alimentar: </label>
              </td>
              <td>
                <input type="checkbox" name="restricaoAlimentarSim" id="restricaoAlimentarSim" onClick={(e) => {
                  <td>
                    <label for="possuiRestricao">Informe a restrição alimentar:</label>
                    <input type="text" placeholder='Restrição alimentar' />
                  </td>
                }} />
                <label htmlFor="restricaoAlimentarSim" onClick> Sim </label>
                <input type="checkbox" name="restricaoAlimentaNao" id="restricaoAlimentarNao" />
                <label htmlFor="restricaoAlimentarNao"> Não </label>
              </td>
            </tr>
            <tr>
              <td />
              <td>
                <button id='cancelar'>Cancelar</button>
                <button id='cadastrar'>Cadastrar</button></td>
            </tr>
          </table>
        </form>
      </>
    )
  }
}

export default Formulario;