import React from 'react';

import { Link } from 'react-scroll';

import ContentWidthLimiter from '../../../components/ContentWidthLimiter';
import SectionTitle from '../../../components/SectionTitle';
import Tabs from '../../../components/Tabs';
import Button from '../../../components/Button';

import { tabsLinks, tabsContent } from '../../../constants/menuTabsData';
import { menuTitle } from '../../../constants/menuSectionData';

import './styles.scss';

export default function MenuSection() {
  return (
    <section className="menu" id="menu" data-aos="fade-up">
      <ContentWidthLimiter className="menu__container">
        <SectionTitle
          className="menu__title"
          heading={menuTitle.heading}
          desc={menuTitle.desc}
          icon={menuTitle.icon}
        />
        <Tabs tabsLinks={tabsLinks} tabsContent={tabsContent} />
        <Button
          size="lg"
          color="transparent"
          appearance="rounded"
          className="menu__reserve-button"
        >
          <Link isDynamic duration={500} smooth offset={-60} spy to="reserve">
            Reserve a table
          </Link>
        </Button>
      </ContentWidthLimiter>
    </section>
  );
}
