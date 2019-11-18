import React from 'react';

import './style.css'


export const GamesList = ({games}) => {
    return (
        <div className="games">
            {
                games ?
                    games.map(game => {
                        return (
                            <div key={game.id} className="games__list__item">
                                <div className="games__list__wrap">
                                    <a href={game.link}><img className='game-img' src={game.img} alt="Game"/></a>
                                </div>
                                <span className="games__list__name">{game.name}</span>
                            </div>
                        )
                    })
                    : <h1>loading..</h1>
            }
        </div>
    )
};