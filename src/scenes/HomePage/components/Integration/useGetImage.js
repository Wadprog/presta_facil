import { useStaticQuery, graphql } from 'gatsby';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      hubspot: file(relativePath: { eq: "homepage/technologies/hubspot.svg" }) {
        publicURL
      }
      arrow: file(relativePath: { eq: "homepage/icons/icon-btn-purple.svg" }) {
        publicURL
      }
    }
  `);
  return data;
};
