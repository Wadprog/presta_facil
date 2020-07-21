import React, { useState } from 'react';
import { array } from 'prop-types';
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

const CONTACT_FORM_URL = process.env.GATSBY_CONTACT_FORM_URL;
const MIN_COUNTER_VALUE = 0;
const MAX_COUNTER_VALUE = 100;

const Form = ({
  button,
  button2,
  company,
  email,
  counter,
  question,
  question2,
}) => {
  const [formState, setFormState] = useState(initialState);
  const [errors, setErrors] = useState([]);
  const handleInputChange = ({ target: { name, value } }) => {
    setFormState((state) => ({ ...state, [name]: value }));
    errors.length > 0 &&
      setErrors([...errors.filter((error) => error != name)]);
  };
  const handleChangeCounter = (value) => {
    if (value >= MIN_COUNTER_VALUE && value <= MAX_COUNTER_VALUE) {
      setFormState((state) => ({ ...state, ['counter']: value }));
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { company, email } = formState;
    if (!errors.includes('email') && !isValidEmail(email)) {
      setErrors([...errors, 'email']);
      return;
    }

    if (!errors.includes('company') && company.length === 0) {
      setErrors([...errors, 'company']);
      return;
    }

    errors.length === 0 &&
      fetch(CONTACT_FORM_URL, {
        method: 'POST',
        headers: {},
        body: new FormData(e.target),
      })
        .then(() => {
          setFormState({
            company: '',
            email: '',
            question: '',
            question2: '',
            counter: 0,
          });
        })
        .catch(() => {});
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
            valid={!errors.includes('company')}
            value={formState.company}
            handleChange={handleInputChange}
          />
          <Input
            id="email"
            placeholder={parseString(email)}
            errorMessage="Wrong email"
            name="email"
            valid={!errors.includes('email')}
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
          <div className={style.buttonWrapper}>
            <Button variant={VARIANT.TRANSPARENT} fullWidth to="/">
              {parseString(button2)}
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

Form.propTypes = {
  button: array,
  button2: array,
  question: array,
  question2: array,
  company: array,
  email: array,
  counter: array,
};

export default Form;
