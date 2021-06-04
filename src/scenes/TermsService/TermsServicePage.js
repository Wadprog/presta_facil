import React from 'react';
import PropTypes from 'prop-types';

import style from './TermsService.module.scss';
import Text from './components/Text/Text';
import Table from './components/Table/Table';
import { dateToString, parseString } from '@helpers';

const renderPageContent = (body) => {
  const content = body.map((data) => {
    return data.type === 'text' ? (
      <Text {...data} />
    ) : (
      <Table fields={data.fields} />
    );
  });

  return content;
};

const TermsServicePage = ({ current }) => {
  const { body, pagetitle, date } = current;

  return (
    <div className={style.page}>
      <div className={style.container}>
        <div className={style.wrapper}>
          <div className={style.date}>{dateToString(date)}</div>
        </div>
        <h1 className={style.title}>{parseString(pagetitle)}</h1>
        {renderPageContent(body)}
      </div>
    </div>
  );
};

TermsServicePage.propTypes = {
  current: PropTypes.object.isRequired,
};

export default TermsServicePage;
