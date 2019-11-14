import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getLibraryGames} from "../../reducers/actions";
import {GameDefault, GamesLayout} from "../";

import './style.css'

const mapStateToProps = state => ({
    library_games: state.games.library_games
});

export const Games = connect(mapStateToProps, {getLibraryGames})(props => {
    const {getLibraryGames, library_games, gameList = true } = props;
console.log(library_games)
    useEffect(() => {
        getLibraryGames()
    }, [getLibraryGames]);

    return (
        <div className='games'>
            { library_games
                ?
                library_games.map(game => {
                    return (
                        gameList ? <GameDefault game={game}/> : <GamesLayout game={game}/>
                    )
                })
                : <h1>Games loading...</h1>

            }
        </div>
    )
});