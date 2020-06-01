import { useStaticQuery, graphql } from 'gatsby';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      article: file(relativePath: { eq: "homepage/article.jpg" }) {
        publicURL
      }
      article2: file(relativePath: { eq: "homepage/article2.jpg" }) {
        publicURL
      }
      article3: file(relativePath: { eq: "homepage/article3.jpg" }) {
        publicURL
      }
    }
  `);
  return data;
};
