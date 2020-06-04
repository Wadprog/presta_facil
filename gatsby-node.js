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
                    screenshotSharp {
                      childImageSharp {
                        fluid(quality: 90) {
                          srcWebp
                          srcSetWebp
                          srcSet
                          src
                          sizes
                          presentationWidth
                          aspectRatio
                        }
                      }
                    }
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
                    linktext
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
                    imageSharp {
                      childImageSharp {
                        fluid(quality: 90) {
                          srcWebp
                          srcSetWebp
                          srcSet
                          src
                          sizes
                          presentationWidth
                          aspectRatio
                        }
                      }
                    }
                    title
                  }
                  primary {
                    title
                    button
                  }
                }
                ... on PRISMIC_SolutionpageBodyPlans {
                  type
                  label
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
        allLayouts {
          edges {
            node {
              body2 {
                ... on PRISMIC_LayoutBody2Agencies {
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
                          aspectRatio
                        }
                      }
                    }
                  }
                }
                ... on PRISMIC_LayoutBody2Plans {
                  type
                  label
                  fields {
                    image
                    type
                    cardtitle
                    description
                    benefits
                    button
                    buttonprice
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

  const mainSection = response.data.prismic.allLayouts.edges;

  solutionPage.forEach((item) => {
    const path = `/solution/${item._meta.uid}`;
    const context = {
      current: item,
      data: solutionPage,
      mainSection: mainSection,
    };

    createPage({
      path,
      component: require.resolve(`./src/templates/Solution/Solution.js`),
      context,
    });
  });
};
