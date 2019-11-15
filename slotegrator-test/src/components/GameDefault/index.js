import React from 'react';
import {connect} from 'react-redux';

import {GameDefaultList} from './gameDefaultList'
import './style.css'


export const GameDefault = (props) => {
    const {game_library} = props;
    return (
        <GameDefaultList games={game_library}/>
    )
};