import React from 'react';
import {Logo, HeaderOptions, Search} from "../";

import './style.css'



export const Header = () => {
    return (
        <header className='header'>
            <Logo/>
            <Search/>
            <HeaderOptions/>
        </header>
    )
};