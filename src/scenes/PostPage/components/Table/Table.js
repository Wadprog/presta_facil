import React from 'react';
import { any } from 'prop-types';
import { parseString } from '@helpers';
import style from './Table.module.scss';

const mapping = {
  table: 'td',
  table_rows_headers: 'th',
};

const renderTableRows = (rows, rowsType) => {
  const CurrentTag = mapping[rowsType];
  let tableRows = [];
  if (rows && rows.length) {
    tableRows = rows.map((header, index) => {
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
  }
  return tableRows;
};

const renderMobileTable = (rows) => {
  let tableData = [];
  if (rows && rows.length) {
    tableData = rows.map((row) => {
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
  }
  return tableData;
};

// const renderNoData = (data) => {
//   return (
//     data.length === 0 && (
//       <tr>
//         <td>No matching data</td>
//       </tr>
//     )
//   );
// };

const Table = ({ section }) => {
  const { items: tableColsHeaders, slice_type: headersType } = section[0];
  const { items: tableRows, slice_type: rowsType } = section[1];

  return (
    <div className={style.Table}>
      <div className={style.container}>
        <div className={style.tableWrapper}>
          <table className={style.subprocessorsTable}>
            <thead>{renderTableRows(tableColsHeaders, headersType)}</thead>
            <tbody>
              {renderTableRows(tableRows, rowsType)}
              {/* {renderNoData(tableRows)} */}
            </tbody>
          </table>
          <table className={style.mobileTable}>
            <tbody>
              {renderMobileTable(tableRows)}
              {/* {renderNoData(tableRows)} */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

Table.propTypes = {
  section: any,
};

export default Table;
