import React, { Component } from 'react';

class DefaultSelect extends Component {
  render() {
    const estados = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"]
    const { handleClick, value } = this.props;
    return(
      <label>
        Estado:
        <select
          onChange={ handleClick }
          name='estado'
          value= { value }
        >
          {estados.map((estado) => <option key={estado}>{estado}</option>)}
        </select>
      </label>
    );
  }
}

export default DefaultSelect;