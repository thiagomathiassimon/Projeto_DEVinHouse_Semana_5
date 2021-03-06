import React from 'react';
import Autorizados from './autorizados'
import { Field, Form, Formik } from "formik";
import * as yup from 'yup';
import MaskedInput from "react-text-mask";

const ALUNO_INICIAL = {
  nome: "",
  dataNascimento: "",
  nomeResponsavel: "",
  telefoneResponsavel: "",
  emergencia: "",
  telefoneEmergencia: "",
  restricao: "",
  descricaoRestricao: "",
  autorizacaoImagem: "",
  turma: "",
  informacoesAdicionais: "",
  autorizados: []
}

const AlunoSchema = yup.object().shape({
  nome: yup.string().required("Informe o nome"),
  dataNascimento: yup.string().required("Informe a data de nascimento"),
  telefoneResponsavel: yup.string().required("Informe o telefone"),
  emergencia: yup.string().required("Informe quem avisar em emergências"),
  telefoneEmergencia: yup.string().required("Informe o telefone de emergências"),
  // restricao: yup.boolean().required("Informe se a crianças possui quaisquer restrições"),
  descricaoRestricao: yup.string(),
  //  autorizacaoImagem: yup.boolean().required("Autorize o uso de imagens pela escola"),
  turma: yup.string().required("Informe a turma"),
  //informacoesAdicionais: yup.string()
});

const dateNumberMask = [
  /[1-9]/,
  /\d/,
  "/",
  /\d/,
  /\d/,
  "/",
  /\d/,
  /\d/,
  /\d/,
  /\d/
]

const phoneNumberMask = [
  "(",
  /[1-9]/,
  /\d/,
  ")",
  " ",
  /\d/,
  " ",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
  /\d/,
  /\d/
];

class Formulario extends React.Component {

  state = { teveAlteracao: false, possuiRestricao: false, emEdicao: false }

  valorInicial() {
    console.log("passando no método valorInicial()")
    if (this.props.aluno !== undefined) {
      console.log(this.props.aluno)
      return this.props.aluno
    }
    else {
      console.log(this.props.aluno)
      return ALUNO_INICIAL
    }
  }

  salvarAluno = (aluno, actions) => {
    const checkboxSim = document.getElementById("restricaoAlimentarSim");
    const checkboxNao = document.getElementById("restricaoAlimentarNao");
    const checkbox = document.getElementById('autorizaImagens');
    const textarea = document.getElementById("adicionais");
    console.log("Chamando o salvarAluno no formulario.jsx")
    console.log(aluno)
    console.log(actions)
    actions.setSubmitting(true);
    this.props.salvar(aluno);
    actions.resetForm();
    actions.setSubmitting(false);
    this.setState({ teveAlteracao: false });
    checkboxSim.checked = false;
    checkboxNao.checked = false;
    checkbox.checked = false;
    textarea.value = "";
  }

  handleChange = (name, value, setFieldValue) => {
    this.setState({ teveAlteracao: true })
    setFieldValue(name, value)
  }

  handleClick() {
    this.setState({
      possuiRestricao: true
    });
  }

  handleNotClick() {
    this.setState({
      possuiRestricao: false
    });
  }

  adicionarAutorizacao = (nome, name, values, setFieldValue) => {
    const autorizados = values[name];
    autorizados.push(nome)
    setFieldValue(name, autorizados)
  }

