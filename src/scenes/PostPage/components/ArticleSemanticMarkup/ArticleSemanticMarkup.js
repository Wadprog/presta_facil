import React from 'react';
import PropTypes from 'prop-types';
import { ArticleJsonLd } from 'gatsby-plugin-next-seo';

const ArticleSemanticMarkup = ({
  title,
  description,
  canonical,
  date,
  image,
}) => {
  const authorName = 'Dan Storbaek';
  const publisherName = 'Dan Storbaek';
  const logoUrl =
    'https://images.prismic.io/secure-privacy/fea99b28-ad05-4398-8531-1b4178f1f9e6_logo.svg?auto=compress%2Cformat&fit=max&q=45';
  const { url: imageUrl } = image;

  return (
    <ArticleJsonLd
      url={canonical}
      headline={title}
      images={[imageUrl]}
      datePublished={date}
      dateModified={date}
      authorName={authorName}
      publisherName={publisherName}
      publisherLogo={logoUrl}
      description={description}
      overrides={{
        '@type': 'BlogPosting',
      }}
    />
  );
};

ArticleSemanticMarkup.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  canonical: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.object,
};

export default ArticleSemanticMarkup;
