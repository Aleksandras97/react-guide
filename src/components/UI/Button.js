import {button} from './Button.module.css';

const Button = ({children, type, onClick}) => {
    return (
        <button 
            className={button} 
            type={type || 'button'} 
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button
