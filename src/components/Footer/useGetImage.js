import { useStaticQuery, graphql } from 'gatsby';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      linkedin: file(relativePath: { eq: "homepage/linkedin.svg" }) {
        publicURL
      }
      twitter: file(relativePath: { eq: "homepage/twitter.svg" }) {
        publicURL
      }
      logo: file(relativePath: { eq: "homepage/footer-logo.svg" }) {
        publicURL
      }
      book: file(relativePath: { eq: "homepage/book.jpg" }) {
        publicURL
      }
      book2: file(relativePath: { eq: "homepage/book2.jpg" }) {
        publicURL
      }
      book3: file(relativePath: { eq: "homepage/book3.jpg" }) {
        publicURL
      }
    }
  `);
  return data;
};
