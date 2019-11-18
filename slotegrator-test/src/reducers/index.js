import {combineReducers} from 'redux';
import * as ACTION from '../constants';

const initialState = {
    library_games: null,
    search_result: null,
    game_category: null
};

const libraryGamesReducer = (state = initialState, action) => {
    const {type, payload} = action;
        switch (type) {
            case ACTION.SET_GAMES:
                return {
                    ...state,
                    library_games: payload
                };
            case ACTION.SET_GAMES_SEARCH:
                return {
                    ...state,
                    search_result: payload
                };
            default:
                return {...state}
        }
};

export const reducers = combineReducers({
    games: libraryGamesReducer
});