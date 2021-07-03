import React, { Component } from 'react';

class ListaPokemon extends Component {
  render() {
    const { data } = this.props;
    return(
      <>
        {
        data.map((pokemon) => {
          const { name, type, image } = pokemon
          const { value, measurementUnit } = pokemon.averageWeight 
          return(
            <li key={name} className="liPokemon" >
              <p>{name}</p>
              <p>{type}</p>
              <p>Average Weight: {value + measurementUnit}</p>
              <img
                src={image}
                alt={name}
              />
            </li>
          )
        })
        }
      </>
    );
  }
}

export default ListaPokemon