import React, { useState, useEffect } from 'react';

import { Link } from 'react-scroll';

import useWindowWidth from '../../../hooks/useWindowWidth';

import ContentWidthLimiter from '../../../components/ContentWidthLimiter';
import Navbar from '../Navbar';
import HamburgerButton from './HamburgerButton';
import Sidebar from './Sidebar';

import { navbarItems, sidebarItems } from '../../../constants/headerData';

import headerIcon from '../../../assets/icons/headerIcon.png';
import headerScrollIcon from '../../../assets/icons/headerScrollIcon.png';

import './styles.scss';

export default function Header() {
  const [isSidebarShow, toggleSidebarShow] = useState(false);

  const toggleHandler = () => {
    toggleSidebarShow(!isSidebarShow);
  };

  const isMobile = useWindowWidth() < 769;

  if (!isMobile && isSidebarShow) {
    toggleSidebarShow(false);
  }

  const [className, setClass] = useState('header');

  const listenScrollEvent = () => {
    if (window.scrollY < 73) {
      return setClass('header');
    }
    if (window.scrollY > 70) {
      return setClass('header-on-scroll');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <>
      <header className={className}>
        <ContentWidthLimiter width="sm">
          <div className={`${className}__content`}>
            <div className={`${className}__icon-wrapper`}>
              <Link isDynamic duration={500} smooth spy to="home">
                <img
                  className="img-contain header__icon"
                  src={headerIcon}
                  alt="header_icon"
                />
                <img
                  className="img-contain header__alt-icon"
                  src={headerScrollIcon}
                  alt="header_alt-icon"
                />
              </Link>
            </div>
            <Navbar navbarItems={navbarItems} />
            <HamburgerButton
              handleClick={toggleHandler}
              isOpen={isSidebarShow}
            />
          </div>
        </ContentWidthLimiter>
      </header>
      <Sidebar
        isOpen={isSidebarShow}
        list={sidebarItems}
        handleClick={toggleHandler}
      />
    </>
  );
}
