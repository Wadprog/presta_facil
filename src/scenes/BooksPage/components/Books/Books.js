import React from 'react';
import { array } from 'prop-types';
import style from './Books.module.scss';

const Books = ({ fields }) => {
  return (
    <div className={style.page}>
      <div className={style.container}>
        {fields.map(({ downloadlink }) => (
          <div className={style.book} key={downloadlink.url}>
            <div className={style.wrapper}>
              <div className={style.header}>
                <div className={style.title}>What is LGPD</div>
                <div className={style.subtitle}>
                  and how to make your website compliant
                </div>
              </div>
              <div className={style.footer}>
                <div className={style.desc}>
                  Learn about the LGPD and how to become compliant
                </div>
              </div>
              <div className={style.download}>Download</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Books.propTypes = {
  fields: array,
};

export default Books;
