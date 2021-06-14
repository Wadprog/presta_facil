import { useStaticQuery, graphql } from 'gatsby';

const useGetImage = () => {
  const data = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "backgrounds/bg-hero.png" }) {
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

export default useGetImage;
