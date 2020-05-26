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
                  trusted
                  modalbuttontitle
                  modalbuttondescription
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
