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
};
