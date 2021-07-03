import './App.css';
import ListaPokemon from './components/ListaPokemon';
import data from './data'

function App() {
  return (
    <>
      <h1 className="titulo">Minha Pokedex</h1>
      <ul className="ulPokemon">
        <ListaPokemon data={data} />
      </ul>
    </>
  );
}

export default App;
