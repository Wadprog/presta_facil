import React, { useState } from 'react';
import { object, array } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import Swiper from 'react-id-swiper';

import { parseString } from '@helpers';
import Button, { VARIANT } from '@components/Button/Button.js';
import IconButton, { VARIANT_ICON } from '@components/IconButton/IconButton.js';
import Modal from '@components/Modal';
import Image from '@components/Image/Image';
import styles from './Hero.module.scss';
import PLayIcon from '@src/assets/images/homepage/icons/play.inline.svg';
import ModalBookCall from '@components/ModalBookCall/ModalBookCall';

const renderMobileImages = (images) => {
  const renderedImages = images.map((imgElement, index) => (
    <Image
      image={imgElement[0]}
      imageSharp={imgElement[1]}
      className={styles.mobileImage}
      key={index}
    />
  ));
  return renderedImages;
};

const Hero = ({ primary, fields }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleOpenModal = () => setModalIsOpen(true);
  const handleCloseModal = () => setModalIsOpen(false);
  const buttonLink = primary.buttonlink[0].text;
  const modalCtaButtonLink = parseString(primary.modalctabuttonlink);
  const modalCtaButtonText = parseString(primary.modalctabuttontext);

  const {
    cookieimage,
    cookieimageSharp,
    policyimage,
    policyimageSharp,
    preferenceimage,
    preferenceimageSharp,
  } = primary;

  const mobileImages = [
    [policyimage, policyimageSharp],
    [preferenceimage, preferenceimageSharp],
    [cookieimage, cookieimageSharp],
  ];

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
          <Image
            image={primary.mainImage}
            imageSharp={primary.mainImageSharp}
            className={styles.image}
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
