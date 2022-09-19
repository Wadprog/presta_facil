import React, { useState } from 'react';
import PropTypes from 'prop-types';
import style from './Form.module.scss';
import Button, { VARIANT } from '@components/Button/Button.js';
import Input from '../Input/Input';
import { isValidEmail } from '@helpers';
import { RichText } from 'prismic-reactjs';

const initialState = {
  company: '',
  email: '',
  your_name: '',
  phoneNumber: '',
};

const errors = { email: 'email' };

const CONTACT_FORM_URL = `https://test.secureprivacy.ai/api/email`;

const Form = ({ content }) => {
  const {
    successinformer,
    company_name,
    your_name,
    your_company_email,
    wrong_email,
    receive_report,
    bottom_text,
    phone_nr_to_contact_you,
    nearly_there,
  } = content;
  const [formState, setFormState] = useState(initialState);
  const [formErrors, setFormErrors] = useState([]);
  const [isSubmitted, setSubmited] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleInputChange = ({ target: { name, value } }) => {
    setFormState((state) => ({ ...state, [name]: value }));
    formErrors.length > 0 &&
      setFormErrors([...formErrors.filter((error) => error != name)]);
  };

  const handleCloseInformer = (informerType) => {
    const mapping = {
      successInformer: setSubmited(false),
      errorInformer: setSubmitError(null),
    };

    return mapping[informerType];
  };

  const validateForm = (userEmail) => {
    const isValidUserEmail = userEmail ? isValidEmail(userEmail) : true;
    if (!isValidUserEmail) {
      setFormErrors([...formErrors, errors.email]);
    }

    const validForm = isValidUserEmail;

    return validForm;
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { company, email, your_name, phoneNumber } = formState;
    const isValidForm = validateForm(email);
    if (!company && !your_name && !phoneNumber) {
      window.open(window.localStorage.getItem('scan'), '_self');
    }
    if (isValidForm && company && your_name && phoneNumber) {
      fetch(CONTACT_FORM_URL, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          To: 'hello@secureprivacy.ai',
          Subject: 'Secure Privacy - landing page CTA',
          Body: `"<div style="font-family: Arial, Helvetica, sans-serif; font-size:10pt;">\n<h3>Hello secureprivacy, this email was sent by ${email} or someone from his organization to receive more info about secureprivacy</h3>\n\n<p>\n<b>Name: ${your_name}</b>\n<br />\n\n</p>\n\n\n<p>\n<b>Company: ${company}</b>\n<br />\n\n</p>\n\n\n<p>\n<b>Phone Number: ${phoneNumber}</b>\n<br />\n\n</p>\n<p>\nThank you, <br />\nSecure Privacy Team<br />\nSupport Email: <a href="mailto:hello@secureprivacy.ai" target="_blank"> support@secureprivacy.ai </a><br />\n<a href="https://secureprivacy.ai/" target="_blank">https://secureprivacy.ai/ </a><br />\n</p><br />\n</div>\n"`,
        }),
      })
        .then(() => {
          window.open(window.localStorage.getItem('scan'), '_self');

          if (submitError) {
            setSubmitError(null);
          }
          setSubmited(true);
          setFormState(initialState);
        })
        .catch((err) => {
          if (isSubmitted) {
            setSubmited(null);
          }
          setSubmitError(err);
        });
    }
  };

  return (
    <>
      <div className={style.nearlyThere}>
        <RichText
          render={nearly_there.richText}
          className={`${style.nearlyThere}`}
        />
      </div>
      <form className={style.form} onSubmit={handleOnSubmit}>
        <div className={style.container}>
          <div className={style.row}>
            <Input
              id="your_name"
              placeholder={RichText.asText(your_name.richText)}
              name="your_name"
              valid={!formErrors.includes('your_name')}
              value={formState.your_name}
              handleChange={handleInputChange}
            />
            <Input
              id="company"
              placeholder={RichText.asText(company_name.richText)}
              name="company"
              valid={!formErrors.includes('company')}
              value={formState.company}
              handleChange={handleInputChange}
            />
            <Input
              id="email"
              placeholder={RichText.asText(your_company_email.richText)}
              errorMessage={RichText.asText(wrong_email.richText)}
              name="email"
              valid={!formErrors.includes('email')}
              value={formState.email}
              handleChange={handleInputChange}
            />
            <Input
              id="phoneNumber"
              placeholder={RichText.asText(phone_nr_to_contact_you.richText)}
              name="phoneNumber"
              value={formState.phoneNumber}
              handleChange={handleInputChange}
              valid={!formErrors.includes('phoneNumber')}
            />
          </div>
          <div className={style.row}>
            <RichText
              render={bottom_text.richText}
              className={`${style.bottomText}`}
            />
          </div>
          <div className={style.buttonRow}>
            <div className={style.buttonWrapper}>
              <Button
                variant={VARIANT.PRIMARY}
                fullWidth={true}
                element="button"
                type="submit"
              >
                {RichText.asText(receive_report.richText)}
              </Button>
            </div>
          </div>
        </div>
        {isSubmitted && (
          <button
            className={style.successInformer}
            onClick={() => handleCloseInformer('successInformer')}
          >
            {RichText.asText(successinformer.richText)}
          </button>
        )}
        {submitError && (
          <button
            className={style.errorInformer}
            onClick={() => handleCloseInformer('errorInformer')}
          >
            {`${submitError.message}. Please, try later`}
          </button>
        )}
      </form>
    </>
  );
};

Form.propTypes = {
  content: PropTypes.object,
};

export default Form;
