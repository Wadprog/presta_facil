var fs = require('fs');
var dir = './.cache/caches/gatsby-source-prismic';

exports.onPreBootstrap = () => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
};

const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const homepage = await graphql(`
    {
      allPrismicHomepage {
        nodes {
          id
          lang
          type
          url
        }
      }
    }
  `);

  homepage.data.allPrismicHomepage.nodes.forEach((page) => {
    createPage({
      path: page.url,
      component: path.resolve(__dirname, 'src/templates/Home.js'),
      context: { ...page },
    });
  });

  const bookpage = await graphql(`
    {
      allPrismicBookpage {
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

  bookpage.data.allPrismicBookpage.nodes.forEach((page) => {
    createPage({
      path: page.url,
      component: path.resolve(__dirname, 'src/templates/BooksPage.js'),
      context: { ...page },
    });
  });

  const technologypage = await graphql(`
    {
      allPrismicTechnologypage {
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

  technologypage.data.allPrismicTechnologypage.nodes.forEach((page) => {
    createPage({
      path: page.url,
      component: path.resolve(__dirname, 'src/templates/Technology.js'),
      context: { ...page },
    });
  });

  const featurepage = await graphql(`
    {
      allPrismicFeaturepage {
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

  featurepage.data.allPrismicFeaturepage.nodes.forEach((page) => {
    createPage({
      path: page.url,
      component: path.resolve(__dirname, 'src/templates/Feature.js'),
      context: { ...page },
    });
  });

  const solutionpage = await graphql(`
    {
      allPrismicSolutionpage {
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

  solutionpage.data.allPrismicSolutionpage.nodes.forEach((page) => {
    createPage({
      path: page.url,
      component: path.resolve(__dirname, 'src/templates/Solution.js'),
      context: { ...page },
    });
  });

  const singlebookpage = await graphql(`
    {
      allPrismicSinglebookpage {
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

  singlebookpage.data.allPrismicSinglebookpage.nodes.forEach((page) => {
    createPage({
      path: page.url,
      component: path.resolve(__dirname, 'src/templates/BookPage.js'),
      context: { ...page },
    });
  });

  const videopage = await graphql(`
    {
      allPrismicVideopage {
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

  videopage.data.allPrismicVideopage.nodes.forEach((page) => {
    createPage({
      path: page.url,
      component: path.resolve(__dirname, 'src/templates/VideoblogPage.js'),
      context: { ...page },
    });
  });
};

exports.onCreateWebpackConfig = (helper) => {
  const { stage, actions, getConfig } = helper;
  if (stage === 'develop' || stage === 'build-javascript') {
    const config = getConfig();
    const miniCssExtractPlugin = config.plugins.find(
      (plugin) => plugin.constructor.name === 'MiniCssExtractPlugin'
    );
    if (miniCssExtractPlugin) {
      miniCssExtractPlugin.options.ignoreOrder = true;
    }
    actions.replaceWebpackConfig(config);
  }
};
