import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { BreadcrumbJsonLd } from 'gatsby-plugin-next-seo';

const BreadcrumbsSemanticMarkup = ({ pageUrl, pageTitle }) => {
  const [breadcrumbsMarkup, setBreadcrumbsMarkup] = useState(null);
  const blogName = 'Blog';
  const blogUrl = 'https://secureprivacy.ai/blog';

  useEffect(() => {
    const markup = (
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: blogName,
            item: blogUrl,
          },
          {
            position: 2,
            name: pageTitle,
            item: pageUrl,
          },
        ]}
      />
    );

    setBreadcrumbsMarkup(markup);
  }, []);

  return breadcrumbsMarkup;
};

BreadcrumbsSemanticMarkup.propTypes = {
  pageUrl: PropTypes.string.isRequired,
  pageTitle: PropTypes.string.isRequired,
};

export default BreadcrumbsSemanticMarkup;
