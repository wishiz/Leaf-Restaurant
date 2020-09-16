import React, { useState } from 'react';

import types from 'prop-types';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import './styles.scss';

export default function InputPhone({ country, placeholder }) {
  const [phone, setPhone] = useState('');

  const handleOnChange = (value) => {
    setPhone(value);
  };

  return (
    <div className="input-phone">
      <PhoneInput
        value={phone}
        onChange={handleOnChange}
        country={country}
        placeholder={placeholder}
      />
    </div>
  );
}

InputPhone.propTypes = {
  country: types.string,
  placeholder: types.string,
};

InputPhone.defaultProps = {
  placeholder: 'Enter number',
};
