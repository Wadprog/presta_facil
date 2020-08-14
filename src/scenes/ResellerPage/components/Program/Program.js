import React from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';

import List from './components/List';
import style from './Program.module.scss';

const Program = ({ primary, fields }) => {
  const benefitsItems = fields.filter((item) => !item.category);
  const comissionItems = fields.filter((item) => item.category);

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.message}>
          <div className={style.title}>
            <RichText render={primary.title} />
          </div>
          <div className={style.description}>
            <RichText render={primary.description} />
          </div>
        </div>
        <div className={style.cards}>
          <div className={style.group}>
            <h3 className={style.subtitle}>Benefits</h3>
            <List items={benefitsItems} />
          </div>
          <div className={style.divider}></div>
          <div className={style.group}>
            <h3 className={style.subtitle}>Comission</h3>
            <List items={comissionItems} />
          </div>
        </div>
      </div>
    </div>
  );
};

Program.propTypes = {
  primary: PropTypes.object.isRequired,
  fields: PropTypes.array.isRequired,
};

export default Program;
