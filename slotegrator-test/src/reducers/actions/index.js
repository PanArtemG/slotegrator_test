import * as ACTION from '../../constants';

export const getLibraryGames = () => ({
    type: ACTION.GET_GAMES
});

export const searchResult = payload => ({
    type: ACTION.SET_GAMES_SEARCH,
    payload
});

export const setGamesCategory = payload => ({
    type: ACTION.SET_GAMES_CATEGORY,
    payload
});