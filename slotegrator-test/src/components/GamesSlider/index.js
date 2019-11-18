import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

import './style.css'

export const GamesSlider = ({library_games}) => {
    const settings = {
        className: 'center',
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        speed: 500,
        rows: 3,
        slidesPerRow: 2
    };
    return (
        <div className='slider-wrap'>
            <Slider  {...settings}>
                {
                    library_games ?
                        library_games.map(game => {
                            return (
                                    <div className='img-wrap' key={game.id} >
                                        <img className='games__item__img' src={game.img} alt="Game"/>
                                    </div>
                            )
                        })
                        : <h1>loading..</h1>
                }
            </Slider>
        </div>
    );
};