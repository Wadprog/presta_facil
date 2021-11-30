import React from 'react';
import PropTypes from 'prop-types';
import style from './PublicScannerPage.module.scss';

const ThankyouPage = ({ content }) => {
  const { link } = content;

  return (
    <div aria-label={link.text} className={style.thankyouPage}>
      <div className={style.container}>
        <iframe
          src="https:spscanneruiv2.z6.web.core.windows.net/"
          frameBorder="0"
          style="overflow:hidden;height:100%;width:100%"
          height="100%"
          width="100%"
        ></iframe>
      </div>
    </div>
  );
};

ThankyouPage.propTypes = {
  content: PropTypes.object.isRequired,
};

export default ThankyouPage;
