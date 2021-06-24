import React, { useState } from 'react';
import { object, array } from 'prop-types';
import Swiper from 'react-id-swiper';

import Button, { VARIANT } from '@components/Button/Button.js';
import IconButton, { VARIANT_ICON } from '@components/IconButton/IconButton.js';
import Modal from '@components/Modal';
import styles from './Hero.module.scss';
import PLayIcon from '@src/assets/images/homepage/icons/play.inline.svg';
import Image from '@components/Image/Image';

const Hero = ({ primary, items }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleOpenModal = () => setModalIsOpen(true);
  const handleCloseModal = () => setModalIsOpen(false);

  const {
    previewimage: previewImage,
    modalctabuttontext: modalCtaButtonText,
    modalctabuttonlink: modalCtaButtonLink,
    videobuttontext: videoButtonText,
    modalvideo: modalVideo,
    title,
    description,
    buttonlink,
    buttontext,
  } = primary;

  const videoLink = modalVideo ? modalVideo.url : '';
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
          <div className={styles.title}>{title.text}</div>
          <div className={styles.descr}>{description.text}</div>
          <div className={styles.buttonWrapper}>
            <Button variant={VARIANT.PRIMARY} to={buttonlink.text}>
              {buttontext.text}
            </Button>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            className={styles.image}
            image={previewImage}
            fluid={previewImage.fluid}
          />
          <div className={styles.playButtonWrapper}>
            <div className={styles.playButton}>
              <IconButton variant={VARIANT_ICON.PLAY} click={handleOpenModal}>
                <PLayIcon />
              </IconButton>
            </div>
            <div className={styles.playButtonText}>
              <p>{videoButtonText.text}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.partners}>
        <Swiper {...params}>
          {items.map(({ partnerslogo }) => {
            return (
              <div className={styles.slide} key={partnerslogo.alt}>
                <Image image={partnerslogo} />
              </div>
            );
          })}
        </Swiper>
      </div>
      <Modal
        open={modalIsOpen}
        closeModal={handleCloseModal}
        videoLink={videoLink}
        modalCtaButtonText={modalCtaButtonText.text}
        modalCtaButtonLink={modalCtaButtonLink.text}
      />
    </div>
  );
};

Hero.propTypes = {
  primary: object,
  items: array,
};

export default Hero;
