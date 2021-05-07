import React from 'react';
import PropTypes from 'prop-types';

import style from './PrivacyPolicyPage.module.scss';

const PrivacyPolicyPage = () => {
  return (
    <section className={style.PrivacyPolicyPage}>
      <div className={style.container}>
        <div sp-privacy-policy-text="direct-text" sp-lang-code="en"></div>
      </div>
    </section>
  );
};

PrivacyPolicyPage.propTypes = {
  content: PropTypes.object.isRequired,
};

export default PrivacyPolicyPage;
