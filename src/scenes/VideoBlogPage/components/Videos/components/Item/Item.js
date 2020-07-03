import React, { useState, useEffect } from 'react';
import { array, object, string } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import Modal from '@components/Modal';
import { dateToString } from '@helpers';

import style from './Item.module.scss';

const Item = ({ title, videourl, tag, date }) => {
  const [previewImage, setPreviewImage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState();

  const handleOpenModal = () => setModalIsOpen(true);
  const handleCloseModal = () => setModalIsOpen(false);
  const url = videourl.url;
  const tagList = tag.split(/\s*,\s*/);

  useEffect(() => {
    if (!previewImage) {
      window
        .fetch(`https://noembed.com/embed?url=${url}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.thumbnail_url) {
            const image = data.thumbnail_url;
            setPreviewImage(image);
          }
        });
    }
  }, [previewImage, modalIsOpen]);
  return (
    <div className={style.item}>
      <div className={style.container}>
        <div className={style.preview} onClick={handleOpenModal}>
          {previewImage && <img src={previewImage}></img>}
        </div>
        <div className={style.title}>
          <RichText render={title} />
        </div>
        <div className={style.wrapper}>
          <div className={style.tagList}>
            {tagList.map((tag, index) => {
              return (
                <div className={style.tag} key={`tag${index}${tag}`}>
                  {tag}
                </div>
              );
            })}
          </div>
          <div className={style.date}>{dateToString(date)}</div>
        </div>
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

Item.propTypes = {
  title: array,
  videourl: object,
  primary: object,
  tag: string,
  date: string,
};

export default Item;
