import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getLibraryGames} from "../../reducers/actions";
import {GameDefault, GamesLayout} from "../";

import './style.css'

const mapStateToProps = state => ({
    library_games: state.games.library_games
});


export const Games = connect(mapStateToProps, {getLibraryGames})(props => {
    const {getLibraryGames, library_games} = props;

    useEffect(() => {
        getLibraryGames()
    }, [getLibraryGames]);

    return (
        <div className='games'>

            {library_games
                ?
                <React.Fragment>
                    {
                        library_games.map(game => {
                            return (
                                <GamesLayout game={game}/>

                            )
                        })
                    }
                </React.Fragment>
                : <h1>Games loading...</h1>

            }
        </div>
    )
});