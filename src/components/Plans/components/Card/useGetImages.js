import { useStaticQuery, graphql } from 'gatsby';

const useGetImages = () => {
  const data = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "backgrounds/pattern-03.png" }) {
        childImageSharp {
          fluid(maxWidth: 350, quality: 100) {
            src
            srcSet
            srcSetWebp
            srcWebp
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

export default useGetImages;
