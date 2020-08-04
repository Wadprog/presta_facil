import React from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';

import style from './Program.module.scss';

const Program = ({ primary, fields }) => {
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
            <ul className={style.list}>
              {fields
                .filter((item) => !item.category)
                .map((item, index) => {
                  return (
                    <div key={index} className={style.item}>
                      <div className={style.card}>
                        <div className={style.icon}>
                          <img src={item.image.url} alt={item.image.alt} />
                        </div>
                        <div className={style.text}>
                          <RichText render={item.text} />
                        </div>
                      </div>
                    </div>
                  );
                })}
            </ul>
          </div>
          <div className={style.divider}></div>
          <div className={style.group}>
            <h3 className={style.subtitle}>Comission</h3>
            <ul className={style.list}>
              {fields
                .filter((item) => item.category)
                .map((item, index) => {
                  return (
                    <div key={index} className={style.item}>
                      <div className={style.card}>
                        <div className={style.icon}>
                          <img src={item.image.url} alt={item.image.alt} />
                        </div>
                        <div className={style.text}>
                          <RichText render={item.text} />
                        </div>
                      </div>
                    </div>
                  );
                })}
            </ul>
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
