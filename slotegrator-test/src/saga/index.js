import {take, put, all} from 'redux-saga/effects'
import axios from 'axios';
import *as ACTION from '../constants';

function* getLibraryGamesSaga() {
    while (true) {
        yield take (ACTION.GET_GAMES);
        const response = yield axios.get('/library-games/games');
        console.log(response);

        yield put ({
            type: ACTION.SET_GAMES,
            payload: response.data
        })
    }
}

export function* rootSaga () {
    yield all ([
        getLibraryGamesSaga()
    ])
}