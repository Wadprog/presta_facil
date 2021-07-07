import React from 'react';
import PropTypes from 'prop-types';

import style from './PrivacyPolicyPage.module.scss';

const PrivacyPolicyPage = ({ pageTitle }) => {
  return (
    <section className={style.PrivacyPolicyPage}>
      <div className={style.container}>
        <h1 className={style.header}>{pageTitle.text}</h1>
        <div sp-privacy-policy-text="direct-text" sp-lang-code="en"></div>
      </div>
    </section>
  );
};

PrivacyPolicyPage.propTypes = {
  pageTitle: PropTypes.object.isRequired,
};

export default PrivacyPolicyPage;
