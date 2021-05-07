import React, { useState, useEffect } from 'react';
import { object, array } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import Swiper from 'react-id-swiper';
import { parseString } from '@helpers';
import lozad from 'lozad';

import Button, { VARIANT } from '@components/Button/Button.js';
import IconButton, { VARIANT_ICON } from '@components/IconButton/IconButton.js';
import Modal from '@components/Modal';
import styles from './Hero.module.scss';
import PLayIcon from '@src/assets/images/homepage/icons/play.inline.svg';
import Image from '@components/Image/Image';

const Hero = ({ primary, fields }) => {
  useEffect(() => {
    const observer = lozad();
    observer.observe();
  }, []);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleOpenModal = () => setModalIsOpen(true);
  const handleCloseModal = () => setModalIsOpen(false);

  const modalCtaButtonText = parseString(primary.modalctabuttontext);
  const modalCtaButtonLink = parseString(primary.modalctabuttonlink);
  const videoButtonText = parseString(primary.videobuttontext);
  const { previewimage: previewImage } = primary;
  if (!previewImage) return null;
  const { previewimageSharp: priviewImageSharp } = primary;
  if (!priviewImageSharp) return null;
  const { url: previewImageUrl } = previewImage;
  if (!previewImageUrl) return null;

  const videoLink = primary.modalvideo ? primary.modalvideo.url : '';
  const params = {
    slidesPerView: 2,
    spaceBetween: 16,
    breakpoints: {
      768: {
        spaceBetween: 32,
      },
      992: {
        allowTouchMove: false,
        slidesPerView: 'auto',
      },
    },
  };

  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.title}>
            <RichText render={primary.title} />
          </div>
          <div className={styles.descr}>
            <RichText render={primary.description} />
          </div>
          <div className={styles.buttonWrapper}>
            <Button
              variant={VARIANT.PRIMARY}
              to={parseString(primary.buttonlink)}
            >
              <RichText render={primary.buttontext} />
            </Button>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            className={styles.image}
            image={previewImage}
            imageSharp={priviewImageSharp}
          />
          <div className={styles.playButtonWrapper}>
            <div className={styles.playButton}>
              <IconButton variant={VARIANT_ICON.PLAY} click={handleOpenModal}>
                <PLayIcon />
              </IconButton>
            </div>
            <div className={styles.playButtonText}>
              <p>{videoButtonText}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.partners}>
        <Swiper {...params}>
          {fields.map(({ partnerslogo }) => {
            return (
              <div className={styles.slide} key={partnerslogo.alt}>
                <img
                  src={partnerslogo.url}
                  alt={partnerslogo.alt}
                  draggable="false"
                  loading="lazy"
                  className="lozad"
                />
              </div>
            );
          })}
        </Swiper>
      </div>
      <Modal
        open={modalIsOpen}
        closeModal={handleCloseModal}
        videoLink={videoLink}
        modalCtaButtonText={modalCtaButtonText}
        modalCtaButtonLink={modalCtaButtonLink}
      />
    </div>
  );
};

Hero.propTypes = {
  primary: object,
  fields: array,
};

export default Hero;
