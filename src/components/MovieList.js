import Movie from "./Movie";
import styles from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const movieList = movies.map((movie) => (
    <Movie
      title={movie.title}
      openingText={movie.openingText}
      date={movie.releaseDate}
    />
  ));

  return <ul className={styles['movies-list']}>{movieList}</ul>;
};

export default MovieList;
