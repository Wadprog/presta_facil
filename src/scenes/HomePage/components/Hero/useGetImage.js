import { useStaticQuery, graphql } from 'gatsby';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      hero: file(relativePath: { eq: "homepage/hero.png" }) {
        publicURL
      }
      enphase: file(relativePath: { eq: "homepage/enphase.svg" }) {
        publicURL
      }
      penn: file(relativePath: { eq: "homepage/penn.svg" }) {
        publicURL
      }
      semasio: file(relativePath: { eq: "homepage/semasio.svg" }) {
        publicURL
      }
    }
  `);
  return data;
};
