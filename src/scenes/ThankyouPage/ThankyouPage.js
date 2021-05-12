import React from 'react';
import PropTypes from 'prop-types';

import { parseString } from '@helpers';
import Button, { VARIANT } from '@components/Button/Button.js';
import style from './ThankyouPage.module.scss';

const ThankyouPage = ({ content }) => {
  const { title, pagemessage, buttontext, buttonlink } = content;

  return (
    <div className={style.thankyouPage}>
      <div className={style.container}>
        <div className={style.thankyouBoard}>
          <h1 className={style.title}>{parseString(title)}</h1>
          <p className={style.pageMessage}>{parseString(pagemessage)}</p>
          <div className={style.thankyouButtonWrapper}>
            <Button to={parseString(buttonlink)} variant={VARIANT.THANKYOU}>
              {parseString(buttontext)}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

ThankyouPage.propTypes = {
  content: PropTypes.object.isRequired,
};

export default ThankyouPage;
