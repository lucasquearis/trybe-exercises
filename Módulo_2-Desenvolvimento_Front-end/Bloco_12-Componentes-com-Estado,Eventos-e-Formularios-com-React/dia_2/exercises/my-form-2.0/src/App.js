import './App.css';
import DefaultInput from './components/DefaultInput';
import React, { Component } from 'react';
import DefaultSelect from './components/DefaultSelect';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: 'AC',
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const { name, value } = e.target
    // name === 'name' ? this.setState({ name: value.toUpperCase()}) : this.setState({ [name]: value })
    if(name === 'name') {
      this.setState({ name: value.toUpperCase()})
    } else if(name==='endereco') {
      this.setState({ endereco: value.replace(/[^a-zA-Z ]/g, "")})
    } else {
      this.setState({ [name]: value })
    }
    
  }

  render(){
    const { handleClick } = this;
  return (
    <fieldset>
      <div>
        <DefaultInput
          descrition = 'Nome:'
          maxCaracters = '40'
          handleClick= { handleClick }
          name= 'name'
          value= { this.state.name }
        />
      </div>
      <div>
        <DefaultInput
          descrition = "Email"
          maxCaracters = '50'
          handleClick= { handleClick }
          name= 'email'
          value= { this.state.email }
        />
      </div>
      <div>
        <DefaultInput
          descrition = "CPF:"
          maxCaracters = '11'
          handleClick= { handleClick }
          name= 'cpf'
          value= { this.state.cpf }
        />
      </div>
      <div>
        <DefaultInput
          descrition = "Endereço:"
          maxCaracters = '200'
          handleClick= { handleClick }
          name= 'endereco'
          value= { this.state.endereco }
        />
      </div>
      <div>
        <DefaultInput
          descrition = "Cidade:"
          maxCaracters = '28'
          handleClick= { handleClick }
          name= 'cidade'
          value= { this.state.cidade }
        />
      </div>
      <div>
        <DefaultSelect
          handleClick={ handleClick }
          value= { this.state.estado }
        />
      </div>
      <div>
        <label>
          Casa
          <input
            type="radio"
            name="casa"
            required
          />
        </label>
        <label>
          Apartamento
          <input
            type="radio"
            name="casa"
            required
          />
        </label>
      </div>
    </fieldset>
  );
  }
}

export default App;
