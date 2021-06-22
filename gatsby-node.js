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

const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const thankyouPages = await graphql(`
    {
      allPrismicThankyoupage {
        nodes {
          id
          uid
          lang
          type
          url
        }
      }
    }
  `);

  thankyouPages.data.allPrismicThankyoupage.nodes.forEach((page) => {
    createPage({
      path: page.url,
      component: path.resolve(__dirname, 'src/templates/ThankyouPage.js'),
      context: { ...page },
    });
  });
};
