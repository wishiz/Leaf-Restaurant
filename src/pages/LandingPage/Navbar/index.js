import React, { Fragment } from 'react';

import { Link } from 'react-scroll';
import types from 'prop-types';

import './styles.scss';

export default function Navbar({ navbarItems }) {
  return (
    <nav className="navbar">
      {navbarItems.map((item) => (
        <Fragment key={item.to}>
          <Link
            activeClass="navbar__item--active"
            className="navbar__item"
            isDynamic
            duration={500}
            smooth
            offset={-170}
            spy
            to={item.to}
          >
            <div className="navbar__item-indicator" />
            <p>{item.name}</p>
          </Link>
        </Fragment>
      ))}
    </nav>
  );
}

Navbar.propTypes = {
  navbarItems: types.arrayOf(types.object),
};
