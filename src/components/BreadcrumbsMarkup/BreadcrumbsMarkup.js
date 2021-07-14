import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { BreadcrumbJsonLd } from 'gatsby-plugin-next-seo';

const BreadcrumbsSemanticMarkup = ({
  pageUrl,
  pageTitle,
  baseItemName,
  baseItemUrl,
}) => {
  const [breadcrumbsMarkup, setBreadcrumbsMarkup] = useState(null);

  useEffect(() => {
    const markup = (
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: baseItemName,
            item: baseItemUrl,
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
  baseItemName: PropTypes.string.isRequired,
  baseItemUrl: PropTypes.string.isRequired,
};

export default BreadcrumbsSemanticMarkup;
