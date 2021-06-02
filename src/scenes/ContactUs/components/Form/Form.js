import React, { useState } from 'react';
import PropTypes from 'prop-types';
import style from './Form.module.scss';
import Button, { VARIANT } from '@components/Button/Button.js';
import Input from '../Input/Input';
import TextArea from '../TextArea/TextArea';
import Counter from '../Counter/Counter';
import { parseString, isValidEmail } from '@helpers';

const initialState = {
  company: '',
  email: '',
  question: '',
  question2: '',
  counter: 0,
};

const errors = { email: 'email', company: 'company' };

const CONTACT_FORM_URL = process.env.GATSBY_CONTACT_FORM_URL;
const MIN_COUNTER_VALUE = 0;
const MAX_COUNTER_VALUE = 100;

const getUserEmailProvider = (mail) => {
  const splitted = mail.split('@');
  const provider = splitted[1];

  return provider;
};

const Form = ({
  button,
  company,
  email,
  counter,
  question,
  question2,
  successinformer,
  body,
}) => {
  const successInformerText = parseString(successinformer);
  const [formState, setFormState] = useState(initialState);
  const [formErrors, setFormErrors] = useState([]);
  const [isSubmitted, setSubmited] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const providersData = body.find((element) => element.type === 'providers');
  const { fields: rawProviders } = providersData;
  const providers = rawProviders.map(({ provider }) => parseString(provider));

  const handleInputChange = ({ target: { name, value } }) => {
    setFormState((state) => ({ ...state, [name]: value }));
    formErrors.length > 0 &&
      setFormErrors([...formErrors.filter((error) => error != name)]);
  };

  const handleChangeCounter = (value) => {
    if (value >= MIN_COUNTER_VALUE && value <= MAX_COUNTER_VALUE) {
      setFormState((state) => ({ ...state, ['counter']: value }));
    }
  };

  const handleCloseInformer = (informerType) => {
    const mapping = {
      successInformer: setSubmited(false),
      errorInformer: setSubmitError(null),
    };

    return mapping[informerType];
  };

  const isValidForm = (companyName, userEmail) => {
    const userEmailProvider = getUserEmailProvider(userEmail);

    const isValidCompany = companyName && companyName.trim() !== '';
    const isValidUserEmail =
      isValidEmail(userEmail) && !providers.includes(userEmailProvider);

    if (!isValidCompany) {
      setFormErrors([...formErrors, errors.company]);
    }

    if (!isValidUserEmail) {
      setFormErrors([...formErrors, errors.email]);
    }

    const validForm = isValidCompany && isValidUserEmail;

    return validForm;
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { company, email } = formState;

    isValidForm(company, email) &&
      fetch(CONTACT_FORM_URL, {
        method: 'POST',
        headers: {},
        body: new FormData(e.target),
      })
        .then(() => {
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
  };

  return (
    <form className={style.form} onSubmit={handleOnSubmit}>
      <div className={style.container}>
        <div className={style.row}>
          <Input
            id="company"
            placeholder={parseString(company)}
            errorMessage="Required field"
            name="company"
            valid={!formErrors.includes('company')}
            value={formState.company}
            handleChange={handleInputChange}
          />
          <Input
            id="email"
            placeholder={parseString(email)}
            errorMessage="Wrong or non-business email"
            name="email"
            valid={!formErrors.includes('email')}
            value={formState.email}
            handleChange={handleInputChange}
          />
        </div>
        <div className={style.row}>
          <TextArea
            id="question"
            placeholder={parseString(question)}
            name="question"
            value={formState.question}
            handleChange={handleInputChange}
          />
        </div>
        <div className={style.row}>
          <Counter
            label={parseString(counter)}
            value={formState.counter}
            handleChange={handleChangeCounter}
          />
        </div>
        <div className={style.row}>
          <TextArea
            id="question2"
            placeholder={parseString(question2)}
            name="question2"
            value={formState.question2}
            handleChange={handleInputChange}
          />
        </div>
        <div className={style.buttonRow}>
          <div className={style.buttonWrapper}>
            <Button
              variant={VARIANT.PRIMARY}
              fullWidth
              element="button"
              type="submit"
            >
              {parseString(button)}
            </Button>
          </div>
        </div>
      </div>
      {isSubmitted && (
        <button
          className={style.successInformer}
          onClick={() => handleCloseInformer('successInformer')}
        >
          {successInformerText}
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
  );
};

Form.propTypes = {
  button: PropTypes.array,
  button2: PropTypes.array,
  question: PropTypes.array,
  question2: PropTypes.array,
  company: PropTypes.array,
  email: PropTypes.array,
  counter: PropTypes.array,
  successinformer: PropTypes.array,
  body: PropTypes.array,
};

export default Form;
