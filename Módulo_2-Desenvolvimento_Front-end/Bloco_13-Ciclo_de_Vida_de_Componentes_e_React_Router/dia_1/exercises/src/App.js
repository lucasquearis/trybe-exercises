import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      randomDog: [],
      loading: true,
    }
    this.fetchAPI = this.fetchAPI.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  fetchAPI = () => {
    const URL = 'https://dog.ceo/api/breeds/image/random'
    fetch(URL)
      .then(response => response.json())
      .then(data =>{
        this.setState({randomDog: data.message, loading: false})
      })
  }

  handleClick(){
    this.setState({loading: true})
    this.fetchAPI()
  }

  componentDidMount() {
    this.fetchAPI()
  }

  render() {
    const { randomDog, loading } = this.state
    const loadingMessage = <p>Loading...</p>
    const randomImage = <img
    src={randomDog}
    alt="cachorro aleatorio"
    />
  return (
    <>
      {loading ? loadingMessage : randomImage}
      <div>
        <button
          onClick={this.handleClick}
        >Random Dog Image!</button>
      </div>
    </>
  );
  }
}

export default App;
