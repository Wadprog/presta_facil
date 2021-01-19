import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import style from './StatusBar.module.scss';

const getPoints = (total) => {
  let points = [];
  for (let i = 0; i < total; i++) {
    points.push(i);
  }
  return points;
};

const StatusBar = ({ active, total, setActive }) => {
  const points = getPoints(total);
  return (
    <div className={style.container}>
      <ul className={style.list}>
        {points.map((item, index) => (
          <li
            className={classnames(style.item, {
              [style.iteminactive]: item !== active,
              [style.itemactive]: item === active,
            })}
            onClick={() => setActive(index)}
            key={item}
          ></li>
        ))}
      </ul>
    </div>
  );
};

StatusBar.propTypes = {
  active: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  setActive: PropTypes.func.isRequired,
};

export default StatusBar;
