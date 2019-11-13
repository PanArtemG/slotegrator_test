import React from 'react';
import './App.css';
import {Header, GamesLayout, Games, ProvidersMenu} from "./components/";

function App() {
  return (
    <div className="App">
        <div className='container'>
           <Header/>
           <GamesLayout/>
           <Games/>
            <ProvidersMenu/>
        </div>
    </div>
  );
}

export default App;
