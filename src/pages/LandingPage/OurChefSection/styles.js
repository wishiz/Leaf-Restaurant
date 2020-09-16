import styled from 'styled-components';

import ContentWidthLimiter from '../../../components/ContentWidthLimiter';

import chefBg from '../../../assets/images/chef_bg.png';

export const OurChef = styled.section`
  background-image: url(${chefBg});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #000;
`;

export const OurChefContainer = styled(ContentWidthLimiter)`
  padding-top: 64px;
  padding-bottom: 64px;
  min-height: 600px;
`;

export const OurChefTextBlock = styled.div`
  color: $grey-1;
  line-height: 1.7;
  max-width: 470px;
`;

export const OurChefTextParagraph = styled.p`
  margin-bottom: 24px;
  color: #fff;
`;

export const OurChefSignatureWrapper = styled.div`
  max-width: 150px;
`;
