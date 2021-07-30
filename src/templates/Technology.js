// import React from 'react';
// import { graphql } from 'gatsby';
// import PropTypes from 'prop-types';

// import Technology from '@scenes/TechnologyPage';
// import Layout from '@components/Layout';

// const Page = ({ data }) => {
//   const pageContext = data.allPrismicTechnologypage.edges[0].node;
//   if (!pageContext) return null;
//   const { uid, id, lang, type, alternate_languages, data: body } = pageContext;
//   const activeDocMeta = { id, uid, lang, type, alternate_languages };
//   const { metatitle, metadescription, canonical } = body;
//   const { body: pageContent } = body;

//   return (
//     <Layout
//       activeDocMeta={activeDocMeta}
//       metatitle={metatitle}
//       metadescription={metadescription}
//       canonical={canonical}
//     >
//       <Technology
//         current={pageContent}
//         metatitle={metatitle}
//         canonical={canonical}
//       />
//     </Layout>
//   );
// };

// Page.propTypes = {
//   data: PropTypes.object,
// };

// export const query = graphql`
//   query($uid: String, $lang: String) {
//     allPrismicTechnologypage(
//       filter: { uid: { eq: $uid }, lang: { eq: $lang } }
//     ) {
//       edges {
//         node {
//           uid
//           type
//           lang
//           id
//           alternate_languages {
//             id
//             lang
//             type
//             uid
//           }
//           data {
//             metatitle {
//               text
//             }
//             metadescription {
//               text
//             }
//             canonical {
//               text
//             }
//             body {
//               ... on PrismicTechnologypageBodyHero {
//                 id
//                 slice_type
//                 primary {
//                   buttonlink {
//                     text
//                   }
//                   buttontext {
//                     raw
//                   }
//                   description {
//                     raw
//                   }
//                   image {
//                     alt
//                     url
//                     fluid(srcSetBreakpoints: 10) {
//                       aspectRatio
//                       base64
//                       sizes
//                       src
//                       srcSet
//                       srcSetWebp
//                       srcWebp
//                     }
//                     thumbnails
//                   }
//                   title {
//                     raw
//                   }
//                 }
//               }
//               ... on PrismicTechnologypageBodyBenefits {
//                 id
//                 slice_type
//                 primary {
//                   description {
//                     raw
//                   }
//                   image {
//                     alt
//                     url
//                   }
//                   subtitle {
//                     raw
//                   }
//                   title {
//                     raw
//                   }
//                 }
//                 items {
//                   image {
//                     alt
//                     url
//                     thumbnails
//                   }
//                   text {
//                     raw
//                   }
//                 }
//               }
//               ... on PrismicTechnologypageBodyWhatis {
//                 id
//                 slice_type
//                 primary {
//                   buttonlink {
//                     text
//                   }
//                   buttontext {
//                     raw
//                   }
//                   description {
//                     raw
//                   }
//                   image {
//                     alt
//                     url
//                   }
//                   subtitle {
//                     raw
//                   }
//                   title {
//                     raw
//                   }
//                 }
//               }
//               ... on PrismicTechnologypageBodyHow {
//                 id
//                 slice_type
//                 primary {
//                   description {
//                     raw
//                   }
//                   image {
//                     alt
//                     url
//                   }
//                   list {
//                     raw
//                   }
//                   title {
//                     raw
//                   }
//                 }
//               }
//               ... on PrismicTechnologypageBodyBanner {
//                 id
//                 slice_type
//                 primary {
//                   buttonlink {
//                     text
//                   }
//                   buttontext {
//                     raw
//                   }
//                   link {
//                     text
//                   }
//                   linktext {
//                     text
//                   }
//                   text {
//                     raw
//                   }
//                   title {
//                     raw
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;

// export default Page;
