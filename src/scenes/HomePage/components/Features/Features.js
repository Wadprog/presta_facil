import React from 'react';
import { RichText } from 'prismic-reactjs';
import { object, array } from 'prop-types';
import style from './Features.module.scss';
import Item from './components/Item';

const Features = ({ primary, fields }) => {
  return (
    <div className={style.features}>
      <div className={style.container}>
        <div className={style.title}>
          <RichText render={primary.title} />
        </div>
        <div className={style.descr}>
          <RichText render={primary.description} />
        </div>
        <div className={style.list}>
          {fields.map((item, index) => {
            return <Item {...item} key={`Features${index}`} />;
          })}
        </div>
      </div>
    </div>
  );
};

Features.propTypes = {
  primary: object,
  fields: array,
};

export default Features;
