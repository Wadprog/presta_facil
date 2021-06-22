// import React from 'react';
// import { graphql } from 'gatsby';
// import PropTypes from 'prop-types';

// import BlogPage from '@scenes/BlogPage';
// import Layout from '@components/Layout';

// const Page = ({ data }) => {
//   const blogpagesContent = data.prismic.allBlogpostpages.edges[0];
//   if (!blogpagesContent) return null;
//   const blogpages = blogpagesContent.node;
//   const { node: blogPage } = data.prismic.allBlogpages.edges[0];
//   if (!blogPage) return null;
//   const { metatitle, metadescription, canonical } = blogPage;

//   blogpages._meta.alternateLanguages.map((item) => {
//     delete item.uid;
//     return item;
//   });

//   return (
//     <Layout
//       activeDocMeta={blogpages._meta}
//       metatitle={metatitle}
//       metadescription={metadescription}
//       canonical={canonical}
//     >
//       <BlogPage content={data} />
//     </Layout>
//   );
// };

// Page.propTypes = {
//   data: PropTypes.object.isRequired,
// };

// export const query = graphql`
//   query($lang: String) {
//     prismic {
//       allBlogpages(lang: $lang) {
//         edges {
//           node {
//             title
//             metatitle
//             metadescription
//             canonical
//             _meta {
//               uid
//               type
//               lang
//               tags
//               alternateLanguages {
//                 lang
//                 type
//                 uid
//               }
//             }
//           }
//         }
//       }
//       allBlogpostpages(lang: $lang, sortBy: date_DESC, first: 1000001) {
//         edges {
//           node {
//             _linkType
//             _meta {
//               uid
//               type
//               lang
//               tags
//               alternateLanguages {
//                 lang
//                 type
//                 uid
//               }
//             }
//             body {
//               ... on PRISMIC_BlogpostpageBodySubscribe {
//                 type
//                 label
//                 primary {
//                   title
//                   buttontext
//                 }
//               }
//             }
//             date
//             description
//             preview
//             backgroundpreview
//             title
//           }
//         }
//       }
//     }
//   }
// `;

// export default Page;
