import React from 'react';
import PropTypes from 'prop-types';
import style from './PublicScannerPage.module.scss';
import IframeResizer from 'iframe-resizer-react';

const ThankyouPage = ({ content }) => {
  const { link } = content;

  return (
    <div aria-label={link.text} className={style.thankyouPage}>
      <div className={style.container}>
        <IframeResizer
          src="https://test-scanner.secureprivacy.ai/"
          inPageLinks
          style={{
            width: '1px',
            minWidth: '100%',
            minHeight: '100%',
          }}
          frameBorder="no"
          checkOrigin="false"
          heightCalculationMethod="max"
          scrolling={false}
        />
      </div>
    </div>
  );
};

ThankyouPage.propTypes = {
  content: PropTypes.object.isRequired,
};

export default ThankyouPage;
