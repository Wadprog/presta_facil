import { useStaticQuery, graphql } from 'gatsby';

const useGetImages = () => {
  const data = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "backgrounds/pattern-01.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
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
