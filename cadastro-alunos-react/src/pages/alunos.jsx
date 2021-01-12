import React, { Component } from 'react';
import Pagina from '../components/pagina';
import Section from '../components/section';
import Formulario from '../components/formulario'
import Listagem from '../components/listagem';
import AlunosAPI from '../services/alunos';

class Alunos extends Component {
  constructor(props) {
    super(props);

    this.state = { alunos: [] };

    this.excluirAlunos = this.excluirAlunos.bind(this);
  }

  componentDidMount() {
    this.carregarAlunos();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.alunoEmEdicao === prevState.alunoEmEdicao) {
      return;
    }
    console.log("this.state.alunoEmEdicao no Update", this.state.alunoEmEdicao);
  }

  async carregarAlunos() {
    const alunos = await AlunosAPI.buscarAlunos();
    console.log(alunos)
    this.setState({ alunos: alunos });
  }

  editarAlunos = aluno => {
    console.log("aluno", aluno)
    this.setState({ alunoEmEdicao: aluno });
  }

  excluirAlunos(aluno) {
    AlunosAPI.excluirAlunos(aluno.id).then(() => this.carregarAlunos());
  }

  salvarAluno = aluno => {
    if (aluno.id) {
      AlunosAPI.atualizarAlunos(aluno).then(() => {
        this.carregarAlunos();
        this.setState({ alunoEmEdicao: null });
      });
      return;
    }
    console.log("Passando no else do salvarAluno")
    AlunosAPI.inserirAlunos(aluno).then(() => {
      this.carregarAlunos();
      this.setState({ alunoEmEdicao: null });
    });
  }

  render() {
    return (
      <>
        <Pagina>
          <Section titulo='Cadastro de Alunos'>
            {console.log("oi", this.state.alunoEmEdicao)}
            <Formulario aluno={this.state.alunoEmEdicao} salvar={this.salvarAluno} />
          </Section>
          <Section titulo='Listagem de Alunos'>
            <Listagem alunos={this.state.alunos} editar={this.editarAlunos} excluir={this.excluirAlunos} />
          </Section>
        </Pagina>
      </>
    )
  }
}

export default Alunos;