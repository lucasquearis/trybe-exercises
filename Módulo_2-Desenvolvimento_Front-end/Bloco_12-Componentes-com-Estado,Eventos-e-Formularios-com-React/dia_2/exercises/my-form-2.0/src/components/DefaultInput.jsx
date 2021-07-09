import React, { Component } from 'react';

class DefaultInput extends Component {
  render() {
    const { descrition, maxCaracters, handleClick, name, value } = this.props;
    return(
      <label>
        { descrition }
        <input
          type="text"
          maxLength={ maxCaracters }
          required
          onChange = { handleClick }
          name = { name }
          value = { value }
        />
      </label>
    );
  }
}

export default DefaultInput;