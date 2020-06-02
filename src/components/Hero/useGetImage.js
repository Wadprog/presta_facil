import { useStaticQuery, graphql } from 'gatsby';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      hero: file(relativePath: { eq: "template/hero.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900, quality: 90) {
            srcWebp
            srcSetWebp
            srcSet
            src
            sizes
            presentationWidth
            presentationHeight
            aspectRatio
          }
        }
      }
    }
  `);
  return data;
};
