import React from 'react';
import { bool, object, node, array, oneOfType } from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import linkResolver from '../../../prismic/utils/linkResolver';

import LangContext from '@contexts';
import { defaultLanguage } from '@/prismic-config';
import Head from '@components/Head';
import Header from '@components/Header';
import Footer from '@components/Footer';

import HomePage from '../../templates/Home';

import styles from './Layout.module.scss';
import '@styles/index.scss';
import {
  PrismicPreviewProvider,
  componentResolverFromMap,
} from 'gatsby-plugin-prismic-previews';

const Layout = ({
  children,
  data,
  hideMenu,
  activeDocMeta,
  canonical,
  metatitle,
  metadescription,
}) => {
  const currentLang = activeDocMeta ? activeDocMeta.lang : defaultLanguage;
  const edge = data.allPrismicLayout.edges.filter(
    (edge) => edge.node.lang === currentLang
  );

  const headerData = edge[0].node.data.body;
  const footerData = edge[0].node.data.body1;

  return (
    <PrismicPreviewProvider
      repositoryConfigs={[
        {
          repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
          linkResolver,
          componentResolver: componentResolverFromMap({
            home: HomePage,
          }),
        },
      ]}
    >
      <LangContext.Provider
        value={currentLang === defaultLanguage ? '' : currentLang.slice(0, 2)}
      >
        <div className={styles.container}>
          <Head
            canonical={canonical}
            metatitle={metatitle}
            metadescription={metadescription}
          />
          <Header data={headerData} hideMenu={hideMenu} />
          <main className={styles.main} id="main">
            {children}
          </main>
          <Footer activeDocMeta={activeDocMeta} data={footerData} />
        </div>
      </LangContext.Provider>
    </PrismicPreviewProvider>
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
};

const LayoutWithData = (props) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allPrismicLayout {
            edges {
              node {
                lang
                type
                prismicId
                id
                alternate_languages {
                  id
                  lang
                  uid
                  type
                }
                data {
                  body {
                    ... on PrismicLayoutDataBodyHeader {
                      id
                      slice_type
                      primary {
                        slogan {
                          text
                        }
                        signinlink {
                          link_type
                          url
                        }
                        buttontext {
                          text
                        }
                        buttonlink {
                          text
                        }
                        logo {
                          alt
                          url
                          gatsbyImageData(
                            layout: CONSTRAINED
                            placeholder: BLURRED
                          )
                        }
                      }
                    }
                    ... on PrismicLayoutDataBodyMenu {
                      id
                      slice_type
                      primary {
                        title {
                          text
                        }
                      }
                      items {
                        name {
                          text
                        }
                        link {
                          text
                        }
                        externallink {
                          link_type
                          url
                        }
                        image {
                          alt
                          url
                        }
                      }
                    }
                  }
                  body1 {
                    ... on PrismicLayoutDataBody1Badges {
                      id
                      slice_type
                      items {
                        badge {
                          alt
                          url
                        }
                      }
                    }
                    ... on PrismicLayoutDataBody1Books {
                      id
                      slice_type
                      primary {
                        title {
                          richText
                        }
                      }
                      items {
                        image {
                          alt
                          url
                        }
                      }
                    }
                    ... on PrismicLayoutDataBody1Footer {
                      id
                      slice_type
                      primary {
                        buttonlink {
                          text
                        }
                        buttontext {
                          text
                        }
                        buttontitle {
                          richText
                        }
                        copyright {
                          text
                        }
                        logo {
                          alt
                          url
                        }
                        logolink {
                          link_type
                          url
                        }
                        logotext {
                          text
                        }
                      }
                      items {
                        sociallink {
                          link_type
                          url
                        }
                        socialogo {
                          alt
                          url
                        }
                      }
                    }
                    ... on PrismicLayoutDataBody1Menu {
                      id
                      slice_type
                      primary {
                        title {
                          text
                        }
                      }
                      items {
                        externallink {
                          link_type
                          url
                        }
                        name {
                          text
                        }
                        pagename {
                          text
                        }
                      }
                    }
                  }
                  body2 {
                    ... on PrismicLayoutDataBody2Agencies {
                      id
                      slice_type
                      primary {
                        title {
                          richText
                        }
                        page {
                          text
                        }
                        link {
                          link_type
                          url
                        }
                        image {
                          alt
                          url
                        }
                        description {
                          richText
                        }
                        buttontext {
                          richText
                        }
                      }
                    }
                    ... on PrismicLayoutDataBody2Plans {
                      id
                      slice_type
                      items {
                        type
                        image {
                          alt
                          url
                        }
                        description {
                          richText
                        }
                        cardtitle {
                          richText
                        }
                        buttonprice {
                          richText
                        }
                        buttonlink {
                          link_type
                          url
                        }
                        button {
                          richText
                        }
                        benefits {
                          richText
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
