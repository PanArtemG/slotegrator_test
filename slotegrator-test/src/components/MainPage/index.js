import React, {useEffect} from 'react';

import {connect} from 'react-redux';
import {getLibraryGames, searchResult} from "../../reducers/actions";
import {GameDefault, GamesLayout} from "../";
import {ProvidersMenu, Currency} from "../";


import './style.css'

const mapStateToProps = state => ({
    library_games: state.games.library_games,
    search_result: state.games.search_result
});

export const MainPage = connect(mapStateToProps, {getLibraryGames, searchResult})(props => {
    const {library_games, search_result, getLibraryGames, searchResult} = props;

    useEffect(() => {
        getLibraryGames()
    }, [getLibraryGames]);


    return (
        <main className='main-content'>
        {console.log('ewe')}
            <div className="games">
                <GameDefault game_library={search_result ? search_result : library_games}/>
            </div>
            <ProvidersMenu library_games={library_games} searchResult={searchResult} />
            <Currency/>
        </main>
    )
});