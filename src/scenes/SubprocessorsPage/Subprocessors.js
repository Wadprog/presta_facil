import React from 'react';
import PropTypes from 'prop-types';

import { parseString } from '@helpers';
import style from './Subprocessors.module.scss';

const mapping = {
  table: 'td',
  table_rows_headers: 'th',
};

const renderTableRows = (rows, rowsType) => {
  const CurrentTag = mapping[rowsType];

  const tableRows = rows.map((header, index) => {
    const tableColsNames = Object.keys(header);
    const cols = tableColsNames.map((colName, index) => (
      <CurrentTag key={`${index}, ${parseString(header[colName])}`}>
        {parseString(header[colName])}
      </CurrentTag>
    ));

    return <tr key={index}>{cols}</tr>;
  });

  return tableRows;
};

const SubprocessorsPage = ({ content }) => {
  const { pagetitle: pageTitle, body } = content;
  const { fields: tableColsHeaders, type: headersType } = body[0];
  const { fields: tableRows, type: rowsType } = body[1];

  return (
    <div className={style.subprocessorsPage}>
      <div className={style.container}>
        <h1 className={style.title}>{parseString(pageTitle)}</h1>
        <div className={style.tableWrapper}>
          <table className={style.subprocessorsTable}>
            <thead>{renderTableRows(tableColsHeaders, headersType)}</thead>
            <tbody>{renderTableRows(tableRows, rowsType)}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

SubprocessorsPage.propTypes = {
  content: PropTypes.object.isRequired,
};

export default SubprocessorsPage;
