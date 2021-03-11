import { useStaticQuery, graphql } from 'gatsby';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      arrow: file(relativePath: { eq: "homepage/icons/icon-btn-purple.svg" }) {
        publicURL
      }
    }
  `);
  return data;
};