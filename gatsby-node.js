/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
var fs = require('fs');
var dir = './.cache/caches/gatsby-source-prismic-graphql';

exports.onPreBootstrap = () => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const response = await graphql(`
    query {
      prismic {
        allSolutionpages {
          edges {
            node {
              _linkType
              _meta {
                uid
              }
              body {
                ... on PRISMIC_SolutionpageBodyHero {
                  type
                  label
                  fields {
                    partnerslogo
                  }
                  primary {
                    modalvideo {
                      ... on PRISMIC__ExternalLink {
                        url
                        _linkType
                      }
                    }
                    buttontext
                    description
                    flag
                    title
                  }
                }
                ... on PRISMIC_SolutionpageBodyProjects {
                  type
                  label
                  fields {
                    description
                    link {
                      ... on PRISMIC__ExternalLink {
                        url
                      }
                    }
                    screenshot
                    title
                  }
                  primary {
                    title
                  }
                }
                ... on PRISMIC_SolutionpageBodyQuestions {
                  type
                  label
                  fields {
                    link {
                      ... on PRISMIC__ExternalLink {
                        _linkType
                        url
                      }
                    }
                    scan
                    title
                    content
                  }
                  primary {
                    title
                  }
                }
                ... on PRISMIC_SolutionpageBodyBenefits {
                  type
                  label
                  fields {
                    image
                    text
                  }
                  primary {
                    title
                    button
                  }
                }
                ... on PRISMIC_SolutionpageBodyFeatures {
                  type
                  label
                  fields {
                    description
                    image
                    title
                  }
                  primary {
                    title
                  }
                }
                ... on PRISMIC_SolutionpageBodyBooking {
                  type
                  label
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
  `);

  const solutionPage = response.data.prismic.allSolutionpages.edges.map(
    ({ node }) => node
  );

  solutionPage.forEach((item, index) => {
    const path = `/solution/${item._meta.uid}`;
    const context = {
      current: item,
      data: solutionPage,
    };

    createPage({
      path,
      component: require.resolve(`./src/templates/Solution/Solution.js`),
      context,
    });
  });
};
