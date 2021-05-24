import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { parseString } from '@helpers';
import style from './Subprocessors.module.scss';
import SearchInput from '@components/SearchInput/SearchInput';

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

const renderMobileTable = (rows) => {
  const tableData = rows.map((row) => {
    const tableValues = Object.values(row);
    return tableValues.map((value, index) => (
      <tr key={`${index}, ${value}`}>
        <td key={`${index}, ${parseString(value)}`}>{parseString(value)}</td>
      </tr>
    ));
  });

  return tableData;
};

const filterTableData = (data, searchInfo) => {
  if (!searchInfo) {
    return data;
  }

  const filteredTableData = data.filter((row) => {
    const rowValues = Object.values(row);
    const parsedValues = rowValues.map((value) => parseString(value));

    for (const value of parsedValues) {
      const content = value.toLowerCase();
      if (content.includes(searchInfo)) {
        return true;
      }
    }
    return false;
  });

  return filteredTableData;
};

const renderNoData = (data) => {
  return (
    data.length === 0 && (
      <tr>
        <td>No matching data</td>
      </tr>
    )
  );
};

const SubprocessorsPage = ({ content }) => {
  const { pagetitle: pageTitle, body } = content;
  const { fields: tableColsHeaders, type: headersType } = body[0];
  const { fields: tableRows, type: rowsType } = body[1];
  const [tableData, setTableData] = useState(tableRows);
  const [search, setSearch] = useState(null);

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm.toLowerCase());
  };

  useEffect(() => {
    const newData = filterTableData(tableRows, search);
    setTableData(newData);
  }, [search]);

  return (
    <div className={style.subprocessorsPage}>
      <div className={style.container}>
        <h1 className={style.title}>{parseString(pageTitle)}</h1>
        <div className={style.tableWrapper}>
          <div className={style.searchInputWrapper}>
            <SearchInput onChange={handleInputChange} />
          </div>
          <table className={style.subprocessorsTable}>
            <thead>{renderTableRows(tableColsHeaders, headersType)}</thead>
            <tbody>
              {renderTableRows(tableData, rowsType)}
              {renderNoData(tableData)}
            </tbody>
          </table>
          <table className={style.mobileTable}>
            <tbody>
              {renderMobileTable(tableData)}
              {renderNoData(tableData)}
            </tbody>
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
