import {take, put, all} from 'redux-saga/effects'
import axios from 'axios';
import *as ACTION from '../constants';
import {SET_GAMES} from "../constants";

function* getLibraryGamesSaga() {
    while (true) {
        yield take (ACTION.GET_GAMES);
        const response = yield axios.get('/library-games/games');

        // yield put ({
        //     type: ACTION.SET_GAMES,
        //     payload: response.data
        // })
    }
}

function* addGamesSaga() {
    while (true) {
        const { game } = yield take(ACTION.ADD_GAMES);
        const response = yield axios.post ('/library-games/library-games', game);
        if (response.data.created) {
            yield put({
                type: SET_GAMES,
                payload: response.data.game
            })
        }
    }
}

export function* rootSaga () {
    yield all ([
        getLibraryGamesSaga(),
        addGamesSaga()
    ])
}