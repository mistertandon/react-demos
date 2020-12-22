import React from 'react';
import './header.scss';

import logo from './../../assets/graphics/logo.png';

const Header = () => {

    return (

        <header data-test='header-container'>
            <div className='header-container' data-test='header'>
                <img className='header-logo' data-test='logo' src={logo} alt='Image does not find.' />
            </div>
        </header>

    )
}

export default Header