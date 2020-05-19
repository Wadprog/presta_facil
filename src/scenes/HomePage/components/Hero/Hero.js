import React, { useState } from 'react';
import useGetImage from './useGetImage';
import Button, { VARIANT } from '@components/Button/Button.js';
import Modal from '@components/Modal';
import styles from './Hero.module.scss';
import PLayIcon from '@src/assets/images/homepage/icons/play.inline.svg';

const Hero = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { hero, enphase, penn, semasio } = useGetImage();
  const companies = [semasio, penn, enphase];

  const handleOpenModal = () => setModalIsOpen(true);
  const handleCloseModal = () => setModalIsOpen(false);

  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.upTitle}>
            Cookie Consent &amp; Website Compliance for
          </p>
          <h1 className={styles.title}>GDPR, ePrivacy, IAB, LGPD &amp; CCPA</h1>
          <p className={styles.descr}>
            Secure Privacy simplifies cookie consent, cookie policy, and
            controls across international data privacy laws.
          </p>
          <div className={styles.buttonWrapper}>
            <Button>Take 2-min quiz</Button>
          </div>
          <div className={styles.trustedWrapper}>
            <span>TRUSTED BY:</span>
            <div className={styles.companies}>
              {companies.map(({ publicURL }) => {
                return (
                  <img
                    src={publicURL}
                    alt="company logo"
                    key={publicURL}
                    draggable="false"
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <img
            className={styles.image}
            src={hero.publicURL}
            alt="hero"
            draggable="false"
          />
          <div className={styles.playButtonWrapper}>
            <div className={styles.playButton}>
              <Button variant={VARIANT.PLAY} click={handleOpenModal}>
                <PLayIcon />
              </Button>
            </div>
            <div className={styles.playButtonText}>
              <h3>How it works</h3>
              <span>With founder Dan Storbaek</span>
            </div>
          </div>
        </div>
      </div>
      <Modal open={modalIsOpen} closeModal={handleCloseModal} />
    </div>
  );
};

export default Hero;
