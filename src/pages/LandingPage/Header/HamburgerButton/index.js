import React from 'react';

import classNames from 'classnames';
import types from 'prop-types';

import './styles.scss';

export default function HamburgerButton({ handleClick, isOpen, mirror }) {
  const modifyBtn = classNames({
    'hamburger-btn': true,
    'hamburger-btn--mirror-open': mirror && isOpen,
    'hamburger-btn--mirror': mirror,
    'hamburger-btn--open': isOpen,
  });

  return (
    <button className={modifyBtn} onClick={handleClick}>
      <p />
      <p />
      <p />
    </button>
  );
}

HamburgerButton.propTypes = {
  handleClick: types.func,
  isOpen: types.bool.isRequired,
  mirror: types.bool,
};

HamburgerButton.defaultProps = {
  mirror: false,
};
