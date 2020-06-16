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
            }
          }
        }
      }
    }
  `);

  const solutionPage = response.data.prismic.allSolutionpages.edges.map(
    ({ node }) => node
  );

  solutionPage.forEach((item) => {
    const path = `/solution/${item._meta.uid}`;
    const context = {
      uid: `${item._meta.uid}`,
      current: item,
      data: solutionPage,
    };

    createPage({
      path,
      component: require.resolve(`./src/templates/Solution/Solution.js`),
      context,
    });
  });

  solutionPage.forEach((item) => {
    const path = `/law/${item._meta.uid}`;
    const context = {
      uid: `${item._meta.uid}`,
      current: item,
      data: solutionPage,
    };

    createPage({
      path,
      component: require.resolve(`./src/templates/Law/Law.js`),
      context,
    });
  });
};
