import { Fragment } from 'react';

import {header, main_img} from './Header.module.css';
import sweetsImage from '../../assets/sweets.jpg'
import HeaderCartButton from './HeaderCartButton';
import Sweets from '../Sweets/Sweets';

const Header = () => {
    return (
        <Fragment >
            <header className={header}>
                <h1>Sweets App</h1>
                <HeaderCartButton />
            </header>
            <div className={main_img}>
                <img src={sweetsImage} alt="sweets" />
            </div>
        </Fragment>
    )
}

export default Header
