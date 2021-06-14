import { useStaticQuery, graphql } from 'gatsby';

const useGetImages = () => {
  const data = useStaticQuery(graphql`
    query {
      background: file(
        relativePath: { eq: "backgrounds/bg-articles-pattern.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 70) {
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
