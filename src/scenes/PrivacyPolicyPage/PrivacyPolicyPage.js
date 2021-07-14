import React from 'react';
import PropTypes from 'prop-types';

import BreadcrumbsSemanticMarkup from '@components/BreadcrumbsMarkup/BreadcrumbsMarkup';
import style from './PrivacyPolicyPage.module.scss';

const PrivacyPolicyPage = ({ pageTitle, canonical }) => {
  return (
    <section className={style.PrivacyPolicyPage}>
      <div className={style.container}>
        <h1 className={style.header}>{pageTitle.text}</h1>
        <div sp-privacy-policy-text="direct-text" sp-lang-code="en"></div>
        <BreadcrumbsSemanticMarkup
          pageTitle={pageTitle.text}
          pageUrl={canonical.text}
        />
      </div>
    </section>
  );
};

PrivacyPolicyPage.propTypes = {
  pageTitle: PropTypes.object.isRequired,
  canonical: PropTypes.object.isRequired,
};

export default PrivacyPolicyPage;
