import React, { Component } from 'react';

class Componente extends Component {
  constructor(){
    super()
    this.state = {
      contadorDeCliques: 0,
      contadorDeCliques2: 0,
      contadorDeCliques3: 0,
    }
    this.validacao = this.validacao.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(param) {
    if(param === 'contadorDeCliques') {
      this.setState((estadoAnterior) => ({
        [param]: estadoAnterior.contadorDeCliques + 1,
      }));
    } else if(param === 'contadorDeCliques2') {
      this.setState((estadoAnterior) => ({
        [param]: estadoAnterior.contadorDeCliques2 + 1,
      }))
    } else {
        this.setState((estadoAnterior) => ({
          [param]: estadoAnterior.contadorDeCliques3 + 1,
        }))
      }
    }

    validacao(param) {
      if(param % 2 === 0) {
        return param
      } else {
        console.log('verde')
        return param
      }
    }

  render() {
    const {
      contadorDeCliques,
      contadorDeCliques2,
      contadorDeCliques3
    } = this.state;
    const { validacao } = this;
    return(
      <>
        <button
          onClick={() => this.handleClick('contadorDeCliques')}
        >
          Numero de Cliques:{validacao(contadorDeCliques)}
        </button>
        <button
          onClick={() => this.handleClick('contadorDeCliques2')}
        >
          Numero de Cliques:{validacao(contadorDeCliques2)}
        </button>
        <button
          onClick={() => this.handleClick('contadorDeCliques3')}
        >
          Numero de Cliques:{validacao(contadorDeCliques3)}
        </button>
      </>
    );
  }
}

export default Componente;