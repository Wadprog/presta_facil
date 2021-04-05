import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import HomePage from '@scenes/HomePage';

const Page = ({ data }) => {
  return <HomePage content={data} />;
};

Page.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($lang: String) {
    prismic {
      allHomepages(lang: $lang) {
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
              ... on PRISMIC_HomepageBodyHero1 {
                type
                label
                primary {
                  sub_title
                  title
                  description
                  button
                  buttonlink
                  buttonsecondary
                  buttonsecondarylink
                  mainImage
                  trusted
                  modalbuttontitle
                  modalbuttondescription
                  modalvideo {
                    ... on PRISMIC__ExternalLink {
                      _linkType
                      url
                    }
                  }
                }
                fields {
                  trustedlogo
                }
              }
              ... on PRISMIC_HomepageBodyTestimonials {
                type
                label
                fields {
                  photo
                  name
                  company
                  text
                }
              }
              ... on PRISMIC_HomepageBodySolutions {
                type
                label
                primary {
                  description
                  title
                }
                fields {
                  image
                  title
                  text
                  pagename
                }
              }
              ... on PRISMIC_HomepageBodyTechnologies {
                type
                label
                primary {
                  title
                  description
                }
                fields {
                  image
                  name
                  pagename
                }
              }
              ... on PRISMIC_HomepageBodyFeatures {
                type
                label
                fields {
                  image
                  text
                  pagename
                  title
                }
                primary {
                  title
                  description
                }
              }
              ... on PRISMIC_HomepageBodyWorks {
                type
                label
                fields {
                  screenshot
                  name
                  tag
                  category
                  link {
                    ... on PRISMIC__ExternalLink {
                      _linkType
                      url
                    }
                  }
                }
                primary {
                  title
                  dropdownlable
                  categories
                }
              }
              ... on PRISMIC_HomepageBodyPlans {
                type
                label
                fields {
                  image
                  cardtitle
                  description
                  benefits
                  button
                  buttonprice
                  buttonlink {
                    ... on PRISMIC__ExternalLink {
                      _linkType
                      url
                    }
                  }
                  type
                }
                primary {
                  title
                }
              }
              ... on PRISMIC_HomepageBodyArticles {
                type
                label
                primary {
                  title
                  buttontext
                }
              }
              ... on PRISMIC_HomepageBodySubscribe {
                type
                label
                primary {
                  title
                  buttontext
                }
              }
              ... on PRISMIC_HomepageBodyAgencies {
                type
                label
                primary {
                  title
                  description
                  buttontext
                  image
                  page
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
