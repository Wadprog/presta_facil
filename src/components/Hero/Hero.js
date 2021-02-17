import React, { useState } from 'react';
import { object, array } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import Swiper from 'react-id-swiper';
import Button, { VARIANT } from '@components/Button/Button.js';
import IconButton, { VARIANT_ICON } from '@components/IconButton/IconButton.js';
import Modal from '@components/Modal';
import styles from './Hero.module.scss';
import PLayIcon from '@src/assets/images/homepage/icons/play.inline.svg';
// import useGetImage from './useGetImage';
// import Image from '@components/Image/Image';
import { parseString } from '@helpers';

const Hero = ({ primary, fields }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleOpenModal = () => setModalIsOpen(true);
  const handleCloseModal = () => setModalIsOpen(false);
  // const { hero } = useGetImage();

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
              to={'/' + parseString(primary.buttonlink)}
            >
              <RichText render={primary.buttontext} />
            </Button>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          {/* <Image className={styles.image} imageSharp={hero} /> */}
          {primary.flag && (
            <div className={styles.flagWrapper}>
              <img
                className={styles.flag}
                src={primary.flag.url}
                alt={primary.flag.alt}
              />
            </div>
          )}

          <div className={styles.playButtonWrapper}>
            <div className={styles.playButton}>
              <IconButton variant={VARIANT_ICON.PLAY} click={handleOpenModal}>
                <PLayIcon />
              </IconButton>
            </div>
            <div className={styles.playButtonText}>
              <p>How it works</p>
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
      />
    </div>
  );
};

Hero.propTypes = {
  primary: object,
  fields: array,
};

export default Hero;
