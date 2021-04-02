import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const Head = ({ children, meta }) => {
  const url = `https://secureprivacy.ai/`;

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

      {/* <!-- Start of secureprivacy Zendesk Widget optimization script --> */}
      <script type="text/javascript">
        {
          (window.zESettings = {
            webWidget: {
              chat: {
                connectOnPageLoad: false,
              },
            },
          })
        }
      </script>
      {/* <!-- End of secureprivacy Zendesk Widget optimization script --> */}

      <title>{meta.title}</title>

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
