import React from 'react';
import {Games} from '../Games'
import {ProvidersMenu, Currency} from "../";


export const MainPage = () => {
    return (
        <div>
            <Games/>
            <Games gameList={false}/>
            <ProvidersMenu/>
            <Currency/>
        </div>
    )
};