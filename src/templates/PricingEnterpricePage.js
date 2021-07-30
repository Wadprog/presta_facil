// import React from 'react';
// import { graphql } from 'gatsby';
// import PropTypes from 'prop-types';

// import EnterpricePage from '@scenes/EnterpricePage';
// import Layout from '@components/Layout';

// const Page = ({ data }) => {
//   const testimonialsData = data.allPrismicHomepageBodyTestimonials.edges[0];
//   if (!testimonialsData) return null;
//   const testimonialsSection = testimonialsData.node;

//   const worksData = data.allPrismicHomepageBodyWorks.edges[1];
//   if (!worksData) return null;
//   const worksSection = worksData.node;

//   const enterpricepageContent = data.allPrismicPricesenterpricepage.edges[0];
//   if (!enterpricepageContent) return null;
//   const enterpricepage = enterpricepageContent.node;

//   const {
//     uid,
//     id,
//     type,
//     alternate_languages,
//     lang,
//     data: pageData,
//   } = enterpricepage;
//   const activeDocMeta = { id, uid, lang, type, alternate_languages };
//   const { metatitle, metadescription, canonical } = pageData;
//   const { body: pageContent } = pageData;

//   return (
//     <Layout
//       activeDocMeta={activeDocMeta}
//       metatitle={metatitle}
//       metadescription={metadescription}
//       canonical={canonical}
//     >
//       <EnterpricePage
//         content={pageContent}
//         worksSection={worksSection}
//         testimonialsSection={testimonialsSection}
//         metatitle={metatitle}
//         canonical={canonical}
//       />
//     </Layout>
//   );
// };

// Page.propTypes = {
//   data: PropTypes.object.isRequired,
// };

// export const query = graphql`
//   query($uid: String, $lang: String) {
//     allPrismicPricesenterpricepage(
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
//             uid
//             type
//           }
//           data {
//             canonical {
//               text
//             }
//             metadescription {
//               text
//             }
//             metatitle {
//               text
//             }
//             body {
//               ... on PrismicPricesenterpricepageBodyFeature {
//                 id
//                 slice_type
//                 primary {
//                   title {
//                     raw
//                   }
//                 }
//                 items {
//                   image {
//                     alt
//                     url
//                   }
//                   name {
//                     raw
//                   }
//                 }
//               }
//               ... on PrismicPricesenterpricepageBodyHero {
//                 id
//                 slice_type
//                 primary {
//                   benefitslist {
//                     raw
//                   }
//                   benefitstitle {
//                     raw
//                   }
//                   ctatext {
//                     raw
//                   }
//                   ctatitle {
//                     raw
//                   }
//                   image {
//                     alt
//                     url
//                   }
//                   modalbuttonlink {
//                     raw
//                   }
//                   modalbuttontext {
//                     raw
//                   }
//                   subtitle {
//                     raw
//                   }
//                   title {
//                     raw
//                   }
//                   video {
//                     link_type
//                     url
//                   }
//                 }
//               }
//               ... on PrismicPricesenterpricepageBodyCallbanner {
//                 id
//                 slice_type
//                 primary {
//                   button {
//                     raw
//                   }
//                   image {
//                     alt
//                     url
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
//     allPrismicHomepageBodyTestimonials {
//       edges {
//         node {
//           slice_type
//           items {
//             company {
//               raw
//             }
//             name {
//               raw
//             }
//             photo {
//               alt
//               url
//             }
//             text {
//               raw
//             }
//           }
//         }
//       }
//     }
//     allPrismicHomepageBodyWorks {
//       edges {
//         node {
//           slice_type
//           primary {
//             categories {
//               text
//             }
//             dropdownlable {
//               raw
//             }
//             title {
//               raw
//             }
//           }
//           items {
//             category {
//               text
//             }
//             link {
//               link_type
//               url
//             }
//             name {
//               raw
//             }
//             screenshot {
//               alt
//               url
//             }
//             tag {
//               raw
//             }
//           }
//         }
//       }
//     }
//   }
// `;

// export default Page;
