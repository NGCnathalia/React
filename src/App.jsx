import CharacterList from "./componentes/CharacterList";

function App() {//representa la pagina que estamos haciendo
  return (<div className='bg-dark text-white'>
    <h1 className='text-center py-4'>Rick and Morty</h1>

    <CharacterList />

  </div>)
}

export default App

