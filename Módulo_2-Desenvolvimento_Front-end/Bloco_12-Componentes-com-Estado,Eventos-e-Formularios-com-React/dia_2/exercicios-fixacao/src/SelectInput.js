import React, { Component } from 'react';

class SelectInput extends Component {
  render() {
    const { valueSelect, onSelectChange} = this.props;
    return(
      <select
          value={ valueSelect }
          onChange={ onSelectChange }
          name="select"
        >
          <option>bolacha</option>
          <option>biscoito</option>
        </select>
    );
  }
}

export default SelectInput;