  render() {
    console.log("this.props.aluno do formulario.jsx", this.props.aluno)
    return (
      <>
        <Formik
          enableReinitialize
          validateOnMount={true}
          validationSchema={AlunoSchema}
          initialValues={this.props.aluno || ALUNO_INICIAL}
          onSubmit={(values, actions) => {
            console.log(values)
            this.salvarAluno(values, actions)
          }}
          render={({ values, touched, errors, isSubmitting, handleReset, setFieldTouched, setFieldValue }) => (
            < Form >
              {console.log("values", values)}
              { console.log("Teste", this.props.aluno)}
              <table>
                <thead></thead>
                <tbody>
                  <tr>
                    <td>
                      <label htmlFor="nome">Informe o nome do(a) aluno(a):</label></td>
                    <td>
                      <Field type="text" name='nome' placeholder='Nome...' />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="dataNascimento">Informe a data de nascimento do(a) aluno(a):</label></td>
                    <td>
                      <Field type="text" name='dataNascimento' render={({ field }) => (
                        <MaskedInput
                          {...field}
                          mask={dateNumberMask}
                          id="dataNascimento"
                          placeholder="Informe a data de nascimento"
                          type="text"
                          className={
                            errors.dataNascimento && touched.dataNascimento
                              ? "text-input error"
                              : "text-input"
                          }
                        />
                      )}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="nomeResponsavel">Informe o nome do(a) responsável:</label>
                    </td>
                    <td>
                      <Field type="text" name='nomeResponsavel' placeholder='Nome...' />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="telefoneResponsavel">Informe o telefone do(a) responsável:</label>
                    </td>
                    <td>
                      <Field type="number" name='telefoneResponsavel' placeholder='9999-9999 ou 9999-99999' render={({ field }) => (
                        <MaskedInput
                          {...field}
                          mask={phoneNumberMask}
                          id="phone"
                          placeholder="Enter your phone number"
                          type="text"
                          className={
                            errors.phone && touched.phone
                              ? "text-input error"
                              : "text-input"
                          }
                        />
                      )}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="emergencia">Em caso de emergência avisar:</label></td>
                    <td>
                      <Field as="select" name="emergencia" id="emergencia">
                        <option value="">Selecione uma opção</option>
                        <option value="Pais">Pais</option>
                        <option value="Tios">Tios</option>
                        <option value="Avós">Avós</option>
                        <option value="Padrinhos/Madrinhas">Padrinhos/Madrinhas</option>
                      </Field>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="telefoneEmergencia">Informe o telefone de emergência:</label>
                    </td>
                    <td>
                      <Field type="number" name='telefoneEmergencia' render={({ field }) => (
                        <MaskedInput
                          {...field}
                          mask={phoneNumberMask}
                          id="telefoneEmergencia"
                          placeholder="Informe o telefone de emergência"
                          type="text"
                          className={
                            errors.telefoneEmergencia && touched.telefoneEmergencia
                              ? "text-input error"
                              : "text-input"
                          }
                        />
                      )}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="restricaoAlimentarSim">  Possui restrição alimentar: </label>
                    </td>
                    <td>
                      <input type="checkbox" name="restricaoAlimentarSim" id="restricaoAlimentarSim" onClick={() => {
                        const checkboxSim = document.getElementById("restricaoAlimentarSim");
                        const checkboxNao = document.getElementById("restricaoAlimentarNao");
                        console.log(checkboxSim.checked)
                        if (checkboxSim.checked) {
                          this.handleClick();
                          checkboxNao.checked = false;
                          values.restricao = true;
                        } else {
                          this.handleNotClick();
                        }
                      }
                      } />
                      <label htmlFor="restricaoAlimentarSim"> Sim </label>
                      <input type="checkbox" name="restricaoAlimentaNao" id="restricaoAlimentarNao" onClick={() => {
                        const checkboxSim = document.getElementById("restricaoAlimentarSim");
                        const checkboxNao = document.getElementById("restricaoAlimentarNao");
                        if (checkboxNao.checked) {
                          checkboxSim.checked = false;
                          values.restricao = false;
                          this.handleNotClick();
                        }
                      }}
                      />
                      <label htmlFor="restricaoAlimentarNao"> Não </label>
                    </td>
                  </tr>
                  < tr id="restricao">
                    {this.state.possuiRestricao &&
                      <>
                        <td><label htmlFor="descricaoRestricao">Descreva a restrição alimentar:</label>
                        </td>
                        <td>
                          <Field name="descricaoRestricao" placeholder="Restrição..." />
                        </td>
                      </>}
                  </tr>
                  <tr>
                    {console.log(values.autorizados)}
                    <Field
                      component={Autorizados}
                      fullWidth
                      size="small"
                      name="autorizados"
                      autorizados={values.autorizados}
                      adicionarAutorizacao={nome => this.adicionarAutorizacao(nome, 'autorizados', values, setFieldValue)}
                      onChange={e => this.handleChange('autorizados', e.target.value, setFieldValue, setFieldTouched)}
                      onFocus={() => setFieldTouched('nome')}
                    />
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="autorizaImagens">Autorizo o uso escolar de fotos e videos:</label>
                    </td>
                    <td>
                      <input type="checkbox" name="autorizaImagens" id="autorizaImagens" onClick={() => {
                        const checkbox = document.getElementById('autorizaImagens');
                        values.autorizacaoImagem = checkbox.checked;
                      }}
                      />
                      <label htmlFor="autorizaImagens"> Sim, autorizo</label>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="turma">Turma:</label></td>
                    <td>
                      <Field as="select" name="turma" id="turma">
                        <option value="">Selecione uma opção</option>
                        <option value="Berçario">Berçario</option>
                        <option value="Infantil I">Infantil I</option>
                        <option value="Infantil II">Infantil II</option>
                        <option value="Infantil III">Infantil III</option>
                        <option value="Infantil IV">Infantil IV</option>
                        <option value="Infantil V">Infantil V</option>
                      </Field>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="adicionais">Informações adicionais:</label>
                    </td>
                    <td>
                      <Field as="textarea" name="adicionais" id="adicionais" spellCheck='true' placeholder='Explicite as informações adicionais...' />
                    </td>
                  </tr>
                  <tr>
                    <td />
                    <td>
                      <button id='cancelar' onClick={() => {
                        const checkboxSim = document.getElementById("restricaoAlimentarSim");
                        const checkboxNao = document.getElementById("restricaoAlimentarNao");
                        const checkbox = document.getElementById('autorizaImagens');
                        checkbox.checked = false;
                        checkboxNao.checked = false;
                        checkboxSim.checked = false;
                        const input = document.getElementById('autorizacao')
                        const select = document.getElementById("parentesco")
                        input.value = ""
                        select.value = ""
                        const lista = document.getElementById('listaAutorizados')
                        lista.innerHTML = ""
                        handleReset(ALUNO_INICIAL)
                      }}>Novo</button>
                      <button id='cadastrar'>Salvar</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Form>
          )}
        />
      </>
    )
  }
}

export default Formulario;