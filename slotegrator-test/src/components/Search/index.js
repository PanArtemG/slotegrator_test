import React from 'react';
import {connect} from 'react-redux';

import './style.css';

import {searchResult} from "../../reducers/actions";

const mapStateToProps = state => ({
    library_games: state.games.library_games
});

// saveResultToStore - аргумент принимающий action который перезаписывает состояние search_result в reducer
export const searchResultSave = (games_library, inputValue, saveResultToStore) => {
    return (
        inputValue
            ? saveResultToStore(games_library.filter(item => item.name.toLowerCase().indexOf(inputValue) > -1)   )
            : saveResultToStore(null)
    )
};

export const Search = connect(mapStateToProps, {searchResult})(props => {
    const {library_games, searchResult} = props;

    return (
        <div className='search-input-wrap'>
            <input className='search-input' onChange={(ev) => searchResultSave(library_games, (ev.target.value).toLowerCase(), searchResult)} type="text"/>
        </div>
    )
});
