import React from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';

import style from './List.module.scss';

const List = ({ items }) => {
  return (
    <ul className={style.container}>
      {items.map((item, index) => {
        return (
          <div key={index} className={style.item}>
            <div className={style.card}>
              <div className={style.icon}>
                <img src={item.image.url} alt={item.image.alt} loading="lazy" />
              </div>
              <div className={style.text}>
                <RichText render={item.text} />
              </div>
            </div>
          </div>
        );
      })}
    </ul>
  );
};

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.object.isRequired,
      text: PropTypes.array.isRequired,
    }).isRequired
  ).isRequired,
};

export default List;
