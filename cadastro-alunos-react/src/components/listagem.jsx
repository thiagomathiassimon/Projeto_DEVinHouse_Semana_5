import React from 'react';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcons from '@material-ui/icons/Edit';



class Listagem extends React.Component {
  state = { pesquisa: false }

  handleEditar(aluno) {
    this.props.editar(aluno)
  }

  handleExcluir(aluno) {
    this.props.excluir(aluno)
  }

  handlePesquisar(nome) {
    console.log(nome)
    if (nome) {
      console.log(this.props.alunos)
      let aluno = {};
      const alunoEncontrado = this.props.alunos.forEach(element => {
        console.log(element)
        if (element.nome === nome) {
          console.log("this", element)
          aluno = element
          console.log(aluno)
          console.log(aluno.nome)

          const nome = document.getElementById("nome")
          console.log(nome)

          this.setState({ pesquisa: true })
        }
      }
      )
      console.log(alunoEncontrado)
      console.log(aluno)
    } else {
      window.alert("Informe o nome do aluno que desaja pesquisar")
    }
  }

  render() {
    if (!this.props.alunos || this.props.alunos.length === 0) {
      return <span>Não existem alunos a ser listados.</span>
    }


    console.log(this.props.alunos)
    console.log(this.props.alunos)

    return (
      <>
        {
          this.props.alunos && this.props.alunos.length > 0 &&
          <>
            <div className='lista'>
              <div className="listarAlunos">
                {this.state.pesquisa && <button id="backButton" onClick={() => {
                  this.setState({ pesquisa: false })
                  const nome = document.getElementById("pesquisaNaLista");
                  nome.value = "";
                }}>◀</button>}
                <label htmlFor="pesquisaNaLista" id="labelDaPesquisa">Pesquisar alunos:</label>
                <input type="search" className='listar' id='pesquisaNaLista' placeholder="Nome do(a) aluno(a)..." />
                <button id="searchButton" onClick={() => {
                  const nome = document.getElementById("pesquisaNaLista");
                  this.handlePesquisar(nome.value)
                }}>🔍</button>

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
                  {
                    this.state.pesquisa &&
                    this.props.alunos.map(element => {
                      console.log(element)
                      if (element.nome === document.getElementById("pesquisaNaLista").value) {
                        console.log(element.nome)
                        return (
                          <>
                            <tr >
                              <td className='listandoAlunos' id="nome">{element.nome}</td>
                              <td className='listandoAlunos'>{element.dataNascimento}</td>
                              <td className='listandoAlunos'>{element.turma}</td>
                              <td className='listandoAlunos'>{element.telefoneEmergencia}</td>
                              <td className='listandoAlunos'>{element.emergencia}</td>
                              <td className='listandoAlunos'>
                                <IconButton color='primary' className="btnLista" onClick={() => this.handleEditar(element)}><EditIcons /></IconButton>
                                <IconButton color="secondary" className="btnLista" onClick={() => this.handleExcluir(element)}><DeleteIcon /></IconButton></td>
                            </tr>
                          </>
                        )
                      } else {
                        return (<></>)
                      }
                    }
                    )
                  }
                  {!this.state.pesquisa &&
                    this.props.alunos.map(aluno => {
                      console.log(aluno)
                      return (
                        <>
                          <tr key={aluno.id}>
                            <td className='listandoAlunos'>{aluno.nome}</td>
                            <td className='listandoAlunos'>{aluno.dataNascimento}</td>
                            <td className='listandoAlunos'>{aluno.turma}</td>
                            <td className='listandoAlunos'>{aluno.telefoneEmergencia}</td>
                            <td className='listandoAlunos'>{aluno.emergencia}</td>
                            <td className='listandoAlunos'>
                              <IconButton color='primary' className="btnLista" onClick={() => this.handleEditar(aluno)}><EditIcons /></IconButton>
                              <IconButton color="secondary" className="btnLista" onClick={() => this.handleExcluir(aluno)}><DeleteIcon /></IconButton></td>
                          </tr>
                        </>
                      )
                    }
                    )
                  }
                </tbody>
              </table>
            </div>
          </>
        }
      </>
    )
  }
}


export default Listagem;