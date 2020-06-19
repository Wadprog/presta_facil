import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { withPreview } from 'gatsby-source-prismic-graphql';
import PropTypes from 'prop-types';

import HomePage from '../scenes/HomePage';
import Layout from '@components/Layout';

const Page = ({ data }) => {
  return (
    <Layout>
      <HomePage content={data} />
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
    <StaticQuery
      query={`${query}`}
      render={withPreview(
        (data) => (
          <Page data={data} />
        ),
        query
      )}
    />
  );
};

export default PageWithData;
