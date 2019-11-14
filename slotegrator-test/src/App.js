import React from 'react';
import {Header, GamesLayout, Games, ProvidersMenu, MainPage, Footer} from "./components/";
import {Provider} from "react-redux";
import store from "./store";

import './App.css';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <div className='container'>
                    <Header/>
                    <MainPage/>
                    {/*<GamesLayout/>*/}
                    {/*<Games/>*/}
                    <Footer/>
                </div>
            </div>
        </Provider>
    );
}

export default App;
