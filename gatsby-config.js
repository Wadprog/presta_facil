require('dotenv').config();
const { prismicRepositoryName } = require('./prismic-config');

const linkResolver = require('./prismic/utils/linkResolver');

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
        excludes: [
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
          '/preview/subprocessors',
          '/preview/tos',
          '/pt/pricing-reseller',
          '/pt/pricing',
          '/pt/pricing-enterprise',
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          esModule: false,
          modules: {
            namedExport: false,
          },
        },
      },
    },
    `gatsby-plugin-preact`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-next-seo`,
    `gatsby-plugin-image`,
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
        icon: `static/images/meta/tile.png`,
        icons: [
          {
            src: `static/images/meta/tile.png`,
            sizes: '513x513',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://secureprivacy.ai/',
        sitemap: 'https://secureprivacy.ai/sitemap.xml',
        policy: [
          {
            userAgent: '*',
            allow: '/',
            disallow: [
              '/solution/hospitality',
              '/quiz',
              '/thank-you',
              '/thank-you-book',
            ],
          },
        ],
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
          '@contextsType': 'src/contextsType',
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
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        defaultCrumb: {
          location: {
            pathname: '/',
          },
          crumbSeparator: '  >  ',
        },
        crumbLabelUpdates: [
          {
            pathname: '/books',
            crumbLabel: 'Books',
          },
          {
            pathname: '/technology',
            crumbLabel: 'Technologies',
          },
          {
            pathname: '/solution',
            crumbLabel: 'Solutions',
          },
          {
            pathname: '/feature',
            crumbLabel: 'Features',
          },
          {
            pathname: '/pricing',
            crumbLabel: 'Pricing',
          },
          {
            pathname: '/blog',
            crumbLabel: 'Blog',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: prismicRepositoryName,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        linkResolver: (doc) => linkResolver(doc),
        schemas: {
          copmarepage: {},
          pricespage2: {},
          pricespage3: {},
          pricespagetest: {},
          quizpage: {},
          schema_blog_post: {},
          termsofuse: {},
          test: {},
          layout: require('./schemas/layout.json'),
          thankyoupage: require('./schemas/thankyoupage.json'),
          subprocessors: require('./schemas/subprocessors.json'),
          featurepage: require('./schemas/featurepage.json'),
          technologypage: require('./schemas/technologypage.json'),
          singlebookpage: require('./schemas/singlebookpage.json'),
          blogpostpage: require('./schemas/blogpostpage.json'),
          blogpage: require('./schemas/blogpage.json'),
          contact: require('./schemas/contact.json'),
          videopage: require('./schemas/videopage.json'),
          videoarticlepage: require('./schemas/videoarticlepage.json'),
          bookpage: require('./schemas/bookpage.json'),
          homepage: require('./schemas/homepage.json'),
          pricespage: require('./schemas/pricespage.json'),
          pricesenterpricepage: require('./schemas/pricesenterpricepage.json'),
          pricesresellerpage: require('./schemas/pricesresellerpage.json'),
          legal_pages: require('./schemas/legal_pages.json'),
          tos: require('./schemas/tos.json'),
          quiz: require('./schemas/quiz.json'),
          privacypolicy: require('./schemas/privacypolicy.json'),
          solutionpage: require('./schemas/solutionpage.json'),
          publicscanner: require('./schemas/publicscanner.json'),
          category: require('./schemas/category.json'),
        },
        lang: '*',
        imageImgixParams: {
          auto: 'compress,format',
          fit: 'max',
          q: 45,
        },
      },
    },
    `gatsby-plugin-remove-serviceworker`,
  ],
};
