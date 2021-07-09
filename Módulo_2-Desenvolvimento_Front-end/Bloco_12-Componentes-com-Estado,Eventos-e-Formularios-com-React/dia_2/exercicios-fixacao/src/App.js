import React, { Component } from 'react'
import SelectInput from './SelectInput';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      textarea: '',
      select: 'bolacha',
      checkbox: '',
    }
  }
  handleClick({ target }) {
    const { name } = target
    const value = target.type === 'checkbox' ? target.checked : target.value
    this.setState({ [name]: value })
  }
  render() {
    const { handleClick } = this;
    const {textarea, select, checkbox } = this.state;
    return (
      <form>
        <SelectInput
          valueSelect = { select }
          onSelectChange = { handleClick }
        />
        <select
          value={ select }
          onChange={ handleClick }
          name="select"
        >
          <option>bolacha</option>
          <option>biscoito</option>
        </select>
        <textarea
          value={ textarea }
          onChange={ handleClick }
          name="textarea"
        />
        Trybe?
        <input
          type="checkbox"
          value={ checkbox }
          onChange={ handleClick }
          name="checkbox"
        ></input>
      </form>
    );
  }
}

export default App;
