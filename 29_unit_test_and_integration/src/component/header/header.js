import React from 'react';
import './header.scss';

import logo from './../../assets/graphics/logo.png';

const Header = () => {

    return (

        <header data-test='header-component-container'>
            <div className='header-container'>
                <img className='header-logo' src={logo} alt='Image does not find.' />
            </div>
        </header>

    )
}

export default Header