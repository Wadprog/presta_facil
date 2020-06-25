import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { withPreview } from 'gatsby-source-prismic-graphql';

import Header from '@components/Header';
import Footer from '@components/Footer';

import styles from './Layout.module.scss';
import '@styles/index.scss';

const Layout = ({ children, data }) => {
  const headerData = data.prismic.allLayouts.edges[0].node.body;
  const footerData = data.prismic.allLayouts.edges[0].node.body1;

  return (
    <>
      <div className={styles.container}>
        <Header data={headerData} />
        <main className={styles.main} id="main">
          {children}
        </main>
        <Footer data={footerData} />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
  data: PropTypes.object,
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
                  buttonlink
                }
              }
              ... on PRISMIC_LayoutBodyMenu {
                type
                label
                primary {
                  title
                }
                fields {
                  image
                  link
                  name
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
                  buttonlink
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
              ... on PRISMIC_LayoutBody1Menu {
                type
                label
                fields {
                  name
                  pagename
                }
                primary {
                  title
                }
              }
            }
          }
        }
      }
    }
  }
`;

const LayoutWithData = (props) => {
  return (
    <StaticQuery
      query={`${query}`}
      render={withPreview(
        (data) => (
          <Layout data={data} {...props} />
        ),
        query
      )}
    />
  );
};

LayoutWithData.propTypes = {
  children: PropTypes.node,
};

export default LayoutWithData;
