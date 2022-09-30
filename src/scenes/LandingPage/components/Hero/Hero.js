import React, { useState, useEffect } from 'react';
import { object, array, any } from 'prop-types';
import { RichText } from 'prismic-reactjs';
import Swiper from 'react-id-swiper';

import Button, { VARIANT } from '@components/Button/Button.js';
import Image from '@components/Image/Image';
import styles from './Hero.module.scss';
import ModalBookCall from '@components/ModalBookCall/ModalBookCall';
import isURL from 'validator/lib/isURL';
import Input from '../../../../scenes/ContactUs/components/Input/Input';
import { navigate } from 'gatsby';
import { globalHistory as history } from '@reach/router';

const renderMobileImages = (images) => {
  const renderedImages = images.map((imgElement, index) => (
    <Image image={imgElement} className={styles.mobileImage} key={index} />
  ));
  return renderedImages;
};

const initialState = {
  url: '',
};

const errors = { url: 'url' };

const Hero = ({
  primary,
  items,
  videoask,
  handleCTAClick,
  compliance_cta_active,
}) => {
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
    compliance_title,
    your_website_url,
  } = primary;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formState, setFormState] = useState(initialState);
  const [formErrors, setFormErrors] = useState([]);
  const { location } = history;

  const handleCloseModal = () => setModalIsOpen(false);
  const handleClick = (e) => {
    e.preventDefault();
    setModalIsOpen(!modalIsOpen);
  };

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

  const validateForm = (userurl) => {
    const isValidUserurl = isURL(userurl);

    if (!isValidUserurl) {
      setFormErrors([...formErrors, errors.url]);
    }

    const validForm = isValidUserurl;

    return validForm;
  };

  const handleInputChange = ({ target: { name, value } }) => {
    setFormState((state) => ({ ...state, [name]: value }));
    formErrors.length > 0 &&
      setFormErrors([...formErrors.filter((error) => error != name)]);
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleOnSubmit(event);
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { url } = formState;
    const isValidForm = validateForm(url);

    isValidForm && handleCTAClick(true);
    navigate(`${location.pathname}#cta-form`);

    window.localStorage.setItem(
      'scan',
      `https://scanner.secureprivacy.ai/#/${url}`
    );
  };

  useEffect(() => {
    location.hash.includes('cta-form')
      ? handleCTAClick(true)
      : handleCTAClick(false);
  }, [location]);

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
            {!compliance_cta_active && (
              <div className={styles.buttonWrapper}>
                <Button variant={VARIANT.PRIMARY} click={handleClick}>
                  <RichText render={button.richText} />
                </Button>
              </div>
            )}
            {!compliance_cta_active && (
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
            )}
            {compliance_cta_active && (
              <div className={styles.ctaOpener}>
                <div className={styles.upTitleCompliance}>
                  <RichText render={compliance_title.richText} />
                </div>
                <div className={styles.buttonScanContainer}>
                  <Input
                    id="url"
                    placeholder={RichText.asText(your_website_url.richText)}
                    errorMessage={'Please enter valid URL'}
                    name="url"
                    valid={!formErrors.includes('url')}
                    value={formState.url}
                    handleChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                  />
                  <div className={styles.buttonScan}>
                    <Button
                      variant={VARIANT.PRIMARY}
                      isHeader={true}
                      click={handleOnSubmit}
                      fullWidth={true}
                      className={styles.button}
                    >
                      <RichText render={button.richText} />
                    </Button>
                  </div>
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
            )}
          </div>

          {videoask && videoask.raw && videoask.raw.url && (
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
          )}
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
  handleCTAClick: any,
  compliance_cta_active: any,
};

export default Hero;
