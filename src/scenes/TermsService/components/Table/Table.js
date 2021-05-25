import React from 'react';
import { array } from 'prop-types';

import { parseString } from '@helpers';
import style from './Table.module.scss';

const renderTableRows = (rows) => {
  const tableRows = rows.map((header, index) => {
    const tableValues = Object.values(header);
    const cols = tableValues.map((value, index) => (
      <td className={style.tableCell} key={`${index}, ${parseString(value)}`}>
        {parseString(value)}
      </td>
    ));

    return (
      <tr className={style.tableRow} key={index}>
        {cols}
      </tr>
    );
  });

  return tableRows;
};

const Table = ({ fields }) => {
  return (
    <div className={style.tableWrapper}>
      <table className={style.table}>
        <tbody>{fields && renderTableRows(fields)}</tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  fields: array,
};

export default Table;
