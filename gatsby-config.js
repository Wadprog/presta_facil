require('dotenv').config();
const {
  prismicRepositoryName,
  defaultLanguage,
  langs,
} = require('./prismic-config');

module.exports = {
  siteMetadata: {
    siteUrl: `https://secureprivacy.ai/`,
    title: `Secure-privacy`,
    description: `Secure privacy website`,
    author: `Secure privacy`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [
          '/preview',
          '/preview/copmarepage',
          '/preview/featurepage',
          '/preview/pricespagetest',
          '/preview/singlebookpage',
          '/preview/solutionpage',
          '/preview/technologypage',
          '/preview/blogpostpage',
          '/preview/bookpage',
          '/preview/contact',
          '/preview/homepage',
          '/preview/pricesenterpricepage',
          '/preview/pricespage',
          '/preview/pricesresellerpage',
          '/preview/privacypolicy',
          '/preview/videopage',
          '/preview/legal_pages',
          '/preview/thankyoupage',
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-preact`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fonts`,
        path: `${__dirname}/src/assets/fonts/`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager-timeout',
      options: {
        id: 'GTM-WNNNKBK',
        includeInDevelopment: true,
        timeout: 5000,
        defaultDataLayer: { platform: 'gatsby' },
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
          '@contexts': 'src/contexts',
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
        path: '/preview',
        previews: true,
        pages: [
          {
            type: 'Homepage',
            match: '/:lang?',
            component: require.resolve('./src/templates/Home.js'),
            langs: langs,
          },
          {
            type: 'Bookpage',
            match: '/:lang?/books',
            component: require.resolve('./src/templates/BooksPage.js'),
            langs: langs,
          },
          {
            type: 'Solutionpage',
            match: '/:lang?/solution/:uid',
            component: require.resolve('./src/templates/Solution.js'),
            langs: langs,
          },
          // {
          //   type: 'Solutionpage',
          //   match: '/:lang?/law/:uid',
          //   component: require.resolve('./src/templates/Law.js'),
          //   langs: langs,
          // },
          {
            type: 'Featurepage',
            match: '/:lang?/feature/:uid',
            component: require.resolve('./src/templates/Feature.js'),
            langs: langs,
          },
          {
            type: 'Technologypage',
            match: '/:lang?/technology/:uid',
            component: require.resolve('./src/templates/Technology.js'),
            langs: langs,
          },
          {
            type: 'Pricespage',
            match: '/:lang?/pricing',
            component: require.resolve('./src/templates/PricesPage.js'),
            langs: langs,
          },
          {
            type: 'Pricespagetest',
            match: '/:lang?/pricestest',
            component: require.resolve('./src/templates/PricesPageTest.js'),
            langs: langs,
          },
          {
            type: 'Pricesenterpricepage',
            match: '/:lang?/pricing-enterprise',
            component: require.resolve(
              './src/templates/PricingEnterpricePage.js'
            ),
            langs: langs,
          },
          {
            type: 'Pricesresellerpage',
            match: '/:lang?/pricing-reseller',
            component: require.resolve(
              './src/templates/PricingResellerPage.js'
            ),
            langs: langs,
          },
          {
            type: 'Contact',
            match: '/:lang?/contact-us',
            component: require.resolve('./src/templates/ContactPage.js'),
            langs: langs,
          },
          {
            type: 'Videopage',
            match: '/:lang?/video-blog',
            component: require.resolve('./src/templates/VideoblogPage.js'),
            langs: langs,
          },
          {
            type: 'Blogpostpage',
            match: '/:lang?/blog/:uid?',
            component: require.resolve('./src/templates/Post.js'),
            langs: langs,
          },
          {
            type: 'Blogpostpage',
            match: '/:lang?/blog',
            component: require.resolve('./src/templates/BlogPage.js'),
            langs: langs,
          },
          {
            type: 'Copmarepage',
            match: '/:lang?/:uid',
            component: require.resolve('./src/templates/Compare.js'),
            langs: langs,
          },
          {
            type: 'Singlebookpage',
            match: '/:lang?/:uid',
            component: require.resolve('./src/templates/BookPage.js'),
            langs: langs,
          },
          {
            type: 'Privacypolicy',
            match: '/:lang?/:uid',
            component: require.resolve('./src/templates/PrivacyPolicyPage.js'),
            langs: langs,
          },
          {
            type: 'Legal_pages',
            match: '/:lang?/:uid',
            component: require.resolve('./src/templates/LegalPage.js'),
            langs: langs,
          },
          {
            type: 'Thankyoupage',
            match: '/:lang?/:uid',
            component: require.resolve('./src/templates/ThankyouPage.js'),
            langs: langs,
          },
        ],
        // extraPageFields: 'test_type',
        omitPrismicScript: true,
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
