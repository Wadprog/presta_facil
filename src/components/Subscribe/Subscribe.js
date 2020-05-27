import React, { useState, Fragment } from 'react';
import classNames from 'classnames';
import styles from './Subscribe.module.scss';
import { isValidEmail } from '@helpers';
import Button, { VARIANT } from '@components/Button/Button.js';
const Subscribe = () => {
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
          <h2>
            <strong>Sign up to our newsletter </strong>
            <br />
            and get the latest news on data privacy
          </h2>
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
                <Button variant={VARIANT.PRIMARY}>Send</Button>
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

export default Subscribe;
