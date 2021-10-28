import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import lozad from 'lozad';
import Modal from '@components/Modal';

import style from './Video.module.scss';

const Video = ({ data, index }) => {
  const [previewImage, setPreviewImage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState();

  const url = data.videourl.url;

  useEffect(() => {
    if (!previewImage) {
      fetch(`https://noembed.com/embed?url=${url}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.thumbnail_url) {
            const image = data.thumbnail_url;
            setPreviewImage(image);
          }
        });
    }
  }, [previewImage, modalIsOpen]);

  useEffect(() => {
    const observer = lozad();
    observer.observe();
  }, [previewImage]);

  const handleOpenModal = () => setModalIsOpen(true);
  const handleCloseModal = () => setModalIsOpen(false);

  return (
    <div className={style.container}>
      <div className={style.head}>
        <div className={style.title}>
          <h1>{data.videotitle.text}</h1>
        </div>
        {data.description && (
          <div className={style.description}>
            <p>{data.description.text}</p>
          </div>
        )}
      </div>
      <div className={style.player} onClick={handleOpenModal}>
        <div className={style.preview}>
          {previewImage && index === 0 && (
            <img src={previewImage} loading="eager" />
          )}
          {index !== 0 && previewImage && (
            <img data-src={previewImage} className="lozad" />
          )}
        </div>
        <div className={style.button} />
      </div>
      {modalIsOpen && (
        <Modal
          open={modalIsOpen}
          closeModal={handleCloseModal}
          videoLink={url}
        />
      )}
    </div>
  );
};

Video.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default Video;
