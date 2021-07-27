import styles from './SweetsSummary.module.css'

const SweetsSummary = () => {
    return (
        <section className={styles.summary}>
            <h2>Delicious Sweets, Delivered To You</h2>
            <p>
                Choose your sweets from our broad selection of available sweets
                and enjoy a delicious lunch or dinner at home.
            </p>
            <p>
                All our sweets are made with high-quality ingredients, just-in-time and
                of course by experienced chefs!
            </p>
        </section>
    )
}

export default SweetsSummary
