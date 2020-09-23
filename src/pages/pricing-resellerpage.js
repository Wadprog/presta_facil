import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '@components/Layout';
import ResellerPage from '@scenes/ResellerPage';

const Page = ({ data }) => {
  const resellerpageContent = data.prismic.allPricesresellerpages.edges[0];
  if (!resellerpageContent) return null;
  const resellerpage = resellerpageContent.node;

  return (
    <Layout activeDocMeta={resellerpage._meta}>
      <ResellerPage content={data} />
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($lang: String) {
    prismic {
      allPricesresellerpages(lang: $lang) {
        edges {
          node {
            _meta {
              uid
              type
              lang
              alternateLanguages {
                lang
                type
                uid
              }
            }
            body {
              ... on PRISMIC_PricesresellerpageBodyHero {
                type
                label
                primary {
                  title
                  description
                  buttonlink
                  buttontext
                  modalvideo {
                    ... on PRISMIC__ExternalLink {
                      _linkType
                      target
                      url
                    }
                  }
                }
                fields {
                  partnerslogo
                }
              }
              ... on PRISMIC_PricesresellerpageBodyJoin {
                type
                label
                primary {
                  title
                  description
                  cardtitle
                  carddescription
                  cardsubtitle
                  cardsubdescription
                  buttontext
                  buttonlink
                  numberofdomains
                  unitcost
                }
              }
              ... on PRISMIC_PricesresellerpageBodyProgram {
                type
                label
                primary {
                  title
                  description
                }
                fields {
                  category
                  text
                  image
                }
              }
              ... on PRISMIC_PricesresellerpageBodyTestimonials {
                type
                label
                primary {
                  title
                  subtitle
                  buttontext
                  buttontextshort
                  buttonlink
                  image
                }
                fields {
                  author
                  text
                }
              }
              ... on PRISMIC_PricesresellerpageBodyBook {
                type
                label
                primary {
                  title
                  subtitle
                  buttontext
                  buttonlink
                  image
                  imageSharp {
                    childImageSharp {
                      fluid {
                        ...GatsbyImageSharpFluid_withWebp
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
  }
`;

export default Page;
