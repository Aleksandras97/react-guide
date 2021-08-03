import styles from './Card.module.css'

const Card = ({children, classname}) => {
    return (
        <div className={`${styles.card} ${classname}`}>
            {children}
        </div>
    )
}

export default Card
