// import React from 'react';
// import { graphql } from 'gatsby';
// import PropTypes from 'prop-types';

// import BooksPage from '@scenes/BooksPage';
// import Layout from '@components/Layout';

// const Page = ({ data }) => {
//   const bookpageContent = data.prismic.allBookpages.edges[0];
//   if (!bookpageContent) return null;
//   const { node: bookpageData } = bookpageContent;
//   const { metatitle, metadescription, canonical } = bookpageData;

//   return (
//     <Layout
//       activeDocMeta={bookpageData._meta}
//       metatitle={metatitle}
//       metadescription={metadescription}
//       canonical={canonical}
//     >
//       <BooksPage content={bookpageData} />
//     </Layout>
//   );
// };

// Page.propTypes = {
//   data: PropTypes.object.isRequired,
// };

// export const query = graphql`
//   query($lang: String) {
//     prismic {
//       allBookpages(lang: $lang) {
//         edges {
//           node {
//             metatitle
//             metadescription
//             canonical
//             pagetitle
//             _meta {
//               uid
//               type
//               lang
//               alternateLanguages {
//                 lang
//                 type
//                 uid
//               }
//             }
//             body {
//               ... on PRISMIC_BookpageBodyBooks {
//                 type
//                 label
//                 fields {
//                   buttontext
//                   image
//                   bookpageurl
//                   imageSharp {
//                     childImageSharp {
//                       fluid {
//                         aspectRatio
//                         base64
//                         originalImg
//                         originalName
//                         presentationHeight
//                         presentationWidth
//                         sizes
//                         src
//                         srcSet
//                         srcSetWebp
//                         srcWebp
//                         tracedSVG
//                       }
//                     }
//                   }
//                 }
//               }
//               ... on PRISMIC_BookpageBodyCta {
//                 type
//                 label
//                 primary {
//                   buttonlink
//                   buttontext
//                   description
//                   image
//                   sectiontitle
//                   imageSharp {
//                     childImageSharp {
//                       fluid {
//                         aspectRatio
//                         base64
//                         originalImg
//                         originalName
//                         presentationHeight
//                         presentationWidth
//                         sizes
//                         src
//                         srcSet
//                         srcSetWebp
//                         srcWebp
//                         tracedSVG
//                       }
//                     }
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
