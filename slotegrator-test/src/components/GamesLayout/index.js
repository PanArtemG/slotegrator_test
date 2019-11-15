import React from 'react';

import './style.css'

export const GamesLayout = ({game}) => {
  return (
      <div  className='games__item '>
          <img className='games__item__img '  src={game.img} alt="Game"/>
      </div>
      )
};