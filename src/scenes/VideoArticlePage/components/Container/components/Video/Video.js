import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import lozad from 'lozad';

import Modal from '@components/Modal';

import style from './Video.module.scss';

const Video = ({ data, index }) => {
  const [localPreviewImage, setLocalPreviewImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState();

  const urlString = data.videourl.url;

  useEffect(() => {
    const localCdnHostname = 'secure-privacy';
    const urlHostname = new URL(urlString).hostname;

    const isLocal = urlHostname.includes(localCdnHostname);

    if (!localPreviewImage && isLocal) {
      setLocalPreviewImage(true);
    }

    if (!previewImage && !isLocal) {
      fetch(`https://noembed.com/embed?url=${urlString}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.thumbnail_url) {
            const image = data.thumbnail_url;
            setPreviewImage(image);
          }
        });
    }
  }, [modalIsOpen]);

  useEffect(() => {
    const observer = lozad();
    observer.observe();
  }, [previewImage, localPreviewImage]);

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
          {(previewImage || localPreviewImage) &&
          index === 0 &&
          previewImage ? (
            <img src={previewImage} loading="eager" />
          ) : (
            <video src={`${urlString}#t=0.1`} preload="metadata" />
          )}
          {index !== 0 &&
          (previewImage || localPreviewImage) &&
          previewImage ? (
            <img data-src={previewImage} className="lozad" />
          ) : (
            <video
              src={`${urlString}#t=0.1`}
              className="lozad"
              preload="metadata"
            />
          )}
        </div>
        <div className={style.button}>
          <div className={style.button__arrow} />
          <div className={style.button__background} />
        </div>
      </div>
      {modalIsOpen && (
        <Modal
          open={modalIsOpen}
          closeModal={handleCloseModal}
          videoLink={urlString}
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
