import { CheckStatusMovies } from "./components/movies";

function App() {
  
  return (
    <div className="div-principal">
      <header>
        <h1>Buscador de peliculas</h1>
        <form className="form">
          <input placeholder="Avengers, Thor, La pelicula de miedo... " />
          <button type="submit">Buscar</button>
        </form>
      </header>
      <main>
        <CheckStatusMovies/>
      </main>
    </div>
  );
}

export default App;
