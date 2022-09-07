import React, { useState } from 'react';
import { object, array } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import Swiper from 'react-id-swiper';

import Button, { VARIANT } from '@components/Button/Button.js';
import Image from '@components/Image/Image';
import styles from './Hero.module.scss';
import ModalBookCall from '@components/ModalBookCall/ModalBookCall';

const renderMobileImages = (images) => {
  const renderedImages = images.map((imgElement, index) => (
    <Image image={imgElement} className={styles.mobileImage} key={index} />
  ));
  return renderedImages;
};

const Hero = ({ primary, items, videoask }) => {
  const {
    buttonlink,
    cookieimage,
    policyimage,
    preferenceimage,
    sub_title: subTitle,
    title,
    description,
    button,
    trusted,
  } = primary;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleCloseModal = () => setModalIsOpen(false);

  const mobileImages = [policyimage, preferenceimage, cookieimage];

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

  const handleClick = (e) => {
    e.preventDefault();
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <>
      <div className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.mobileImagesWrapper}>
              {renderMobileImages(mobileImages)}
            </div>
            <div className={styles.upTitle}>
              <RichText render={subTitle.richText} />
            </div>
            <div className={styles.title}>
              <RichText render={title.richText} />
            </div>
            <div className={styles.descr}>
              <RichText render={description.richText} />
            </div>
            <div className={styles.buttonWrapper}>
              <Button variant={VARIANT.PRIMARY} click={handleClick}>
                <RichText render={button.richText} />
              </Button>
            </div>
            <div className={styles.trustedWrapper}>
              <RichText render={trusted.richText} />
              <div className={styles.companies}>
                <Swiper {...params}>
                  {items.map(({ trustedlogo }) => {
                    return (
                      <div className={styles.slide} key={trustedlogo.url}>
                        <Image
                          image={trustedlogo}
                          className={`${styles.companyLogo} swiper-origin`}
                        />
                      </div>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
          <div className={styles.videoWrapper}>
            <iframe
              src={videoask.raw.url}
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ borderRadius: 24, background: 'white' }}
              allow="camera *; microphone *; autoplay *; encrypted-media *; fullscreen *; display-capture *;"
            />
          </div>
        </div>
      </div>
      <ModalBookCall
        open={modalIsOpen}
        calendlyLink={buttonlink.text}
        closeModal={handleCloseModal}
      />
    </>
  );
};

Hero.propTypes = {
  primary: object,
  items: array,
  videoask: object,
};

export default Hero;
