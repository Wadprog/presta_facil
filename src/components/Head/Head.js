import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const Head = ({ children, meta, canonical, metatitle, metadescription }) => {
  const url = 'https://secureprivacy.ai/';

  const [canonicalUrl, setCanonicalUrl] = useState(null);
  const [pageTitle, setPageTitle] = useState(null);
  const [pageDescription, setPageDescription] = useState(null);
  const [opengraphUrl, setOpengrapUrl] = useState(url);
  const [opengraphTitle, setOpengraphTitle] = useState(meta.title);
  const [opengraphDescription, setOpengraphDescription] = useState(
    meta.description
  );

  useEffect(() => {
    const currentPageCanonical = canonical.text;
    if (currentPageCanonical) {
      setCanonicalUrl(<link rel="canonical" href={currentPageCanonical} />);
      setOpengrapUrl(currentPageCanonical);
    } else {
      setCanonicalUrl(<link rel="canonical" href={url} />);
    }
  }, []);

  useEffect(() => {
    const currentPageTitle = metatitle.text;
    if (currentPageTitle) {
      setPageTitle(<title>{currentPageTitle}</title>);
      setOpengraphTitle(currentPageTitle);
    }
    if (!currentPageTitle) {
      setPageTitle(<title>{meta.title}</title>);
    }
  }, []);

  useEffect(() => {
    const currentPageDescription = metadescription.text;
    if (currentPageDescription) {
      setPageDescription(
        <meta content={currentPageDescription} name="description" />
      );
      setOpengraphDescription(currentPageDescription);
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
      <script
        type="text/javascript"
        src="https://app.secureprivacy.ai/script/606acb2d5761b5f013b48067.js"
      ></script>
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
      <meta content={opengraphTitle} name="twitter:title" />
      <meta content={opengraphDescription} name="twitter:description" />
      <meta content={`${url}images/meta/tile.png`} name="twitter:image" />
      <meta content={opengraphUrl} name="twitter:url" />

      {/* <!-- Facebook meta --> */}
      <meta content={url} property="og:site_name" />
      <meta content={opengraphTitle} property="og:title" />
      <meta content={opengraphDescription} property="og:description" />
      <meta content="website" property="og:type" />
      <meta content={`${url}images/meta/tile.png`} property="og:image" />
      <meta content={opengraphUrl} property="og:url" />
      <meta property="og:locale" content="en_US" />

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
  canonical: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  metatitle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  metadescription: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default Head;
