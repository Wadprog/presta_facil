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
