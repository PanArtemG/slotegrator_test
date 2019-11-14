import React from 'react';

import './style.css'

export const GamesLayout = ({game}) => {
    console.log(game)
  return (
      <div class="games__nav__slide swiper-slide">
          <div class="games__nav__list__item">
              <img src={game.img} alt="Game"/>
          </div>
      </div>
  )
};