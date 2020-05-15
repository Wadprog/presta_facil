import { useStaticQuery, graphql } from 'gatsby';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      burger: file(relativePath: { eq: "homepage/icons/burger-icon.svg" }) {
        publicURL
      }
    }
  `);
  return data;
};
