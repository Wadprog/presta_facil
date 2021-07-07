import React from 'react';
import PropTypes from 'prop-types';

import style from './TermsService.module.scss';
import Text from './components/Text/Text';
import Table from './components/Table/Table';
import { dateToString } from '@helpers';

const renderPageContent = (body) => {
  const content = body.map((data) => {
    return data.slice_type === 'text' ? (
      <Text {...data} />
    ) : (
      <Table fields={data.items} />
    );
  });

  return content;
};

const TermsServicePage = ({ pageContent, pageTitle, date }) => {
  return (
    <div className={style.page}>
      <div className={style.container}>
        <div className={style.wrapper}>
          <div className={style.date}>{dateToString(date)}</div>
        </div>
        <h1 className={style.title}>{pageTitle.text}</h1>
        {renderPageContent(pageContent)}
      </div>
    </div>
  );
};

TermsServicePage.propTypes = {
  pageContent: PropTypes.array.isRequired,
  pageTitle: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired,
};

export default TermsServicePage;
