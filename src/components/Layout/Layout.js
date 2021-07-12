import React from 'react';
import { bool, object, node, array, oneOfType } from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import LangContext from '@contexts';
import { defaultLanguage } from '@/prismic-config';
import Head from '@components/Head';
import Header from '@components/Header';
import Footer from '@components/Footer';

import styles from './Layout.module.scss';
import '@styles/index.scss';

const Layout = ({
  children,
  data,
  hideMenu,
  activeDocMeta,
  canonical,
  metatitle,
  metadescription,
  questions,
}) => {
  const currentLang = activeDocMeta ? activeDocMeta.lang : defaultLanguage;
  const edge = data.allPrismicLayout.edges.filter(
    (edge) => edge.node.lang === currentLang
  );

  const headerData = edge[0].node.data.body;
  const footerData = edge[0].node.data.body1;

  return (
    <LangContext.Provider
      value={currentLang === defaultLanguage ? '' : currentLang.slice(0, 2)}
    >
      <div className={styles.container}>
        <Head
          canonical={canonical}
          metatitle={metatitle}
          metadescription={metadescription}
          questions={questions}
        />
        <Header data={headerData} hideMenu={hideMenu} />
        <main className={styles.main} id="main">
          {children}
        </main>
        <Footer activeDocMeta={activeDocMeta} data={footerData} />
      </div>
    </LangContext.Provider>
  );
};

Layout.propTypes = {
  children: node,
  data: object,
  hideMenu: bool,
  activeDocMeta: object,
  canonical: oneOfType([object, array]),
  metatitle: oneOfType([object, array]),
  metadescription: oneOfType([object, array]),
  questions: array,
};

const LayoutWithData = (props) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allPrismicLayout {
            edges {
              node {
                alternate_languages {
                  uid
                  type
                  lang
                }
                lang
                type
                id
                url
                data {
                  body {
                    ... on PrismicLayoutBodyHeader {
                      id
                      slice_type
                      slice_label
                      primary {
                        slogan {
                          text
                        }
                        buttontext {
                          text
                        }
                        logo {
                          alt
                          url
                        }
                        buttonlink {
                          text
                        }
                        signinlink {
                          link_type
                          url
                        }
                      }
                    }
                    ... on PrismicLayoutBodyMenu {
                      id
                      slice_label
                      slice_type
                      primary {
                        title {
                          text
                        }
                      }
                      items {
                        image {
                          alt
                          url
                        }
                        link {
                          text
                        }
                        name {
                          text
                        }
                        externallink {
                          link_type
                          url
                        }
                      }
                    }
                  }
                  body1 {
                    ... on PrismicLayoutBody1Footer {
                      id
                      slice_label
                      slice_type
                      primary {
                        buttontitle {
                          raw
                        }
                        buttontext {
                          text
                        }
                        buttonlink {
                          text
                        }
                        copyright {
                          text
                        }
                        logo {
                          alt
                          url
                        }
                        logotext {
                          text
                        }
                        logolink {
                          link_type
                          url
                        }
                      }
                      items {
                        socialogo {
                          alt
                          url
                        }
                        sociallink {
                          link_type
                          url
                        }
                      }
                    }
                    ... on PrismicLayoutBody1Menu {
                      id
                      slice_label
                      slice_type
                      items {
                        name {
                          text
                        }
                        pagename {
                          text
                        }
                        externallink {
                          link_type
                          url
                        }
                      }
                      primary {
                        title {
                          text
                        }
                      }
                    }
                    ... on PrismicLayoutBody1Books {
                      id
                      slice_type
                      slice_label
                      items {
                        image {
                          alt
                          url
                        }
                      }
                      primary {
                        title {
                          raw
                        }
                      }
                    }
                    ... on PrismicLayoutBody1Badges {
                      id
                      slice_label
                      slice_type
                      items {
                        badge {
                          alt
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
      `}
      render={(data) => <Layout data={data} {...props} />}
    />
  );
};

LayoutWithData.propTypes = {
  children: node,
};

export default LayoutWithData;
