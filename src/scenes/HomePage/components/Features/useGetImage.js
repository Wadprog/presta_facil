import { useStaticQuery, graphql } from 'gatsby';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      placeholder: file(relativePath: { eq: "homepage/placeholder.jpg" }) {
        publicURL
      }
    }
  `);
  return data;
};
