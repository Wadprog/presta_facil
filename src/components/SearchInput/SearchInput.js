import React from 'react';
import { func, object } from 'prop-types';

import style from './SearchInput.module.scss';

const SearchInput = ({ onChange, placeholder }) => {
  return (
    <div className={style.container}>
      <input
        className={style.search}
        type="search"
        placeholder={placeholder.text}
        onChange={onChange}
      />
    </div>
  );
};

SearchInput.propTypes = {
  onChange: func,
  placeholder: object,
};

SearchInput.defaultProps = {
  onChange: () => {},
  placeholder: {},
};

export default SearchInput;
