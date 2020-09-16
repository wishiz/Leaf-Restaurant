import React from 'react';

import classNames from 'classnames';
import types from 'prop-types';

import './styles.scss';

export default function ContentWidthLimiter({
  fullWidth,
  children,
  className,
  width,
}) {
  const contentLimiterClass = classNames(
    {
      'content-limiter': true,
      'content-limiter--full-width': fullWidth,
      [`content-limiter--width-${width}`]: width,
    },
    className,
  );

  return <div className={contentLimiterClass}>{children}</div>;
}

ContentWidthLimiter.propTypes = {
  className: types.string,
  fullWidth: types.bool,
  children: types.node.isRequired,
  width: types.oneOf(['sm', 'lg']),
};

ContentWidthLimiter.defaultProps = {
  fullWidth: false,
  width: 'sm',
};
