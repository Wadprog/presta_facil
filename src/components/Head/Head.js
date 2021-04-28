import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import { parseString } from '@helpers';

const Head = ({ children, meta, canonical, metatitle, metadescription }) => {
  const [zenDeskWidgetScript, setZenDeskWidgetScript] = useState(null);
  const [secureprivacyScript, setSecureprivacyScript] = useState(null);
  const [canonicalUrl, setCanonicalUrl] = useState(null);
  const [pageTitle, setPageTitle] = useState(null);
  const [pageDescription, setPageDescription] = useState(null);

  const loadDelayTime = 5000;
  const url = 'https://secureprivacy.ai/';

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const timer = setTimeout(() => {
        setZenDeskWidgetScript(
          <script
            id="ze-snippet"
            src="https://static.zdassets.com/ekr/snippet.js?key=7c1de950-9031-4521-8e28-c9defa10512b"
            async
          >
            {' '}
          </script>
        );
      }, loadDelayTime);

      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const timer = setTimeout(() => {
        setSecureprivacyScript(
          <script
            type="text/javascript"
            src="https://app.secureprivacy.ai/script/606acb2d5761b5f013b48067.js"
            async
          >
            {' '}
          </script>
        );
      }, loadDelayTime);

      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const currentPageCanonical = parseString(canonical);
    if (currentPageCanonical) {
      setCanonicalUrl(<link rel="canonical" href={currentPageCanonical} />);
    }
  }, []);

  useEffect(() => {
    const currentPageTitle = parseString(metatitle);
    if (currentPageTitle) {
      setPageTitle(<title>{currentPageTitle}</title>);
    }
    if (!currentPageTitle) {
      setPageTitle(<title>{meta.title}</title>);
    }
  }, []);

  useEffect(() => {
    const currentPageDescription = parseString(metadescription);
    if (currentPageDescription) {
      setPageDescription(
        <meta content={currentPageDescription} name="description" />
      );
    }
    if (!currentPageDescription) {
      setPageDescription(
        <meta content={meta.description} name="description" />
      );
    }
  }, []);

  return (
    <Helmet>
      {/* Encoding and styles */}
      <html lang="en" />
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge"></meta>
      <meta
        content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes"
        name="viewport"
      />

      {/* General meta */}

      {canonicalUrl}
      {pageTitle}
      {pageDescription}

      {/* <!-- Twitter meta --> */}
      <meta content="summary" name="twitter:card" />
      <meta content={meta.title} name="twitter:title" />
      <meta content={meta.description} name="twitter:description" />
      <meta content={`${url}images/meta/tile.png`} name="twitter:image" />
      <meta content={url} name="twitter:url" />

      {/* <!-- Facebook meta --> */}
      <meta content={url} property="og:site_name" />
      <meta content={meta.title} property="og:title" />
      <meta content={meta.description} property="og:description" />
      <meta content="website" property="og:type" />
      <meta content={`${url}images/meta/tile.png`} property="og:image" />
      <meta content={url} property="og:url" />
      <meta property="og:locale" content="en_US" />

      {zenDeskWidgetScript}
      {secureprivacyScript}

      {/* Specified tags */}
      {children}
    </Helmet>
  );
};

Head.defaultProps = {
  meta: {
    title: `Secure Privacy: GDPR, CCPA, LGPD & cookie compliance solution`,
    description: `Scan websites for GDPR, CCPA & cookie compliance for free. Add privacy policies & cookie banners to your website in minutes.`,
  },
};

Head.propTypes = {
  children: PropTypes.node,
  meta: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  canonical: PropTypes.array,
  metatitle: PropTypes.array,
  metadescription: PropTypes.array,
};

export default Head;
