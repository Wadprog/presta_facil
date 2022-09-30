import React, { useState } from 'react';
import { object, array, Boolean } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import Swiper from 'react-id-swiper';

import Button, { VARIANT } from '@components/Button/Button.js';
import Image from '@components/Image/Image';
import styles from './Footer.module.scss';
import ModalBookCall from '@components/ModalBookCall/ModalBookCall';
import star from './image/star.svg';
const Footer = ({ primary, items, isModal = false }) => {
  const {
    buttonlink,
    badge1,
    badge2,
    badge3,
    badge4,
    badge5,
    badge_6,
    sub_title: subTitle,
    title,
    description,
    button,
    checklist_advantages,
    reviewstext,
  } = primary;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleCloseModal = () => setModalIsOpen(false);

  const params = {
    slidesPerView: 4,
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
      <div className={`${styles.hero} ${isModal && styles.isModal}`}>
        <div className={styles.container}>
          {!isModal && (
            <div className={styles.content}>
              <div className={styles.trustedWrapper}>
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
              <div className={styles.upTitle}>
                <RichText render={subTitle.richText} />
              </div>
              <div className={styles.title}>
                <RichText render={title.richText} />
              </div>
              <div className={styles.descr}>
                <RichText render={description.richText} />
              </div>
              <div className={styles.checklist_positive}>
                <RichText render={checklist_advantages.richText} />
              </div>

              <div className={styles.buttonWrapper}>
                <Button variant={VARIANT.PRIMARY} click={handleClick}>
                  <RichText render={button.richText} />
                </Button>
              </div>
            </div>
          )}
          <div className={styles.badgesWrapper}>
            <div className={styles.reviewsWrapper}>
              {[0, 1, 2, 3, 4].map((val, i) => (
                <img
                  src={star}
                  key={i}
                  alt={'star'}
                  className={`${styles.star}`}
                  draggable="false"
                  loading="lazy"
                />
              ))}
              <RichText
                render={reviewstext.richText}
                className={`${styles.reviewstext}`}
              />
            </div>
          </div>
          <div className={styles.bagdesStyledWrapper}>
            <a
              href="https://www.g2.com/products/secure-privacy/reviews"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={badge1.url}
                alt={badge1.alt}
                className={`${styles.badge}`}
                draggable="false"
                loading="lazy"
              />
            </a>
            <a
              href="https://www.g2.com/products/secure-privacy/reviews"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={badge2.url}
                alt={badge2.alt}
                className={`${styles.badge}`}
                draggable="false"
                loading="lazy"
              />
            </a>
            <a
              href="https://www.g2.com/products/secure-privacy/reviews"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={badge3.url}
                alt={badge3.alt}
                className={`${styles.badge}`}
                draggable="false"
                loading="lazy"
              />
            </a>
            <a
              href="https://www.g2.com/products/secure-privacy/reviews"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={badge4.url}
                alt={badge4.alt}
                className={`${styles.badge}`}
                draggable="false"
                loading="lazy"
              />
            </a>
            <a
              href="https://www.capterra.com/p/169167/Secure-Privacy"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={badge5.url}
                alt={badge5.alt}
                className={`${styles.badge}`}
                draggable="false"
                loading="lazy"
              />
            </a>
            <a
              href="https://www.getapp.com/finance-accounting-software/a/secure-privacy"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={badge_6.url}
                alt={badge_6.alt}
                className={`${styles.badge}`}
                draggable="false"
                loading="lazy"
              />
            </a>
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

Footer.propTypes = {
  primary: object,
  items: array,
  videoask: object,
  isModal: Boolean,
};

export default Footer;
