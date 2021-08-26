import { useRef } from "react";
import styles from "./AddMovie.module.css";

const AddMovie = ({onAddMovie}) => {
  const titleRef = useRef("");
  const openingTextRef = useRef("");
  const dateRef = useRef("");

  function submitMovieHandler(event) {
      event.preventDefault();

      //validation..

      const movie = {
        title: titleRef.current.value,
        openingText: openingTextRef.current.value,
        releaseDate: dateRef.current.value,
      }

      onAddMovie(movie)
  }

  return (
    <form onSubmit={submitMovieHandler} >
      <div className={styles.control}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" ref={titleRef} />
      </div>
      <div className={styles.control}>
        <label htmlFor="opening-text">Opening Text</label>
        <textarea rows="5" id="opening-text" ref={openingTextRef} />
      </div>
      <div className={styles.control}>
        <label htmlFor="date">Release Date</label>
        <input type="text" id="date" ref={dateRef} />
      </div>
      <button>Add Movie</button>
    </form>
  );
};

export default AddMovie;
