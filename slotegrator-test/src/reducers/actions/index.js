import * as ACTION from '../../constants';

export const getLibraryGames = () => ({
    type: ACTION.GET_GAMES
});

export const setLibraryGames = (payload) => ({
    type: ACTION.SET_GAMES,
    payload
});

export const addLibraryGames = (game) => ({
    type: ACTION.ADD_GAMES,
    game
});