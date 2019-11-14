import {combineReducers} from 'redux';
import * as ACTION from '../constants';

const initialState = {
    library_games: null
};

const libraryGamesReducer = (state = initialState, action) => {
    const {type, payload} = action;
        switch (type) {
            case ACTION.SET_GAMES:
                return {
                    ...state,
                    library_games: payload
                };
            default:
                return {...state}
        }
};

export const reducers = combineReducers({
    games: libraryGamesReducer
});