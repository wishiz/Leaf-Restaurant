import React from 'react';

import classNames from 'classnames';
import types from 'prop-types';

import './styles.scss';

export default function ReactIcon({
  className,
  color,
  size,
  onClick,
  id,
  children,
}) {
  const reactIconClass = classNames(
    {
      'react-icon': true,
      [`react-icon--color-${color}`]: color,
      [`react-icon--size-${size}`]: size,
    },
    className,
  );

  return (
    <div className={reactIconClass} onClick={onClick} id={id}>
      {children}
    </div>
  );
}

ReactIcon.propTypes = {
  className: types.string,
  children: types.node.isRequired,
  onClick: types.func,
  color: types.oneOf(['black', 'white']),
  size: types.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl']).isRequired,
  id: types.string,
};

ReactIcon.defaultProps = {
  color: 'black',
};
