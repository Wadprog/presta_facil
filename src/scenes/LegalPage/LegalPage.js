import React from 'react';
import PropTypes from 'prop-types';

import Text from './components/Text/Text';
import BreadcrumbsSemanticMarkup from '@components/BreadcrumbsMarkup/BreadcrumbsMarkup';
import { dateToString } from '@helpers';
import style from './Legal.module.scss';

const LegalPage = ({ content, title, date, canonical }) => {
  const text = content.find((data) => data.slice_type === 'text');

  return (
    <div className={style.page}>
      <div className={style.container}>
        <div className={style.wrapper}>
          <div className={style.date}>{dateToString(date)}</div>
        </div>
        <h1 className={style.title}>{title.text}</h1>
        <Text {...text} />
        <BreadcrumbsSemanticMarkup
          pageTitle={title.text}
          pageUrl={canonical.text}
        />
      </div>
    </div>
  );
};

LegalPage.propTypes = {
  content: PropTypes.array.isRequired,
  title: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired,
  canonical: PropTypes.object.isRequired,
};

export default LegalPage;
