import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import SearchInput from '@components/SearchInput/SearchInput';
import BreadcrumbsSemanticMarkup from '@components/BreadcrumbsMarkup/BreadcrumbsMarkup';
import { parseString } from '@helpers';
import style from './Subprocessors.module.scss';

const mapping = {
  table: 'td',
  table_rows_headers: 'th',
};

const renderTableRows = (rows, rowsType) => {
  const CurrentTag = mapping[rowsType];

  const tableRows = rows.map((header, index) => {
    const tableValues = Object.values(header);
    const cols = tableValues.map((value, index) => (
      <CurrentTag
        className={style.tableCell}
        key={`${index}, ${parseString(value.richText)}`}
      >
        {parseString(value.richText)}
      </CurrentTag>
    ));

    return (
      <tr className={style.tableRow} key={index}>
        {cols}
      </tr>
    );
  });

  return tableRows;
};

const renderMobileTable = (rows) => {
  const tableData = rows.map((row) => {
    const tableValues = Object.values(row);
    return tableValues.map((value, index) => (
      <tr className={style.tableRow} key={`${index}, ${value}`}>
        <td
          className={style.tableCell}
          key={`${index}, ${parseString(value.richText)}`}
        >
          {parseString(value.richText)}
        </td>
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
    const parsedValues = rowValues.map((value) => parseString(value.richText));

    for (const value of parsedValues) {
      const content = value.toLowerCase();
      if (content.includes(searchInfo.trim())) {
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

const SubprocessorsPage = ({ content, canonical, metatitle, placeholder }) => {
  const { pagetitle: pageTitle, body } = content;
  const { items: tableColsHeaders, slice_type: headersType } = body[0];
  const { items: tableRows, slice_type: rowsType } = body[1];
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

  useEffect(() => {
    console.log(body);
  }, []);

  return (
    <div className={style.subprocessorsPage}>
      <div className={style.container}>
        <h1 className={style.title}>{pageTitle.text}</h1>
        <div className={style.tableWrapper}>
          <div className={style.searchInputWrapper}>
            <SearchInput
              onChange={handleInputChange}
              placeholder={placeholder}
            />
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
        <BreadcrumbsSemanticMarkup
          pageTitle={metatitle.text}
          pageUrl={canonical.text}
        />
      </div>
    </div>
  );
};

SubprocessorsPage.propTypes = {
  content: PropTypes.object.isRequired,
  canonical: PropTypes.object.isRequired,
  metatitle: PropTypes.object.isRequired,
  placeholder: PropTypes.object.isRequired,
};

export default SubprocessorsPage;
