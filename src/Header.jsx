import React from 'react';

import "./Header.css";

const Header = (props) => (
    <header className='header'>
        <h1 style={{ textAlign: 'center'}}>{props.message}</h1>
    </header>
    
);

export default Header;