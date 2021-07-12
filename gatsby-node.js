/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
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

  const subprocessors = await graphql(`
    {
      allPrismicSubprocessors {
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

  subprocessors.data.allPrismicSubprocessors.nodes.forEach((page) => {
    createPage({
      path: page.url,
      component: path.resolve(__dirname, 'src/templates/Subprocessors.js'),
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

  const blogpostpage = await graphql(`
    {
      allPrismicBlogpostpage {
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

  blogpostpage.data.allPrismicBlogpostpage.nodes.forEach((page) => {
    createPage({
      path: page.url,
      component: path.resolve(__dirname, 'src/templates/Post.js'),
      context: { ...page },
    });
  });

  const blogpage = await graphql(`
    {
      allPrismicBlogpage {
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

  blogpage.data.allPrismicBlogpage.nodes.forEach((page) => {
    createPage({
      path: page.url,
      component: path.resolve(__dirname, 'src/templates/BlogPage.js'),
      context: { ...page },
    });
  });

  const contact = await graphql(`
    {
      allPrismicContact {
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

  contact.data.allPrismicContact.nodes.forEach((page) => {
    createPage({
      path: page.url,
      component: path.resolve(__dirname, 'src/templates/ContactPage.js'),
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

  const pricespage = await graphql(`
    {
      allPrismicPricespage {
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

  pricespage.data.allPrismicPricespage.nodes.forEach((page) => {
    createPage({
      path: page.url,
      component: path.resolve(__dirname, 'src/templates/PricesPage.js'),
      context: { ...page },
    });
  });

  const pricesenterpricepage = await graphql(`
    {
      allPrismicPricesenterpricepage {
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

  pricesenterpricepage.data.allPrismicPricesenterpricepage.nodes.forEach(
    (page) => {
      createPage({
        path: page.url,
        component: path.resolve(
          __dirname,
          'src/templates/PricingEnterpricePage.js'
        ),
        context: { ...page },
      });
    }
  );

  const pricesresellerpage = await graphql(`
    {
      allPrismicPricesresellerpage {
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

  pricesresellerpage.data.allPrismicPricesresellerpage.nodes.forEach((page) => {
    createPage({
      path: page.url,
      component: path.resolve(
        __dirname,
        'src/templates/PricingResellerPage.js'
      ),
      context: { ...page },
    });
  });

  const legal = await graphql(`
    {
      allPrismicLegalPages {
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

  legal.data.allPrismicLegalPages.nodes.forEach((page) => {
    createPage({
      path: page.url,
      component: path.resolve(__dirname, 'src/templates/LegalPage.js'),
      context: { ...page },
    });
  });

  const termsofservice = await graphql(`
    {
      allPrismicTos {
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

  termsofservice.data.allPrismicTos.nodes.forEach((page) => {
    createPage({
      path: page.url,
      component: path.resolve(__dirname, 'src/templates/TermsService.js'),
      context: { ...page },
    });
  });

  const privacypolicy = await graphql(`
    {
      allPrismicPrivacypolicy {
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

  privacypolicy.data.allPrismicPrivacypolicy.nodes.forEach((page) => {
    createPage({
      path: page.url,
      component: path.resolve(__dirname, 'src/templates/PrivacyPolicyPage.js'),
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
