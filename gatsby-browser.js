/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

const { registerLinkResolver } = require('gatsby-source-prismic-graphql');
const { linkResolver } = require('./prismic/utils/linkResolver');

registerLinkResolver(linkResolver);

export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (!(`IntersectionObserver` in window)) {
    import(`intersection-observer`);
  }
};
