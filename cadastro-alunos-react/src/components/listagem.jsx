import React from 'react';

class Listagem extends React.Component {
  render() {
    return (
      <>
        <div className='lista'>
          <div className="listarAlunos">
            <label htmlFor="pesquisaNaLista" id="labelDaPesquisa">Pesquisar alunos:</label>
            <input type="search" className='listar' id='pesquisaNaLista' />
            <button id="searchButton">🔍</button>
          </div>
          <table className='listaAlunos'>
            <thead>
              <tr>
                <th>
                  Nome
               </th>
                <th>
                  Data de nascimento
                </th>
                <th>
                  Turma
                </th>
                <th>
                  Telefone para emergências
              </th>
                <th>
                  Em caso de emergência avisar
              </th>
                <th>
                  Ações
              </th>
              </tr>
            </thead>
            <tbody>
              {this.props.alunos.map(aluno => (
                <tr key={aluno.id}>
                  <td className='listandoAlunos'>{aluno.nome}</td>
                  <td className='listandoAlunos'>{aluno.dataNascimento}</td>
                  <td className='listandoAlunos'>{aluno.turma}</td>
                  <td className='listandoAlunos'>{aluno.telefoneEmergencia}</td>
                  <td className='listandoAlunos'>{aluno.avisarEmEmergencia}</td>
                  <td className='listandoAlunos'><button onClick={() => this.handleEditar(aluno)}>Editar</button>
                    <button onClick={() => this.handleExcluir(aluno)}>Excluir</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    )
  }
}

export default Listagem;