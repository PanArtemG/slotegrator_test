import * as ACTION from '../../constants';

export const getLibraryGames = () => ({
    type: ACTION.GET_GAMES
});

export const searchResult = payload => ({
    type: ACTION.SET_GAMES_SEARCH,
    payload
});
