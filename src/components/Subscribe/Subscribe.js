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
const { title, buttontext: buttonText } = primary;
  const [data, setData] = useState({
    email: {
      value: '',
      isValid: false,
    },
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [isError, setIsError] = useState(false);
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

    const form = new FormData(e.target);
    const isValid = isValidEmail(data.email.value);

    if (!isValid) {
      setIsError(true);
      return;
    }

    fetch('https://secureprivacy.activehosted.com/proc.php', {
      method: 'POST',
      body: form,
      mode: 'no-cors',
    })
      .then(() => {
        setIsSubmitted(true);
        setIsError(false);
        setSubmitError(null);
      })
      .catch((err) => {
        setIsSubmitted(false);
        setSubmitError(err.message);
      });
  };

  const inputWrapperClass = classNames(styles.inputWrapper, {
    [styles.error]:
      isError && !data.email.isValid && data.email.value.length > 0,
    [styles.success]:
      !isError && data.email.isValid && data.email.value.length > 0,
  });

  return (
    <div className={styles.container}>
      <BackgroundImage
        fluid={background.childImageSharp.fluid}
        className={styles.background}
      >
        <div className={styles.block}>
          <div className={styles.title}>
            <RichText render={title.raw} />
          </div>
          <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
            {!isSubmitted ? (
              <Fragment>
                <label className={inputWrapperClass}>
                  <input type="hidden" name="u" value="11" />
                  <input type="hidden" name="f" value="11" />
                  <input type="hidden" name="s" />
                  <input type="hidden" name="c" value="0" />
                  <input type="hidden" name="m" value="0" />
                  <input type="hidden" name="act" value="sub" />
                  <input type="hidden" name="v" value="2" />
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
                  {submitError && isValidEmail(data.email.value) && (
                    <span className={styles.networkErrorMessage}>
                      {`${submitError}. Please, try again later`}
                    </span>
                  )}
                </label>

                <div className={styles.button}>
                  <Button
                    variant={VARIANT.PRIMARY}
                    type="submit"
                    element="button"
                    fullWidth
                  >
                    {RichText.asText(buttonText.raw)}
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
