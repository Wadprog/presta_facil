import { useStaticQuery, graphql } from 'gatsby';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      photo: file(relativePath: { eq: "homepage/photo.jpg" }) {
        publicURL
      }
    }
  `);
  return data;
};
