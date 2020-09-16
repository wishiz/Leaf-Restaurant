import React, { useState } from 'react';

import ContentWidthLimiter from '../../../components/ContentWidthLimiter';
import GalleryImages from './GalleryImages';
import GalleryModal from './GalleryModal';

import galleryPics from '../../../constants/gallerySectionData';

import './styles.scss';

export default function GallerySection() {
  const [imgIndex, setImgIndex] = useState(0);
  const [isModalOpen, openModal] = useState(false);

  const handleOpenModal = (index) => {
    openModal(true);
    setImgIndex(index);
  };

  const handleCloseModal = () => {
    openModal(false);
    setImgIndex(0);
  };

  return (
    <section className="gallery" id="gallery">
      <ContentWidthLimiter className="gallery__container" fullWidth>
        <GalleryImages onClick={handleOpenModal} />
        <GalleryModal
          isOpen={isModalOpen}
          onClick={handleCloseModal}
          src={galleryPics[imgIndex].src}
          alt={galleryPics[imgIndex].alt}
        />
      </ContentWidthLimiter>
    </section>
  );
}
