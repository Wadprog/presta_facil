import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import TagManager from 'react-gtm-module'

const Head = ({ children, meta }) => {
  const url = `https://secureprivacy.ai/`;
  const [zenDeskWidgetScript, setZenDeskWidgetScript] = useState(null);
  const loadDelayTime = 5000;
  const tagManagerArgs = {
    gtmId: 'GTM-WNNNKBK'
  }
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

  return (
    <Helmet>
      {/* Encoding and styles */}
      <html lang="en" />
      <script type="text/javascript" src="https://app.secureprivacy.ai/script/606acb2d5761b5f013b48067.js" />
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge"></meta>
      <meta
        content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes"
        name="viewport"
      />

      {/* General meta */}
      <meta content={meta.description} name="description" />
      <meta content={meta.title} name="author" />

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

      <title>{meta.title}</title>

      {
        TagManager.initialize(tagManagerArgs)
      }

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
};

export default Head;
