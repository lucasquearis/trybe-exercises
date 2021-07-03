import './App.css';


const Task = (value) => {
  return (
    <li>{value}</li>
  );
}
const arr = ['lavar a louça', 'escovar os dentes', 'limpar a cozinha']

function App() {

  return (
    <>
      {arr.map((job) => Task(job))}
    </>
  );
}

export default App;
