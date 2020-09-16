import React from 'react';

import classNames from 'classnames';
import types from 'prop-types';

import './styles.scss';

export default function Example({ example }) {
  const exampleClass = classNames({
    exampleClass: true,
    'exampleClass--modificator': example,
  });

  return <div className={exampleClass}>Test text</div>;
}

Example.propTypes = {
  example: types.bool,
};

Example.defaultProps = {
  example: true,
};
