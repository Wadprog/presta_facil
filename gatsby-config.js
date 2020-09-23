require('dotenv').config();
const {
  prismicRepositoryName,
  defaultLanguage,
  langs,
} = require('./prismic-config');

module.exports = {
  siteMetadata: {
    title: `Secure-privacy`,
    description: `Secure privacy website`,
    author: `Secure privacy`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-preact`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fonts`,
        path: `${__dirname}/src/assets/fonts/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/images/meta/tile.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://secureprivacy.ai/',
        sitemap: 'https://secureprivacy.ai/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@': '',
          '@src': 'src',
          '@components': 'src/components',
          '@pages': 'src/pages',
          '@styles': 'src/styles',
          '@hooks': 'src/hooks',
          '@helpers': 'src/helpers',
          '@scenes': 'src/scenes',
        },
        extensions: ['js', 'sass', 'scss'],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: 'gatsby-source-prismic-graphql',
      options: {
        repositoryName: prismicRepositoryName,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        defaultLang: defaultLanguage,
        langs: langs,
        shortenUrlLangs: true,
        pages: [
          {
            type: 'Homepage',
            match: '/:lang?',
            component: require.resolve('./src/pages/homepage.js'),
            langs: langs,
          },
          {
            type: 'Bookpage',
            match: '/:lang?/books',
            component: require.resolve('./src/pages/bookspage.js'),
            langs: langs,
          },
          {
            type: 'Solutionpage',
            match: '/:lang?/solution/:uid',
            component: require.resolve('./src/templates/Solution/Solution.js'),
            langs: langs,
          },
          {
            type: 'Solutionpage',
            match: '/:lang?/law/:uid',
            component: require.resolve('./src/templates/Law/Law.js'),
            langs: langs,
          },
          {
            type: 'Featurepage',
            match: '/:lang?/feature/:uid',
            component: require.resolve('./src/templates/Feature/Feature.js'),
            langs: langs,
          },
          {
            type: 'Technologypage',
            match: '/:lang?/technology/:uid',
            component: require.resolve(
              './src/templates/Technology/Technology.js'
            ),
            langs: langs,
          },
          {
            type: 'Pricespage',
            match: '/:lang?/prices',
            component: require.resolve('./src/pages/pricespage.js'),
            langs: langs,
          },
          {
            type: 'Pricesenterpricepage',
            match: '/:lang?/pricing-enterprice',
            component: require.resolve('./src/pages/pricing-enterpricepage.js'),
            langs: langs,
          },
          {
            type: 'Pricesresellerpage',
            match: '/:lang?/pricing-reseller',
            component: require.resolve('./src/pages/pricing-enterpricepage.js'),
            langs: langs,
          },
          {
            type: 'Contact',
            match: '/:lang?/contact-us',
            component: require.resolve('./src/pages/contact-uspage.js'),
            langs: langs,
          },
          {
            type: 'Videopage',
            match: '/:lang?/video-blog',
            component: require.resolve('./src/pages/video-blogpage.js'),
            langs: langs,
          },
          {
            type: 'Solutionpage',
            match: '/:lang?/law/:uid',
            component: require.resolve('./src/templates/Law/Law.js'),
            langs: langs,
          },
          {
            type: 'Blogpostpage',
            match: '/:lang?/blog',
            component: require.resolve('./src/pages/blogpage.js'),
            langs: langs,
          },
          {
            type: 'Blogpostpage',
            match: '/:lang?/blog/:uid?',
            component: require.resolve('./src/templates/Post/Post.js'),
            langs: langs,
          },
          {
            type: 'Copmarepage',
            match: '/:lang?/:uid',
            component: require.resolve('./src/templates/Compare/Compare.js'),
            langs: langs,
          },
        ],
        path: '/preview',
        previews: true,
        // extraPageFields: 'test_type',
        // omitPrismicScript: true,
        sharpKeys: [
          /image|photo|picture|illustration|screenshot|background|Image/,
          'profilepic',
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
