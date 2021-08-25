import styles from "./Movie.module.css";


const Movie = ({title, openingText, date}) => {
    return (
        <div className={styles.movie} >
            <h2>{title}</h2>
            <h3>{date}</h3>
            <p>{openingText}</p>
        </div>
    )
}

export default Movie
