import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '@components/Layout';

const NotFoundPage = ({ data }) => {
  return (
    <Layout data={data}>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
};

NotFoundPage.propTypes = {
  data: PropTypes.object.isRequired,
};
const query = graphql`
  {
    prismic {
      allLayouts {
        edges {
          node {
            body {
              ... on PRISMIC_LayoutBodyHeader {
                type
                label
                primary {
                  slogan
                  buttontext
                  logo
                }
              }
            }
            body1 {
              ... on PRISMIC_LayoutBody1Footer {
                type
                label
                primary {
                  buttontitle
                  buttontext
                  bookstitle
                  copyright
                }
                fields {
                  socialogo
                  sociallink {
                    ... on PRISMIC__ExternalLink {
                      _linkType
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

const PageWithData = () => {
  return (
    <StaticQuery
      query={`${query}`}
      render={(data) => <NotFoundPage data={data} />}
    />
  );
};

export default PageWithData;
