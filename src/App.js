import axios from "axios";
import { Fragment, useEffect, useState, useCallback } from "react";
import "./App.css";
import AddMovie from "./components/AddMovie";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  function addMovieHandler(movie) {
    console.log(movie);
    axios.post(
      "https://react-movie-dev-default-rtdb.europe-west1.firebasedatabase.app/movies.json",
      movie
    );
  }

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    await axios
      .get(
        "https://react-movie-dev-default-rtdb.europe-west1.firebasedatabase.app/movies.json"
      )
      .then((res) => {
        const data = res.data;

        const loadedMovies = [];

        for (const key in data) {
          loadedMovies.push({
            id: key,
            title: data[key].title,
            openingText: data[key].openingText,
            releaseDate: data[key].releaseDate,
          });
        }

        setMovies(loadedMovies);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  let content = <p>No movies found...</p>;

  if (movies.length > 0) {
    content = <MovieList movies={movies} />;
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
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>{content}</section>
    </Fragment>
  );
}

export default App;
