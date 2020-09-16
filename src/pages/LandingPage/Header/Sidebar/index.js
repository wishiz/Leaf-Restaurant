import React, { Fragment } from 'react';

import { Link } from 'react-scroll';
import classNames from 'classnames';
import types from 'prop-types';

import './styles.scss';

export default function Sidebar({ isOpen, list, handleClick }) {
  const sidebarClass = classNames({
    sidebar: true,
    'sidebar--open': isOpen,
  });

  return (
    <aside className={sidebarClass}>
      {list.map((item) => (
        <Fragment key={item.to}>
          <Link
            activeClass="sidebar__list-item--active"
            className="sidebar__list-item"
            isDynamic
            duration={500}
            smooth
            offset={-170}
            spy
            to={item.to}
            onClick={handleClick}
          >
            <p>{item.name}</p>
          </Link>
        </Fragment>
      ))}
    </aside>
  );
}

Sidebar.propTypes = {
  isOpen: types.bool.isRequired,
  list: types.arrayOf(types.object).isRequired,
};
