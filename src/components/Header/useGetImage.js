import { useStaticQuery, graphql } from 'gatsby';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      burger: file(relativePath: { eq: "homepage/icons/burger-icon.svg" }) {
        publicURL
      }
      close: file(relativePath: { eq: "homepage/icons/close.svg" }) {
        publicURL
      }
    }
  `);
  return data;
};
