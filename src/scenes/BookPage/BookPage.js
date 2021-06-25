import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { isValidEmail } from '@helpers';
import style from './BookPage.module.scss';
import Button, { VARIANT } from '@components/Button/Button.js';
import Image from '@components/Image/Image';

const BookPage = ({ content }) => {
  const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    consent: true,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [submitError, setSubmitError] = useState(null);
  const initialFormErrors = [];
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const submitFormUrl = process.env.GATSBY_DOWNLOAD_BOOK_FORM_URL;

  const {
    booktitle: bookPageTitle,
    bookdescription: bookPageDescription,
    consenttext: consentText,
    buttontext: buttonText,
    bookimage: bookImage,
    bookurl: bookPageUrl,
  } = content;
  const { dimensions } = bookImage;

  const validateForm = () => {
    const { firstName, lastName, email } = formData;
    const errors = [];

    if (!firstName.trim()) {
      errors.push('firstName');
    }
    if (!lastName.trim()) {
      errors.push('lastName');
    }
    if (!isValidEmail(email)) {
      errors.push('email');
    }

    setFormErrors(errors);
    return errors.length === 0;
  };

  const firstNameRef = useRef('firstName');
  const { current: firstNameCurrent } = firstNameRef;

  const lastNameRef = useRef('lastName');
  const { current: lastNameCurrent } = lastNameRef;

  const emailRef = useRef('emailName');
  const { current: emailCurrent } = emailRef;

  const firstNameInputClasses = classnames({
    [style.formInput]: !formErrors.includes(firstNameCurrent.id),
    [style.formInputError]: formErrors.includes(firstNameCurrent.id),
    [style.formInputFilled]: formData.firstName.trim() !== '',
  });

  const lastNameInputClasses = classnames({
    [style.formInput]: !formErrors.includes(lastNameCurrent.id),
    [style.formInputError]: formErrors.includes(lastNameCurrent.id),
    [style.formInputFilled]: formData.lastName.trim() !== '',
  });

  const emailInputClasses = classnames({
    [style.formInput]: !formErrors.includes(emailCurrent.id),
    [style.formInputError]: formErrors.includes(emailCurrent.id),
    [style.formInputFilled]: formData.email.trim() !== '',
  });

  const handleInputChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleConsentChange = ({ target: { name } }) => {
    const { consent: newsConsent } = formData;
    setFormData({ ...formData, [name]: !newsConsent });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(initialFormErrors);
    setSubmitError(null);
    const isValidForm = validateForm();
    if (isValidForm) {
      fetch(submitFormUrl, {
        method: 'POST',
        headers: {},
        body: new FormData(e.target),
      })
        .then(() => {
          setFormData(initialFormData);
          window.location.href = bookPageUrl.text;
        })
        .catch((err) => {
          setSubmitError(err);
        });
    }
  };

  return (
    <section className={style.bookPage}>
      <div className={style.container}>
        <Image
          className={style.bookImage}
          image={bookImage}
          fluid={bookImage.fluid}
        />
        <div className={style.formGroup}>
          <h1 className={style.bookPageTitle}>{bookPageTitle.text}</h1>
          <p className={style.bookPageDescription}>
            {bookPageDescription.text}
          </p>
          <form className={style.form} onSubmit={handleSubmit}>
            <div className={style.formUserNames}>
              <div className={style.formInputWrapper}>
                <input
                  width={dimensions.width}
                  height={dimensions.height}
                  id="firstName"
                  name="firstName"
                  className={firstNameInputClasses}
                  type="text"
                  placeholder="First name"
                  onChange={handleInputChange}
                  ref={firstNameRef}
                />
                <span className={style.requiredMark}></span>
                <label className={style.label} htmlFor="firstName">
                  First name
                </label>
              </div>
              <div className={style.formInputWrapper}>
                <input
                  id="lastName"
                  name="lastName"
                  className={lastNameInputClasses}
                  type="text"
                  placeholder="Last name"
                  onChange={handleInputChange}
                  ref={lastNameRef}
                />
                <span className={style.requiredMark}></span>
                <label className={style.label} htmlFor="lastName">
                  Last name
                </label>
              </div>
            </div>
            <div className={style.formInputWrapper}>
              <input
                id="email"
                name="email"
                type="email"
                className={emailInputClasses}
                placeholder="Your email"
                onChange={handleInputChange}
                ref={emailRef}
              />
              <span className={style.requiredMark}></span>
              <label className={style.label} htmlFor="email">
                email
              </label>
            </div>
            <div className={style.checkboxWrapper}>
              <input
                type="checkbox"
                id="consent"
                name="consent"
                checked={formData.consent}
                onChange={handleConsentChange}
              />
              <label htmlFor="consent" className={style.checkboxLabel}>
                {consentText.text}
              </label>
            </div>
            <div className={style.buttonWrapper}>
              <Button
                variant={VARIANT.PRIMARY}
                className={style.button}
                element="button"
                type="submit"
                fullWidth
              >
                {buttonText.text}
              </Button>
            </div>
            {formErrors.length > 0 && (
              <div className={style.errorMessage}>
                Please, check highlighted fields and try again!
              </div>
            )}
            {submitError && (
              <div className={style.errorMessage}>
                {`${submitError.message}. Please, try again later!`}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

BookPage.propTypes = {
  content: PropTypes.object.isRequired,
};

export default BookPage;
