import axios from 'axios';

import * as constants from './constants';

const BASE_URL = `${constants.DEVINHOUSE_API}/alunos`;

class AlunosService {

  buscarAlunos() {
    return axios.get(BASE_URL)
      .then(response => {
        console.log("Chegando aqui", response.data)
        return response.data
      })
      .catch(error => {
        console.log("Erro no alunos.js")
        console.log(BASE_URL)
        console.log(constants.DEVINHOUSE_API)
        throw error;
      })
  }

  inserirAlunos(aluno) {
    return axios.post(BASE_URL, aluno)
      .catch(error => {
        console.log(BASE_URL)
        console.log(aluno)
        console.log(error)
        throw error;
      })
  }

  atualizarAlunos(aluno) {
    return axios.put(BASE_URL, aluno)
      .catch(error => {
        throw error;
      })
  }

  excluirAlunos(id) {
    return axios.delete(`${BASE_URL}/${id}`)
      .catch(error => {
        throw error;
      });
  }
}

export default new AlunosService();