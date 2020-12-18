import React from 'react';

class Formulario extends React.Component {

  render() {
    return (
      <>
        <form>
          <table>
            <thead></thead>
            <tbody>
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
                  <input type="checkbox" name="restricaoAlimentarSim" id="restricaoAlimentarSim" onClick={() => {
                    const restricao = document.getElementById("restricao");
                    const checkboxSim = document.getElementById("restricaoAlimentarSim");
                    const checkboxNao = document.getElementById("restricaoAlimentarNao");
                    console.log(checkboxSim.checked)
                    if (checkboxSim.checked) {
                      checkboxNao.checked = false;
                      console.log("Teste de passagem")
                      const td = document.createElement('td');
                      const td2 = document.createElement("td")
                      const label = document.createElement("label");
                      label.textContent = 'Descreva a restrição alimentar:';
                      label.htmlFor = "restricaoDoAluno";
                      const input = document.createElement('input');
                      input.type = 'text';
                      input.placeholder = "Informe a restrição..."
                      input.id = 'restricaoDoAluno';
                      restricao.appendChild(td);
                      td.appendChild(label);
                      restricao.appendChild(td2);
                      td2.appendChild(input);
                    } else {
                      restricao.innerHTML = '';
                    }
                  }
                  } />
                  <label htmlFor="restricaoAlimentarSim"> Sim </label>
                  <input type="checkbox" name="restricaoAlimentaNao" id="restricaoAlimentarNao" onClick={() => {
                    const restricao = document.getElementById("restricao");
                    const checkboxSim = document.getElementById("restricaoAlimentarSim");
                    const checkboxNao = document.getElementById("restricaoAlimentarNao");
                    if (checkboxNao.checked) {
                      checkboxSim.checked = false;
                      restricao.innerHTML = '';
                    }
                  }}
                  />
                  <label htmlFor="restricaoAlimentarNao"> Não </label>
                </td>
              </tr>
              < tr id="restricao">
              </tr>
              <tr>
                <td>
                  <label htmlFor="autorizaImagens">Autorizo o uso escolar de fotos e videos:</label>
                </td>
                <td>
                  <input type="checkbox" name="autorizaImagens" id="autorizaImagens" />
                  <label htmlFor="autorizaImagens"> Sim, autorizo</label>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="emergencia">Turma:</label></td>
                <td>
                  <select name="emergencia" id="emergencia">
                    <option value="opcao0">Selecione uma opção</option>
                    <option value="opcao1">Berçario</option>
                    <option value="opcao2">Infantil I</option>
                    <option value="opcao3">Infantil II</option>
                    <option value="opcao4">Infantil III</option>
                    <option value="opcao5">Infantil IV</option>
                    <option value="opcao6">Infantil V</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="adicionais">Informações adicionais:</label>
                </td>
                <td>
                  <textarea name="adicionais" id="adicionais" spellCheck='true' placeholder='Explicite as informações adicionais...'></textarea>
                </td>
              </tr>
              <tr>
                <td />
                <td>
                  <button id='cancelar'>Cancelar</button>
                  <button id='cadastrar'>Cadastrar</button></td>
              </tr>
            </tbody>
          </table>
        </form>
      </>
    )
  }
}

export default Formulario;