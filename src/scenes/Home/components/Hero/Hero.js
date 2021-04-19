import React, { useState, useEffect } from 'react';
import { object, array } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import Swiper from 'react-id-swiper';
import lozad from 'lozad';

import { parseString } from '@helpers';
import Button, { VARIANT } from '@components/Button/Button.js';
import IconButton, { VARIANT_ICON } from '@components/IconButton/IconButton.js';
import Modal from '@components/Modal';
import styles from './Hero.module.scss';
import PLayIcon from '@src/assets/images/homepage/icons/play.inline.svg';
import ModalBookCall from '@components/ModalBookCall/ModalBookCall';
import cookieBanner from './image/cookie-banner.png';
import cookiePolicy from './image/cookie-policy.png';
import preferenceCenter from './image/preference-center.png';

const Hero = ({ primary, fields }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleOpenModal = () => setModalIsOpen(true);
  const handleCloseModal = () => setModalIsOpen(false);
  const buttonLink = primary.buttonlink[0].text;
  const modalCtaButtonLink = parseString(primary.modalctabuttonlink);
  const modalCtaButtonText = parseString(primary.modalctabuttontext);

  const [modalBookIsOpen, setModalBookIsOpen] = useState(false);
  const handleCloseModalBook = () => setModalBookIsOpen(false);

  useEffect(() => {
    const observer = lozad();
    observer.observe();
  }, []);

  const params = {
    slidesPerView: 3,
    spaceBetween: 16,
    breakpoints: {
      992: {
        spaceBetween: 34,
      },
    },
    autoplay: {
      delay: 3000,
    },
  };

  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.mobileImagesWrapper}>
            <img
              data-src={cookiePolicy}
              className={`${styles.mobileImage} lozad`}
              alt="cookie policy"
            />
            <img
              data-src={preferenceCenter}
              className={`${styles.mobileImage} lozad`}
              alt="preference center"
            />
            <img
              data-src={cookieBanner}
              className={`${styles.mobileImage} lozad`}
              alt="cookie baner"
            />
          </div>
          <div className={styles.upTitle}>
            <RichText render={primary.sub_title} />
          </div>
          <div className={styles.title}>
            <RichText render={primary.title} />
          </div>
          <div className={styles.descr}>
            <RichText render={primary.description} />
          </div>
          <div className={styles.buttonWrapper}>
            <Button variant={VARIANT.PRIMARY} to={`${buttonLink}`}>
              <RichText render={primary.button} />
            </Button>
          </div>
          <div className={styles.trustedWrapper}>
            <RichText render={primary.trusted} />
            <div className={styles.companies}>
              <Swiper {...params}>
                {fields.map(({ trustedlogo }) => {
                  return (
                    <div className={styles.slide} key={trustedlogo.url}>
                      <img
                        data-src={trustedlogo.url}
                        className={`${styles.companyLogo} lozad`}
                      />
                    </div>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <img
            data-src={primary.mainImage.url}
            className={`${styles.image} lozad`}
          />
          <div className={styles.playButtonWrapper}>
            <div className={styles.playButton}>
              <IconButton
                isGradient={true}
                variant={VARIANT_ICON.PLAY}
                click={handleOpenModal}
              >
                <PLayIcon />
              </IconButton>
            </div>
            <div className={styles.playButtonText}>
              <RichText render={primary.modalbuttontitle} />
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={modalIsOpen}
        closeModal={handleCloseModal}
        videoLink={primary.modalvideo.url}
        modalCtaButtonLink={modalCtaButtonLink}
        modalCtaButtonText={modalCtaButtonText}
      />
      <ModalBookCall open={modalBookIsOpen} closeModal={handleCloseModalBook} />
    </div>
  );
};

Hero.propTypes = {
  primary: object,
  fields: array,
};

export default Hero;
