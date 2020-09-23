import React from 'react';
import { bool, object, node } from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { withPreview } from 'gatsby-source-prismic-graphql';

import Head from '@components/Head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import LanguageSwitcher from '@components/LanguageSwitcher';

import styles from './Layout.module.scss';
import '@styles/index.scss';

const Layout = ({ children, data, hideMenu, activeDocMeta }) => {
  const headerData = data.prismic.allLayouts.edges[0].node.body;
  const footerData = data.prismic.allLayouts.edges[0].node.body1;
  return (
    <>
      <Head />
      <div className={styles.container}>
        <LanguageSwitcher activeDocMeta={activeDocMeta} />
        <Header
          data={headerData}
          hideMenu={hideMenu}
          activeDocMeta={activeDocMeta}
        />
        <main className={styles.main} id="main">
          {children}
        </main>
        <Footer data={footerData} />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: node,
  data: object,
  hideMenu: bool,
  activeDocMeta: object,
};
const query = graphql`
  query($lang: String) {
    prismic {
      allLayouts(lang: $lang) {
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
                  signinlink {
                    ... on PRISMIC__ExternalLink {
                      _linkType
                      url
                    }
                  }
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
                  copyright
                  logo
                  logotext
                  logolink {
                    ... on PRISMIC__ExternalLink {
                      _linkType
                      url
                    }
                  }
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
                  externallink {
                    ... on PRISMIC__ExternalLink {
                      _linkType
                      url
                    }
                  }
                }
                primary {
                  title
                }
              }
              ... on PRISMIC_LayoutBody1Books {
                type
                label
                fields {
                  image
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
  children: node,
};

export default LayoutWithData;
