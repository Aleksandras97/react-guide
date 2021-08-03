import { Fragment } from 'react';

import {header, main_img} from './Header.module.css';
import sweetsImage from '../../assets/sweets.jpg'
import HeaderCartButton from './HeaderCartButton';

const Header = ({onShowCart}) => {
    return (
        <Fragment >
            <header className={header}>
                <h1>Sweets App</h1>
                <HeaderCartButton onShowCart={onShowCart} />
            </header>
            <div className={main_img}>
                <img src={sweetsImage} alt="sweets" />
            </div>
        </Fragment>
    )
}

export default Header
