import React from 'react';
import PropTypes from 'prop-types';

import Button, { VARIANT } from '@components/Button/Button.js';
import style from './ThankyouPage.module.scss';

const ThankyouPage = ({ content }) => {
  const { title, pagemessage, buttontext, buttonlink } = content;

  return (
    <div className={style.thankyouPage}>
      <div className={style.container}>
        <div className={style.thankyouBoard}>
          <h1 className={style.title}>{title.text}</h1>
          <p className={style.pageMessage}>{pagemessage.text}</p>
          <div className={style.thankyouButtonWrapper}>
            <Button to={buttonlink.text} variant={VARIANT.THANKYOU}>
              {buttontext.text}
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
