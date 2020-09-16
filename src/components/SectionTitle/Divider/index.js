import React from 'react';

import types from 'prop-types';

import titleDivider from '../../../assets/icons/titleDivider.png';

export default function Divider({ icon }) {
  if (!icon) {
    return null;
  }
  return (
    <div className="section-title__divider">
      <img src={titleDivider} alt="Title_divider" />
    </div>
  );
}

Divider.propTypes = {
  icon: types.bool,
};

Divider.defaultProps = {
  icon: false,
};
