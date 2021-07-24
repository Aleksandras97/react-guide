import { card } from './Card.module.css'

function Card({className, children}) {
    return (
        <div className={` ${card} ${className} `}>
            {children}
        </div>
    )
}

export default Card
