import React from 'react';

import ContentWidthLimiter from '../../../components/ContentWidthLimiter';
import SectionTitle from '../../../components/SectionTitle';
import AboutSlider from './AboutSlider';

import { aboutTitleData } from '../../../constants/aboutSectionData';

import './styles.scss';

export default function AboutSection() {
  return (
    <section className="about" id="restaurant" data-aos="fade-up">
      <ContentWidthLimiter className="about__container">
        <SectionTitle
          className="about__title"
          heading={aboutTitleData.heading}
          desc={aboutTitleData.desc}
        />
        <AboutSlider />
      </ContentWidthLimiter>
    </section>
  );
}
