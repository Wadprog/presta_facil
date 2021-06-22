// import React from 'react';
// import { graphql } from 'gatsby';
// import PropTypes from 'prop-types';

// import Layout from '@components/Layout';
// import SubprocessorsPage from '@scenes/SubprocessorsPage';

// const Page = ({ data }) => {
//   const subprocessorsPageContent = data.allPrismicSubprocessors.edges[0].node;
//   if (!subprocessorsPageContent) return null;
//   const {
//     id,
//     uid,
//     lang,
//     type,
//     data: subprocessorsPageData,
//   } = subprocessorsPageContent;
//   const activeDocMeta = { id, uid, lang, type };
//   const { metatitle, metadescription, canonical } = subprocessorsPageData;

//   return (
//     <Layout
//       activeDocMeta={activeDocMeta}
//       metatitle={metatitle}
//       metadescription={metadescription}
//       canonical={canonical}
//     >
//       <SubprocessorsPage content={subprocessorsPageData} />
//     </Layout>
//   );
// };

// Page.propTypes = {
//   data: PropTypes.object.isRequired,
// };

// export const query = graphql`
//   query {
//     allPrismicSubprocessors {
//       edges {
//         node {
//           uid
//           type
//           lang
//           id
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
//             pagetitle {
//               text
//             }
//             body {
//               slice_type
//               items {
//                 col1 {
//                   text
//                 }
//                 col2 {
//                   text
//                 }
//                 col3 {
//                   text
//                 }
//                 col4 {
//                   text
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
