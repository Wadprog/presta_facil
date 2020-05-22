import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import GatsbyImage from 'gatsby-image';
import Button, { VARIANT } from '@components/Button/Button.js';
import Modal from '@components/Modal';
import styles from './Hero.module.scss';
import PLayIcon from '@src/assets/images/homepage/icons/play.inline.svg';

const Hero = ({
  button,
  title,
  sub_title,
  description,
  mainImage,
  modalbuttondescription,
  modalbuttontitle,
  trusted,
  repeateble,
  mainImageSharp,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = () => setModalIsOpen(true);
  const handleCloseModal = () => setModalIsOpen(false);

  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.upTitle}>
            <RichText render={sub_title} />
          </div>
          <div className={styles.title}>
            <RichText render={title} />
          </div>
          <div className={styles.descr}>
            <RichText render={description} />
          </div>
          <div className={styles.buttonWrapper}>
            <Button>
              <RichText render={button} />
            </Button>
          </div>
          <div className={styles.trustedWrapper}>
            <RichText render={trusted} />
            <div className={styles.companies}>
              {repeateble.map(({ trustedlogo }) => {
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
          {mainImageSharp ? (
            <GatsbyImage
              className={styles.image}
              fluid={mainImageSharp.childImageSharp.fluid}
              alt={mainImageSharp.alt}
            />
          ) : (
            <img
              className={styles.image}
              src={mainImage.url}
              alt={mainImage.alt}
              draggable="false"
            />
          )}

          <div className={styles.playButtonWrapper}>
            <div className={styles.playButton}>
              <Button variant={VARIANT.PLAY} click={handleOpenModal}>
                <PLayIcon />
              </Button>
            </div>
            <div className={styles.playButtonText}>
              <RichText render={modalbuttontitle} />
              <RichText render={modalbuttondescription} />
            </div>
          </div>
        </div>
      </div>
      <Modal open={modalIsOpen} closeModal={handleCloseModal} />
    </div>
  );
};

Hero.propTypes = {
  button: PropTypes.array,
  title: PropTypes.array,
  sub_title: PropTypes.array,
  description: PropTypes.array,
  mainImage: PropTypes.object,
  modalbuttondescription: PropTypes.array,
  modalbuttontitle: PropTypes.array,
  trusted: PropTypes.array,
  repeateble: PropTypes.array,
  mainImageSharp: PropTypes.object,
};

export default Hero;
