import React, { Component } from 'react';
import { Field, Form, Formik } from "formik";
import { FormControl, Grid, IconButton, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/AddCircle';

const STATE_INICIAL = {
  nome: '',
  parentesco: ''
}

class Autorizados extends Component {
  constructor(props) {
    super(props);
    this.state = STATE_INICIAL
  }

  handleChangeNome(value) {
    this.setState({ nome: value })
  }

  handleChangeParentesco(value) {
    this.setState({ parentesco: value })
  }

  adicionarAutorizacao(nome) {
    this.props.adicionarAutorizacao(nome);
    this.setState({ ...STATE_INICIAL })
  }

  render() {
    return (
      <>
        <td>
          <label htmlFor="autorizados">Pessoas autorizadas a buscar a criança:</label>
        </td>
        <td>
          <Field name="autorizacao" id="autorizacao" placeholder="Nome..."
            onChange={e => this.handleChangeNome(e.target.value)} />
          <Field as="select" name="parentesco" id="parentesco" onChange={e => this.handleChangeParentesco(e.target.value)}>
            <option value="">Grau de parentesco</option>
            <option value="Pai">Pai</option>
            <option value="Mãe">Mãe</option>
            <option value="Tio">Tio</option>
            <option vallue="Tia">Tia</option>
            <option value="Avô">Avô</option>
            <option value="Avó">Avó</option>
          </Field>
          <div>


            {this.props.autorizados &&
              this.props.autorizados.map(nome => {
                console.log(this.props.autorizados)
                return (<>
                  <div id="listaAutorizados"><br /><span>{`Nome: ${nome.nome}`} < br />{`Parentesco: ${nome.parentesco}`}</span></div></>
                )
              })}
          </div>
        </td>
        <td>
          <IconButton color="primary" onClick={() => {
            const input = document.getElementById('autorizacao')
            const select = document.getElementById("parentesco")
            input.value = ""
            select.value = ""
            this.adicionarAutorizacao({ ...this.state })
          }}>
            <AddIcon />
          </IconButton>

        </td>
      </>
    )
  }
}

export default Autorizados;