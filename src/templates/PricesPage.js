import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '@components/Layout';
import PricesPage from '@scenes/PricesPage';

const Page = ({ data }) => {
  const pricespageContent = data.allPrismicPricespage.edges[0];
  if (!pricespageContent) return null;
  const pricespage = pricespageContent.node;
  const {
    uid,
    id,
    type,
    alternate_languages,
    lang,
    data: pageData,
  } = pricespage;
  const activeDocMeta = { id, uid, lang, type, alternate_languages };
  const { metatitle, metadescription, canonical, body: pageContent } = pageData;

  return (
    <Layout
      activeDocMeta={activeDocMeta}
      metatitle={metatitle}
      metadescription={metadescription}
      canonical={canonical}
    >
      <PricesPage
        content={pageContent}
        metatitle={metatitle}
        canonical={canonical}
      />
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($uid: String, $lang: String) {
    allPrismicPricespage(filter: { uid: { eq: $uid }, lang: { eq: $lang } }) {
      edges {
        node {
          uid
          type
          lang
          id
          alternate_languages {
            id
            lang
            type
            uid
          }
          data {
            metatitle {
              text
            }
            metadescription {
              text
            }
            canonical {
              text
            }
            body {
              ... on PrismicPricespageDataBodyHero {
                id
                slice_type
                primary {
                  subtitle {
                    richText
                  }
                  title {
                    richText
                  }
                }
              }
              ... on PrismicPricespageDataBodyPartners {
                id
                slice_type
                primary {
                  title {
                    richText
                  }
                }
                items {
                  logotype {
                    alt
                    url
                  }
                }
              }
              ... on PrismicPricespageDataBodyQuestions {
                id
                slice_type
                primary {
                  title {
                    richText
                  }
                }
                items {
                  title {
                    richText
                  }
                  link {
                    link_type
                    url
                  }
                  content {
                    richText
                  }
                }
              }

              ... on PrismicPricespageDataBodyWidgetSliderWithPlans {
                id
                slice_type
                items {
                  law_image {
                    alt
                    url
                  }
                  law_text {
                    richText
                  }
                }
              }
              ... on PrismicPricespageDataBodyContactus {
                id
                slice_type
                primary {
                  subtitle {
                    richText
                  }
                  buttontext {
                    richText
                  }
                  buttonlink {
                    richText
                  }
                }
              }
              ... on PrismicPricespageDataBodyPackagesfeatures {
                id
                slice_type
                primary {
                  title {
                    richText
                  }
                }
                items {
                  prostatus {
                    richText
                  }
                  featuretitle {
                    richText
                  }
                  enterprisestatus {
                    richText
                  }
                  businessstatus {
                    richText
                  }
                }
              }
              ... on PrismicPricespageDataBodyTariffplans {
                id
                slice_type
                primary {
                  monthlyperiodtogglelabel {
                    text
                  }
                  anualperiodtogglelabel {
                    richText
                    text
                  }
                  currencydropdownlabel {
                    text
                  }
                  enterprisecondition {
                    text
                  }
                  enterprisebuttontext {
                    text
                  }
                  enterprisebuttonlink {
                    url
                  }
                  annualcoefficient
                  annualcondition {
                    richText
                  }
                  buttonbaselink {
                    link_type
                    url
                  }
                  buttontext {
                    richText
                  }
                  firstlawlocation {
                    text
                  }
                  firstlawtitle {
                    text
                  }
                  monthlycondition {
                    richText
                  }
                  secondlawlocation {
                    text
                  }
                  secondlawtitle {
                    text
                  }
                  thirdlawlocation {
                    text
                  }
                  thirdlawtitle {
                    text
                  }
                }
                items {
                  oneprivacypriceeur
                  oneprivacypriceusd
                  threeprivacypriceeur
                  threeprivacypriceusd
                  twoprivacypriceeur
                  twoprivacypriceusd
                  plantitle {
                    richText
                  }
                  plandescription {
                    richText
                  }
                  plan_benefits {
                    richText
                  }
                  bottom_clarification {
                    richText
                  }
                  check_features_on_card {
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
`;

export default Page;
