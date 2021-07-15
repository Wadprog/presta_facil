import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ArticleJsonLd } from 'gatsby-plugin-next-seo';

const ArticleSemanticMarkup = ({
  title,
  description,
  canonical,
  date,
  image,
}) => {
  const [markupData, setMarkupData] = useState(null);

  useEffect(() => {
    const authorName = 'Dan Storbaek';
    const publisherName = 'Secure Privacy';
    const logoUrl =
      'https://images.prismic.io/secure-privacy/fea99b28-ad05-4398-8531-1b4178f1f9e6_logo.svg?auto=compress%2Cformat&fit=max&q=45';
    const { url: imageUrl } = image;

    const markupInfo = {
      title,
      description,
      canonical,
      date,
      imageUrl,
      authorName,
      publisherName,
      logoUrl,
    };

    setMarkupData(markupInfo);
  }, [title, description, canonical, date, image]);

  return (
    markupData && (
      <ArticleJsonLd
        url={markupData.canonical}
        headline={markupData.title}
        images={[markupData.imageUrl]}
        datePublished={markupData.date}
        dateModified={markupData.date}
        authorName={markupData.authorName}
        publisherName={markupData.publisherName}
        publisherLogo={markupData.logoUrl}
        description={markupData.description}
        overrides={{
          '@type': 'BlogPosting',
        }}
      />
    )
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
