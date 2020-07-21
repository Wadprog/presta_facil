import React, { useState } from 'react';
import { array } from 'prop-types';
import style from './Form.module.scss';
import Button, { VARIANT } from '@components/Button/Button.js';
import Input from '../Input/Input';
import TextArea from '../TextArea/TextArea';
import Counter from '../Counter/Counter';
import { parseString } from '@helpers';

const initialState = {
  company: '',
  email: '',
  question: '',
  question2: ',',
  counter: 0,
  isSubmitted: false,
};

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
  const handleInputChange = ({ target: { name, value } }) => {
    setFormState((state) => ({ ...state, [name]: value }));
  };
  const handleChangeCounter = (value) => {
    if (value >= 0 && value <= 100) {
      setFormState((state) => ({ ...state, ['counter']: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className={style.form}>
      <div className={style.container}>
        <div className={style.row}>
          <Input
            id="company"
            placeholder={parseString(company)}
            errorMessage="Required field"
            name="company"
            value={formState.company}
            handleChange={handleInputChange}
          />
          <Input
            id="email"
            placeholder={parseString(email)}
            errorMessage="Wrong email"
            name="email"
            value={formState.email}
            handleChange={handleInputChange}
          />
        </div>
        <div className={style.row}>
          <TextArea
            id="question"
            placeholder={parseString(question)}
            name="question"
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
          />
        </div>
        <div className={style.buttonRow}>
          <div className={style.buttonWrapper}>
            <Button
              variant={VARIANT.PRIMARY}
              fullWidth
              element="button"
              click={handleSubmit}
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
