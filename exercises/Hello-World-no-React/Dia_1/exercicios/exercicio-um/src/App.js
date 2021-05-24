import './App.css';

const compromissos = ['Familia', 'Trybe', 'Síndico'];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <>
      <h2> Meus compromissos </h2>
      <ol> {compromissos.map((element) => Task(element))} </ol>
    </>
  )
}

export default App;
