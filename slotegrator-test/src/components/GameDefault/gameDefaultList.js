import React from 'react';

export const GameDefaultList = ({games = false}) => {
    return (
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
    )
};