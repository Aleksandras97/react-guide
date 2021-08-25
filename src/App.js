import axios from "axios";
import { Fragment, useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchMoviesHandler() {
    setIsLoading(true);
    setError(null);
    await axios
      .get("https://swapi.dev/api/films/")
      .then((res) => {
        const transformMovies = res.data.results.map((data) => {
          return {
            id: data.episode_id,
            title: data.title,
            openingText: data.opening_crawl,
            releaseDate: data.release_date,
          };
        });

        setMovies(transformMovies);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
    setIsLoading(false);
  }

  let content = <p>No movies found...</p>;
  
  if (movies.length > 0) {
    content = <MovieList movies={movies} />
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </Fragment>
  );
}

export default App;
