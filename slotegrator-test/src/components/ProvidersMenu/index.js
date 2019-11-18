import React from 'react';

import './style.css'

export const ProvidersMenu = () => {
    return (
        <div className='providers'>
            <menu className='providers-menu'>
                <li className='providers-menu-item'>
                    <a className='providers-menu-link' href="#">providers</a>
                </li>
                <li className='providers-menu-item'>
                    <a className='providers-menu-link' href="#">all game</a>
                </li>
                <li className='providers-menu-item'>
                    <a className='providers-menu-link' href="#">fruit</a>
                </li>
                <li className='providers-menu-item'>
                    <a className='providers-menu-link' href="#">hot</a>
                </li>
                <li className='providers-menu-item'>
                    <a className='providers-menu-link' href="#">top</a>
                </li>
                <li className='providers-menu-item'>
                    <a className='providers-menu-link' href="#">new</a>
                </li>
            </menu>
        </div>
    )
};