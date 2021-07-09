import React, { useState } from 'react';
import { object, array } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import Swiper from 'react-id-swiper';

import Button, { VARIANT } from '@components/Button/Button.js';
import IconButton, { VARIANT_ICON } from '@components/IconButton/IconButton.js';
import Modal from '@components/Modal';
import Image from '@components/Image/Image';
import styles from './Hero.module.scss';
import PLayIcon from '@src/assets/images/homepage/icons/play.inline.svg';
import ModalBookCall from '@components/ModalBookCall/ModalBookCall';

const renderMobileImages = (images) => {
  const renderedImages = images.map((imgElement, index) => (
    <Image image={imgElement} className={styles.mobileImage} key={index} />
  ));
  return renderedImages;
};

const Hero = ({ primary, items }) => {
  const {
    buttonlink,
    modalctabuttonlink,
    modalctabuttontext,
    cookieimage,
    policyimage,
    preferenceimage,
    sub_title: subTitle,
    title,
    description,
    button,
    trusted,
    heroimage: mainImage,
    modalbuttontitle,
  } = primary;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleOpenModal = () => setModalIsOpen(true);
  const handleCloseModal = () => setModalIsOpen(false);
  const buttonLink = buttonlink.text;
  const modalCtaButtonLink = modalctabuttonlink.text;
  const modalCtaButtonText = modalctabuttontext.text;

  const mobileImages = [policyimage, preferenceimage, cookieimage];

  const [modalBookIsOpen, setModalBookIsOpen] = useState(false);
  const handleCloseModalBook = () => setModalBookIsOpen(false);

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
            {renderMobileImages(mobileImages)}
          </div>
          <div className={styles.upTitle}>
            <RichText render={subTitle.raw} />
          </div>
          <div className={styles.title}>
            <RichText render={title.raw} />
          </div>
          <div className={styles.descr}>
            <RichText render={description.raw} />
          </div>
          <div className={styles.buttonWrapper}>
            <Button variant={VARIANT.PRIMARY} to={`${buttonLink}`}>
              <RichText render={button.raw} />
            </Button>
          </div>
          <div className={styles.trustedWrapper}>
            <RichText render={trusted.raw} />
            <div className={styles.companies}>
              <Swiper {...params}>
                {items.map(({ trustedlogo }) => {
                  return (
                    <div className={styles.slide} key={trustedlogo.url}>
                      <Image
                        image={trustedlogo}
                        className={styles.companyLogo}
                      />
                    </div>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <Image image={mainImage} className={styles.image} />
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
              <RichText render={modalbuttontitle.raw} />
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
  items: array,
};

export default Hero;
