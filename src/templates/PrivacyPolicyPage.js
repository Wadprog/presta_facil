// import React from 'react';
// import { graphql } from 'gatsby';
// import PropTypes from 'prop-types';

// import Layout from '@components/Layout';
// import PrivacyPolicyPage from '../scenes/PrivacyPolicyPage/index';

// const Page = ({ data }) => {
//   const privacyPolicyPageData = data.prismic.allPrivacypolicys.edges[0];
//   if (!privacyPolicyPageData) return null;

//   const privacyPolicyPageContent = privacyPolicyPageData.node;
//   const { metatitle, metadescription, canonical } = privacyPolicyPageContent;

//   return (
//     <Layout
//       activeDocMeta={privacyPolicyPageContent._meta}
//       metatitle={metatitle}
//       metadescription={metadescription}
//       canonical={canonical}
//     >
//       <PrivacyPolicyPage />
//     </Layout>
//   );
// };

// Page.propTypes = {
//   data: PropTypes.object.isRequired,
// };

// export const query = graphql`
//   query($lang: String) {
//     prismic {
//       allPrivacypolicys(lang: $lang) {
//         edges {
//           node {
//             _meta {
//               uid
//               type
//               lang
//               alternateLanguages {
//                 type
//                 lang
//                 uid
//               }
//             }
//             metatitle
//             metadescription
//             canonical
//           }
//         }
//       }
//     }
//   }
// `;

// export default Page;
