import React, { useState, Fragment } from 'react';
import classNames from 'classnames';
import styles from './Subscribe.module.scss';
import { RichText } from 'prismic-reactjs';
import { object } from 'prop-types';
import { isValidEmail } from '@helpers';
import Button, { VARIANT } from '@components/Button/Button.js';
const Subscribe = ({ primary }) => {
  const [data, setData] = useState({
    email: {
      value: '',
      isValid: false,
    },
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      <div className={styles.block}>
        <div className={styles.title}>
          <RichText render={primary.title} />
        </div>
        <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
          {!isSubmitted ? (
            <Fragment>
              <div className={inputWrapperClass}>
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
              </div>
              <div className={styles.button}>
                <Button variant={VARIANT.PRIMARY} type="submit">
                  {RichText.asText(primary.buttontext)}
                </Button>
              </div>
            </Fragment>
          ) : (
            <p>Thanx !!</p>
          )}
        </form>
      </div>
      <span className={styles.smPlanet}></span>
    </div>
  );
};

Subscribe.propTypes = {
  primary: object,
};

export default Subscribe;
