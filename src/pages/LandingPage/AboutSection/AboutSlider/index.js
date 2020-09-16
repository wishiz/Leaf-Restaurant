import React from 'react';

import Slider from 'react-slick';

import AboutSliderSlide from '../AboutSliderSlide';

import './styles.scss';

export default function AboutSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="about-slider">
      <Slider {...settings}>
        <div className="about-slider__slide">
          <AboutSliderSlide slide="cheersSlide" />
        </div>
        <div className="about-slider__slide">
          <AboutSliderSlide slide="restaurantSlide" />
        </div>
        <div className="about-slider__slide">
          <AboutSliderSlide slide="serveSlide" />
        </div>
        <div className="about-slider__slide">
          <AboutSliderSlide slide="steakSlide" />
        </div>
        <div className="about-slider__slide">
          <AboutSliderSlide slide="wineSlide" />
        </div>
      </Slider>
    </div>
  );
}
