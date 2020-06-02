import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Header from '@components/Header';
import Footer from '@components/Footer';

import styles from './Layout.module.scss';
import '@styles/index.scss';

const Layout = ({ children, data }) => {
  const header = data.prismic.allLayouts.edges[0].node.body[0];
  const footer = data.prismic.allLayouts.edges[0].node.body1[0];
  return (
    <>
      <div className={styles.container}>
        <Header {...header} />
        <main className={styles.main} id="main">
          {children}
        </main>
        <Footer {...footer} />
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

const LayoutWithData = (props) => {
  return (
    <StaticQuery
      query={`${query}`}
      render={(data) => <Layout data={data} {...props} />}
    />
  );
};

LayoutWithData.propTypes = {
  children: PropTypes.node,
};

export default LayoutWithData;
