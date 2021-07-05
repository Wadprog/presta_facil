import React from 'react';
import PropTypes from 'prop-types';

import style from './Legal.module.scss';
import Text from './components/Text/Text';
import { dateToString } from '@helpers';

const LegalPage = ({ content, title, date }) => {
  const text = content.find((data) => data.slice_type === 'text');

  return (
    <div className={style.page}>
      <div className={style.container}>
        <div className={style.wrapper}>
          <div className={style.date}>{dateToString(date)}</div>
        </div>
        <h1 className={style.title}>{title.text}</h1>
        <Text {...text} />
      </div>
    </div>
  );
};

LegalPage.propTypes = {
  content: PropTypes.array.isRequired,
  title: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired,
};

export default LegalPage;
