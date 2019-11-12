import {combineReducers} from 'redux';
import * as ACTION from '../constants';

const initialState = {
    library_games: []
};

const libraryGamesReducer = (state = initialState, action) => {
    const {type, payload} = action;
        switch (type) {
            case ACTION.GET_GAMES:
                return {
                    ...state,
                    library_games: payload
                };
            case ACTION.ADD_GAMES:
                return {
                    library_games: [
                        ...state.library_games,
                        payload
                    ]
                };
            default:
                return {...state}
        }
};

export const reducers = combineReducers({
    games: libraryGamesReducer
});