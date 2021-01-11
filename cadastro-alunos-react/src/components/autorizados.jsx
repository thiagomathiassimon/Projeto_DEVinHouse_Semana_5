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
          <Field as="select" nome="parentesco" id="parentesco"
          // onChange={e => this.handleChangeParentesco(e.target.value)} 
          >
            <option value="">Grau de parentesco</option>
            <option value="Pai">Pai</option>
            <option value="Mãe">Mãe</option>
            <option value="Tio">Tio</option>
            <option vallue="Tia">Tia</option>
            <option value="Avô">Avô</option>
            <option value="Avó">Avó</option>
          </Field>
        </td>
        <td>
          <IconButton color="primary" onClick={() => this.adicionarAutorizacao({ ...this.state })}>
            <AddIcon />
          </IconButton>
          {
            this.props.autorizados && this.props.autorizados.lenght > 0 &&
            this.props.autorizados.map(nome =>
              <InputLabel>{`Nome: ${nome.nome} - Parentesco: ${nome.parentesco}`}</InputLabel>
            )}
        </td>
      </>
    )
  }
}

export default Autorizados;