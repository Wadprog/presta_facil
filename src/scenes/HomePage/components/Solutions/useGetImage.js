import { useStaticQuery, graphql } from 'gatsby';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      uk: file(relativePath: { eq: "homepage/flags/uk.svg" }) {
        publicURL
      }
      brazil: file(relativePath: { eq: "homepage/flags/brazil.svg" }) {
        publicURL
      }
      california: file(relativePath: { eq: "homepage/flags/california.svg" }) {
        publicURL
      }
      eu: file(relativePath: { eq: "homepage/flags/euro.svg" }) {
        publicURL
      }
      france: file(relativePath: { eq: "homepage/flags/france.svg" }) {
        publicURL
      }
      nevada: file(relativePath: { eq: "homepage/flags/nevada.svg" }) {
        publicURL
      }
      thailand: file(relativePath: { eq: "homepage/flags/thailand.svg" }) {
        publicURL
      }
      arrow: file(relativePath: { eq: "homepage/icons/icon-btn-purple.svg" }) {
        publicURL
      }
    }
  `);
  return data;
};
