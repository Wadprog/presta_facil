var plugins = [
  {
    plugin: require('/Users/lili4ka/Desktop/projects/secure-privacy/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
    options: { plugins: [] },
  },
  {
    plugin: require('/Users/lili4ka/Desktop/projects/secure-privacy/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
    options: {
      plugins: [],
      name: 'gatsby-starter-default',
      short_name: 'starter',
      start_url: '/',
      background_color: '#663399',
      theme_color: '#663399',
      display: 'minimal-ui',
      icon: 'static/images/meta/tile.png',
    },
  },
  {
    plugin: require('/Users/lili4ka/Desktop/projects/secure-privacy/node_modules/gatsby-source-prismic-graphql/gatsby-ssr'),
    options: {
      plugins: [],
      repositoryName: 'secure-privacy',
      defaultLang: 'en-gb',
      langs: ['en-gb', 'pt-br'],
      shortenUrlLangs: true,
      path: '/preview',
      previews: true,
      pages: [
        {
          type: 'Homepage',
          match: '/:lang?',
          component:
            '/Users/lili4ka/Desktop/projects/secure-privacy/src/templates/HomePage.js',
          langs: ['en-gb', 'pt-br'],
        },
        {
          type: 'Bookpage',
          match: '/:lang?/books',
          component:
            '/Users/lili4ka/Desktop/projects/secure-privacy/src/templates/BooksPage.js',
          langs: ['en-gb', 'pt-br'],
        },
        {
          type: 'Solutionpage',
          match: '/:lang?/solution/:uid',
          component:
            '/Users/lili4ka/Desktop/projects/secure-privacy/src/templates/Solution.js',
          langs: ['en-gb', 'pt-br'],
        },
        {
          type: 'Featurepage',
          match: '/:lang?/feature/:uid',
          component:
            '/Users/lili4ka/Desktop/projects/secure-privacy/src/templates/Feature.js',
          langs: ['en-gb', 'pt-br'],
        },
        {
          type: 'Technologypage',
          match: '/:lang?/technology/:uid',
          component:
            '/Users/lili4ka/Desktop/projects/secure-privacy/src/templates/Technology.js',
          langs: ['en-gb', 'pt-br'],
        },
        {
          type: 'Pricespage',
          match: '/:lang?/prices',
          component:
            '/Users/lili4ka/Desktop/projects/secure-privacy/src/templates/PricesPage.js',
          langs: ['en-gb', 'pt-br'],
        },
        {
          type: 'Pricesenterpricepage',
          match: '/:lang?/pricing-enterprice',
          component:
            '/Users/lili4ka/Desktop/projects/secure-privacy/src/templates/PricingEnterpricePage.js',
          langs: ['en-gb', 'pt-br'],
        },
        {
          type: 'Pricesresellerpage',
          match: '/:lang?/pricing-reseller',
          component:
            '/Users/lili4ka/Desktop/projects/secure-privacy/src/templates/PricingResellerPage.js',
          langs: ['en-gb', 'pt-br'],
        },
        {
          type: 'Contact',
          match: '/:lang?/contact-us',
          component:
            '/Users/lili4ka/Desktop/projects/secure-privacy/src/templates/ContactPage.js',
          langs: ['en-gb', 'pt-br'],
        },
        {
          type: 'Videopage',
          match: '/:lang?/video-blog',
          component:
            '/Users/lili4ka/Desktop/projects/secure-privacy/src/templates/VideoblogPage.js',
          langs: ['en-gb', 'pt-br'],
        },
        {
          type: 'Blogpostpage',
          match: '/:lang?/blog/:uid?',
          component:
            '/Users/lili4ka/Desktop/projects/secure-privacy/src/templates/Post.js',
          langs: ['en-gb', 'pt-br'],
        },
        {
          type: 'Copmarepage',
          match: '/:lang?/:uid',
          component:
            '/Users/lili4ka/Desktop/projects/secure-privacy/src/templates/Compare.js',
          langs: ['en-gb', 'pt-br'],
        },
      ],
      sharpKeys: [{}, 'profilepic'],
    },
  },
];
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`);

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api);
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map((plugin) => {
    if (!plugin.plugin[api]) {
      return undefined;
    }
    const result = plugin.plugin[api](args, plugin.options);
    if (result && argTransform) {
      args = argTransform({ args, result });
    }
    return result;
  });

  // Filter out undefined results.
  results = results.filter((result) => typeof result !== `undefined`);

  if (results.length > 0) {
    return results;
  } else {
    return [defaultReturn];
  }
};
