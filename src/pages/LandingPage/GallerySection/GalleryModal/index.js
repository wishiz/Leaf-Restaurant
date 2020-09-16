import React from 'react';

import types from 'prop-types';

import './styles.scss';

export default function GalleryModal({ isOpen, onClick, src, alt }) {
  return isOpen ? (
    <div className="modal__overlay" onClick={onClick}>
      <div className="modal__body">
        <div className="modal__img-container">
          <img src={src} alt={alt} className="img-contain" />
        </div>
      </div>
    </div>
  ) : null;
}

GalleryModal.propTypes = {
  isOpen: types.bool.isRequired,
  onClick: types.func.isRequired,
  src: types.string,
  alt: types.string,
};
