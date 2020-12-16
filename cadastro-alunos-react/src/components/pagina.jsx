import React from 'react';

class Pagina extends React.Component {

  render() {
    return (
      <>
        <div className='paginaPrincipal'>
          <div className='cabecalho'>
            <h1>🍇Escola Amorinha</h1>
            <hr />
          </div>
          <h2>{this.props.title}</h2>
          {this.props.children}
        </div>
      </>
    )
  }

}

export default Pagina;
