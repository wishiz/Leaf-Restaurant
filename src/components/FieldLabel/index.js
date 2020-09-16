import React from 'react';

import classNames from 'classnames';
import types from 'prop-types';

import './styles.scss';

export default function FieldLabel({ blockTitle, children, label, id = '' }) {
  const fieldClass = classNames({
    'field-label': true,
  });

  const labelClass = classNames({
    'field-label__label': true,
    'field-label__label--block': blockTitle,
  });

  return (
    <div className={fieldClass} id={id}>
      {label && (
        <div className={labelClass}>
          <p className="label">{label}</p>
        </div>
      )}

      {children}
    </div>
  );
}

FieldLabel.propTypes = {
  blockTitle: types.bool,
  children: types.node.isRequired,
  label: types.string,
  id: types.string,
};
