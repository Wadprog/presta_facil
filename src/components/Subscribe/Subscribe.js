import React, { useState, Fragment } from 'react';
import { object } from 'prop-types';
import BackgroundImage from 'gatsby-background-image';
import { RichText } from 'prismic-reactjs';
import classNames from 'classnames';

import Button, { VARIANT } from '@components/Button/Button.js';
import { isValidEmail } from '@helpers';
import useGetImages from './useGetImages';
import styles from './Subscribe.module.scss';

const Subscribe = ({ primary }) => {
  const [data, setData] = useState({
    email: {
      value: '',
      isValid: false,
    },
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { background } = useGetImages();

  const handleChange = ({ target: { name, value } }) => {
    setData((data) => ({
      ...data,
      [name]: {
        isValid: isValidEmail(value),
        value: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = isValidEmail(data.email.value);

    if (!isValid) {
      return;
    }

    isValid && setIsSubmitted(true);
  };

  const inputWrapperClass = classNames(styles.inputWrapper, {
    [styles.error]: !data.email.isValid && data.email.value.length > 0,
    [styles.success]: data.email.isValid && data.email.value.length > 0,
  });

  return (
    <div className={styles.container}>
      <BackgroundImage
        fluid={background.childImageSharp.fluid}
        className={styles.background}
      >
        <div className={styles.block}>
          <div className={styles.title}>
            <RichText render={primary.title} />
          </div>
          <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
            {!isSubmitted ? (
              <Fragment>
                <label className={inputWrapperClass}>
                  <input
                    placeholder="Type your email"
                    className={styles.input}
                    type="text"
                    name="email"
                    id="email"
                    require="true"
                    onChange={handleChange}
                  />
                  <span className={styles.errorMessage}>Wrong Email</span>
                </label>
                <div className={styles.button}>
                  <Button
                    variant={VARIANT.PRIMARY}
                    type="submit"
                    element="button"
                    fullWidth
                  >
                    {RichText.asText(primary.buttontext)}
                  </Button>
                </div>
              </Fragment>
            ) : (
              <div className={styles.successMessage}>
                Thank you for subscribing!
              </div>
            )}
          </form>
        </div>
      </BackgroundImage>
      <span className={styles.smPlanet}></span>
    </div>
  );
};

Subscribe.propTypes = {
  primary: object,
};

export default Subscribe;
