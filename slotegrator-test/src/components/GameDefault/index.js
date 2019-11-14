import React from 'react';

export const GameDefault = ({game}) => {
    return (
        `<div className="games__slide swiper-slide">
            <div className="games__list__item">
                <div className="games__list__wrap">
                    <a href="${game.link}"><img src="${game.img}" alt="Game"></a>
                </div>
                <span className="games__list__name">${game.name}</span>
            </div>
        </div>`
    )
};