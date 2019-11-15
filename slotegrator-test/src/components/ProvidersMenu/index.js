import React from 'react';
import {searchResultSave} from '../';

import './style.css'
import {searchResult} from "../../reducers/actions";

export const ProvidersMenu = ({libraryGames, searchResult}) => {
    return (
        <div className='providers'>
            <menu className='providers-menu'>
                <li className='providers-menu-item'>
                    <a onClick={()=>{searchResultSave(libraryGames,'providers', searchResult)}} className='providers-menu-link' href="#">providers</a>
                </li>
                <li className='providers-menu-item'>
                    <a onClick={()=>{searchResultSave(libraryGames, null, searchResult)}} className='providers-menu-link' href="#">all game</a>
                </li>
                <li className='providers-menu-item'>
                    <a onClick={()=>{searchResultSave(libraryGames,'fruit', searchResult)}} className='providers-menu-link' href="#">fruit</a>
                </li>
                <li className='providers-menu-item'>
                    <a onClick={()=>{searchResultSave(libraryGames,'hot', searchResult)}} className='providers-menu-link' href="#">hot</a>
                </li>
                <li className='providers-menu-item'>
                    <a onClick={()=>{searchResultSave(libraryGames,'top', searchResult)}} className='providers-menu-link' href="#">top</a>
                </li>
                <li className='providers-menu-item'>
                    <a onClick={()=>{searchResultSave('new')}} className='providers-menu-link' href="#">new</a>
                </li>
            </menu>
        </div>
    )
};