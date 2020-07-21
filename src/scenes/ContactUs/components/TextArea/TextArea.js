import React, { memo } from 'react';
import { string, func, oneOfType, number } from 'prop-types';

import style from './TextArea.module.scss';

const TextArea = ({ id, value, name, placeholder, handleChange }) => {
  return (
    <div className={style.container}>
      <textarea
        id={id}
        placeholder={placeholder}
        className={style.textarea}
        onChange={handleChange}
        value={value}
        name={name}
      />
    </div>
  );
};

TextArea.propTypes = {
  id: string,
  placeholder: string,
  handleChange: func,
  value: oneOfType([string, number]),
  name: string,
};

TextArea.defaultProps = {
  id: '',
  placeholder: '',
  handleChange: () => {},
};

export default memo(TextArea);
