import React from 'react';
import PropTypes from 'prop-types';

import style from './Legal.module.scss';
import Text from './components/Text/Text';
import { dateToString, parseString } from '@helpers';

const LegalPage = ({ current }) => {
  const { body, title, date } = current;

  const text = body.find((data) => data.type === 'text');
  if (!text) return null;

  return (
    <div className={style.page}>
      <div className={style.container}>
        <div className={style.wrapper}>
          <div className={style.date}>{dateToString(date)}</div>
        </div>
        <div className={style.title}>{parseString(title)}</div>
        <Text {...text} />
      </div>
    </div>
  );
};

LegalPage.propTypes = {
  current: PropTypes.object.isRequired,
};

export default LegalPage;
