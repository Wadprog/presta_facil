import React, { useState } from 'react';
import { object, array } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import GatsbyImage from 'gatsby-image';
import Button, { VARIANT } from '@components/Button/Button.js';
import IconButton, { VARIANT_ICON } from '@components/IconButton/IconButton.js';
import Modal from '@components/Modal';
import styles from './Hero.module.scss';
import PLayIcon from '@src/assets/images/homepage/icons/play.inline.svg';

const Hero = ({ primary, fields }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleOpenModal = () => setModalIsOpen(true);
  const handleCloseModal = () => setModalIsOpen(false);

  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
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
            <Button variant={VARIANT.PRIMARY}>
              <RichText render={primary.button} />
            </Button>
          </div>
          <div className={styles.trustedWrapper}>
            <RichText render={primary.trusted} />
            <div className={styles.companies}>
              {fields.map(({ trustedlogo }) => {
                return (
                  <img
                    src={trustedlogo.url}
                    alt={trustedlogo.alt}
                    key={trustedlogo.url}
                    draggable="false"
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <GatsbyImage
            className={styles.image}
            fluid={primary.mainImageSharp.childImageSharp.fluid}
            alt={primary.mainImageSharp.alt}
          />

          <div className={styles.playButtonWrapper}>
            <div className={styles.playButton}>
              <IconButton variant={VARIANT_ICON.PLAY} click={handleOpenModal}>
                <PLayIcon />
              </IconButton>
            </div>
            <div className={styles.playButtonText}>
              <RichText render={primary.modalbuttontitle} />
              <RichText render={primary.modalbuttondescription} />
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={modalIsOpen}
        closeModal={handleCloseModal}
        videoLink={primary.modalvideo.url}
      />
    </div>
  );
};

Hero.propTypes = {
  primary: object,
  fields: array,
};

export default Hero;
