import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { BreadcrumbJsonLd } from 'gatsby-plugin-next-seo';

const BreadcrumbsSemanticMarkup = ({
  pageUrl,
  pageTitle,
  baseItemName,
  baseItemUrl,
}) => {
  const [breadcrumbs, setBreadcrumbs] = useState(null);

  useEffect(() => {
    let breadcrumbItems;

    if (!baseItemName) {
      breadcrumbItems = [
        {
          position: 1,
          name: pageTitle,
          item: pageUrl,
        },
      ];
    } else {
      breadcrumbItems = [
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
      ];
    }

    setBreadcrumbs(breadcrumbItems);
  }, []);

  return breadcrumbs && <BreadcrumbJsonLd itemListElements={breadcrumbs} />;
};

BreadcrumbsSemanticMarkup.propTypes = {
  pageUrl: PropTypes.string.isRequired,
  pageTitle: PropTypes.string.isRequired,
  baseItemName: PropTypes.string,
  baseItemUrl: PropTypes.string,
};

export default BreadcrumbsSemanticMarkup;
