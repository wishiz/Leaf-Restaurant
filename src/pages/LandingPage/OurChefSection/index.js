import React from 'react';

import SectionTitle from '../../../components/SectionTitle';

import {
  ourChefTitle,
  ourChefMainText,
} from '../../../constants/ourChefSectionData';
import chefSignature from '../../../assets/images/chef_signature.png';

// Used Styled Components (SC) for training purposes in this section
import * as SC from './styles';

export default function OurChefSection() {
  return (
    <SC.OurChef id="our-chef" data-aos="fade-up">
      <SC.OurChefContainer className="our-chef__container">
        <SectionTitle
          className="our-chef__title"
          heading={ourChefTitle.heading}
          desc={ourChefTitle.desc}
          icon={ourChefTitle.icon}
          color={ourChefTitle.color}
          descUpperCase
        />
        <SC.OurChefTextBlock className="our-chef__text-block">
          <SC.OurChefTextParagraph>
            {ourChefMainText['top-paragraph']}
          </SC.OurChefTextParagraph>

          <SC.OurChefTextParagraph>
            {ourChefMainText['bottom-paragraph']}
          </SC.OurChefTextParagraph>
        </SC.OurChefTextBlock>
        <SC.OurChefSignatureWrapper className="our-chef__signature-wrapper">
          <img src={chefSignature} alt="chef_signature" />
        </SC.OurChefSignatureWrapper>
      </SC.OurChefContainer>
    </SC.OurChef>
  );
}
