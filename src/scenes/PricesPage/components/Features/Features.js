import React from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import classnames from 'classnames';

import { parseCellValue } from './utils';
import style from './Features.module.scss';

const Features = ({ primary, fields, isPremium }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.title}>
        <RichText render={primary.title} />
      </div>
      <ul className={style.list}>
        {fields.map((item, index) => {
          const basicStatus = parseCellValue(RichText.asText(item.basicstatus));
          const premiumStatus = parseCellValue(
            RichText.asText(item.premiumstatus),
            { withGradient: true }
          );

          return (
            <li key={index} className={style.item}>
              <div className={style.name}>
                <RichText render={item.name} />
              </div>
              <div
                className={classnames(style.cell, {
                  [style.disabled]: isPremium,
                })}
              >
                {basicStatus}
              </div>
              <div
                className={classnames(style.cell, {
                  [style.disabled]: !isPremium,
                })}
              >
                {premiumStatus}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Features.propTypes = {
  primary: PropTypes.object.isRequired,
  fields: PropTypes.array.isRequired,
  isPremium: PropTypes.bool.isRequired,
};

export default Features;
