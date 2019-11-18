import React from 'react';

import './style.css'

export const HeaderOptions = () => {
    return (
        <div className='header-options'>
            <div >
                <a className='header-options-icon icon-search' href="/#"/>
            </div>
            <div >
                <a className='header-options-icon icon-sound' href="/#"/>
            </div>
            <div >
                <a className='header-options-icon icon-fullscreen' href="/#"/>
            </div>
        </div>
    )
};