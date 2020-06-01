import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import HomePage from '../scenes/HomePage';
import Layout from '@components/Layout';

const Page = ({ data }) => {
  return (
    <Layout>
      <HomePage data={data} />
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.object.isRequired,
};

const query = graphql`
  {
    prismic {
      allHomepages {
        edges {
          node {
            body {
              ... on PRISMIC_HomepageBodyHero1 {
                type
                label
                primary {
                  sub_title
                  title
                  description
                  button
                  mainImage
                  mainImageSharp {
                    childImageSharp {
                      fluid(maxWidth: 500, quality: 90) {
                        srcWebp
                        srcSetWebp
                        srcSet
                        src
                        sizes
                        presentationWidth
                        presentationHeight
                        aspectRatio
                      }
                    }
                  }
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
                }
              }
              ... on PRISMIC_HomepageBodyFeatures {
                type
                label
                fields {
                  image
                  text
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
                  screenshotSharp {
                    childImageSharp {
                      fluid(maxHeight: 336, quality: 90) {
                        srcWebp
                        srcSetWebp
                        srcSet
                        src
                        sizes
                        presentationWidth
                        presentationHeight
                        aspectRatio
                      }
                    }
                  }
                  name
                  tag
                  category
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
                  type
                  imageSharp {
                    childImageSharp {
                      fluid(maxHeight: 48, quality: 90) {
                        srcWebp
                        srcSetWebp
                        srcSet
                        src
                        sizes
                        presentationWidth
                        presentationHeight
                        aspectRatio
                      }
                    }
                  }
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
                  imageSharp {
                    childImageSharp {
                      fluid(quality: 90) {
                        srcWebp
                        srcSetWebp
                        srcSet
                        src
                        sizes
                        presentationWidth
                        presentationHeight
                        aspectRatio
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

const PageWithData = () => {
  return (
    <StaticQuery query={`${query}`} render={(data) => <Page data={data} />} />
  );
};

export default PageWithData;
