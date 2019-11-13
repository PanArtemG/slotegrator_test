import React from 'react';
import {Logo, HeaderOptions} from "../";

import './style.css'



export const Header = () => {
    return (
        <header className='header'>
            <Logo/>
            <HeaderOptions/>
        </header>
    )
};