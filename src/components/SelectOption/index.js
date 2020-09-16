import React from 'react';

import Select from 'react-select';
import types from 'prop-types';

import './styles.scss';

export default function SelectOption({
  options,
  maxMenuHeight,
  defaultValue,
  customStyles,
  isSelected,
  onChange,
}) {
  return (
    <div className="select-option">
      <Select
        isSelected={isSelected}
        styles={customStyles}
        options={options}
        className="select-option__option"
        maxMenuHeight={maxMenuHeight}
        defaultValue={defaultValue}
        onChange={onChange}
      />
    </div>
  );
}

SelectOption.propTypes = {
  options: types.arrayOf(types.object).isRequired,
  maxMenuHeight: types.number,
  defaultValue: types.objectOf(types.string),
  customStyles: types.objectOf(types.string),
  isSelected: types.bool,
  onChange: types.func,
};

SelectOption.defaultProps = {
  maxMenuHeight: 150,
};
