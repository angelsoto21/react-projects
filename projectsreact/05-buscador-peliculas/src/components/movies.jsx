import responsemovies from "../mocks/with-results.json";
import noresponse from "../mocks/without-results.json";

const resolvermovies = responsemovies.Search;
const checkIfHasMovies = responsemovies.Response;
const leerMovies = resolvermovies?.map((resp) => ({
  id: resp.imdbID,
  title: resp.Title,
  year: resp.Year,
  poster: resp.Poster,
}));

function MoviesList() {
  return (
    <ul>
      {leerMovies.map((resp) => {
        return (
          <li key={resp.id}>
            <h3>{resp.title}</h3>
            <p>{resp.year}</p>
            <img src={resp.poster} alt={resp.title} />
          </li>
        );
      })}
    </ul>
  );
}

export function ErrorMovie() {
  return <h3>{noresponse.Error}</h3>;
}

export function CheckStatusMovies() {
  return checkIfHasMovies ? <MoviesList /> : <ErrorMovie />;
}
