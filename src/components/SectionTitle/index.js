import React from 'react';

import types, { oneOf } from 'prop-types';
import classNames from 'classnames';

import Divider from './Divider';

import './styles.scss';

export default function SectionTitle({
  heading,
  desc,
  descUpperCase,
  icon,
  color,
  className,
}) {
  const sectionTitleClass = classNames(
    {
      'section-title': true,
      [`section-title--${color}`]: color,
    },
    className,
  );

  const sectionTitleDescClass = classNames({
    'section-title__desc': true,
    'section-title__desc--upper-case': descUpperCase,
  });

  return (
    <div className={sectionTitleClass}>
      <h2 className="section-title__heading">{heading}</h2>
      <p className={sectionTitleDescClass}>{desc}</p>
      <Divider icon={icon} />
    </div>
  );
}

SectionTitle.propTypes = {
  heading: types.string.isRequired,
  desc: types.string,
  descUpperCase: types.bool,
  icon: types.bool,
  color: oneOf(['light', 'dark']),
  className: types.string,
};

SectionTitle.defaultTypes = {
  color: 'dark',
  icon: false,
};
