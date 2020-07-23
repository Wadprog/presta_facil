import { useStaticQuery, graphql } from 'gatsby';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "homepage/404-logo.svg" }) {
        publicURL
      }
    }
  `);
  return data;
};
