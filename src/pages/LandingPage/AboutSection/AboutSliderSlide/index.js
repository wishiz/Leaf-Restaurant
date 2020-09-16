import React from 'react';

import classNames from 'classnames';
import types from 'prop-types';

import { aboutSliderData } from '../../../../constants/aboutSectionData';

import './styles.scss';

export default function AboutSliderSlide({ slide }) {
  const aboutSliderSlide = aboutSliderData.find((card) => slide === card.name);

  const aboutSliderSlideClass = classNames({
    'about-slider-slide': true,
  });

  return (
    <div className={aboutSliderSlideClass}>
      <div className="about-slider-slide__img-wrapper">
        <img
          className="img-cover"
          src={aboutSliderSlide.image}
          alt={aboutSliderSlide.imageAlt}
        />
      </div>
      <p className="about-slider-slide__description">
        {aboutSliderSlide.description}
      </p>
    </div>
  );
}

AboutSliderSlide.propTypes = {
  slide: types.string.isRequired,
};
