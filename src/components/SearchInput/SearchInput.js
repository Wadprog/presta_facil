import React from 'react';
import { func } from 'prop-types';

import style from './SearchInput.module.scss';

const SearchInput = ({ onChange }) => {
  return (
    <div className={style.container}>
      <input
        className={style.search}
        type="search"
        placeholder="Search"
        onChange={onChange}
      />
    </div>
  );
};

SearchInput.propTypes = {
  onChange: func,
};

SearchInput.defaultProps = {
  onChange: () => {},
};

export default SearchInput;
