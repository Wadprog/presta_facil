const { defaultLanguage } = require('./../../prismic-config');

const linkResolver = (doc) => {
  const properties = doc._meta || doc;
  if (properties.type === 'homepage') {
    return properties.lang === defaultLanguage
      ? '/'
      : `/${properties.lang.slice(0, 2)}/`;
  }

  if (properties.type === 'category' && properties.uid) {
    return properties.lang === defaultLanguage
      ? `/${properties.uid}`
      : `/${properties.lang.slice(0, 2)}/${properties.uid}`;
  }

  if (properties.type === 'contact') {
    return properties.lang === defaultLanguage
      ? '/contact-us'
      : `/${properties.lang.slice(0, 2)}/contact-us`;
  }

  if (properties.type === 'featurepage') {
    return properties.lang === defaultLanguage
      ? `/feature/${properties.uid}`
      : `/${properties.lang.slice(0, 2)}/feature/${properties.uid}`;
  }

  if (properties.type === 'solutionpage') {
    return properties.lang === defaultLanguage
      ? `/solution/${properties.uid}`
      : `/${properties.lang.slice(0, 2)}/solution/${properties.uid}`;
  }

  if (properties.type === 'technologypage') {
    return properties.lang === defaultLanguage
      ? `/technology/${properties.uid}`
      : `/${properties.lang.slice(0, 2)}/technology/${properties.uid}`;
  }

  if (properties.type === 'bookpage') {
    return properties.lang === defaultLanguage
      ? '/books'
      : `/${properties.lang.slice(0, 2)}/books`;
  }
  if (properties.type === 'pricespage') {
    return properties.lang === defaultLanguage
      ? `/${properties.uid}`
      : `/${properties.lang.slice(0, 2)}/${properties.uid}`;
  }

  if (properties.type === 'pricespagetest') {
    return properties.lang === defaultLanguage
      ? `/${properties.uid}`
      : `/${properties.lang.slice(0, 2)}/${properties.uid}`;
  }

  if (properties.type === 'pricesenterpricepage') {
    return properties.lang === defaultLanguage
      ? '/pricing-enterprise'
      : `/${properties.lang.slice(0, 2)}/pricing-enterprise`;
  }

  if (properties.type === 'pricesresellerpage') {
    return properties.lang === defaultLanguage
      ? '/pricing-reseller'
      : `/${properties.lang.slice(0, 2)}/pricing-reseller`;
  }

  if (properties.type === 'videopage') {
    return properties.lang === defaultLanguage
      ? '/video-blog'
      : `/${properties.lang.slice(0, 2)}/video-blog`;
  }

  if (properties.type === 'videoarticlepage') {
    return properties.lang === defaultLanguage
      ? `/videos/${properties.uid}`
      : `/${properties.lang.slice(0, 2)}/videos/${properties.uid}`;
  }

  if (properties.type === 'copmarepage') {
    return properties.lang === defaultLanguage
      ? `/${properties.uid}`
      : `/${properties.lang.slice(0, 2)}/${properties.uid}`;
  }

  if (properties.type === 'blogpage') {
    return properties.lang === defaultLanguage
      ? '/blog'
      : `/${properties.lang.slice(0, 2)}/blog`;
  }

  if (properties.type === 'blogpostpage' && properties.uid) {
    return properties.lang === defaultLanguage
      ? `/blog/${properties.uid}`
      : `/${properties.lang.slice(0, 2)}/blog/${properties.uid}`;
  }

  if (properties.type === 'landing_page_v1' && properties.uid) {
    return properties.lang === defaultLanguage
      ? `/lp/${properties.uid}`
      : `/${properties.lang.slice(0, 2)}/lp/${properties.uid}`;
  }

  if (properties.type === 'singlebookpage' && properties.uid) {
    return properties.lang === defaultLanguage
      ? `/${properties.uid}`
      : `/${properties.lang.slice(0, 2)}/${properties.uid}`;
  }

  if (properties.type === 'privacypolicy') {
    return properties.lang === defaultLanguage
      ? `/${properties.uid}`
      : `/${properties.lang.slice(0, 2)}/${properties.uid}`;
  }

  if (properties.type === 'legal_pages' && properties.uid) {
    return properties.lang === defaultLanguage
      ? `/${properties.uid}`
      : `/${properties.lang.slice(0, 2)}/${properties.uid}`;
  }

  if (properties.type === 'thankyoupage') {
    return properties.lang === defaultLanguage
      ? `/${properties.uid}`
      : `/${properties.lang.slice(0, 2)}/${properties.uid}`;
  }

  if (properties.type === 'subprocessors') {
    return properties.lang === defaultLanguage
      ? `/${properties.uid}`
      : `/${properties.lang.slice(0, 2)}/${properties.uid}`;
  }

  if (properties.type === 'subprocessors') {
    return properties.lang === defaultLanguage
      ? `/${properties.uid}`
      : `/${properties.lang.slice(0, 2)}/${properties.uid}`;
  }

  if (properties.type === 'tos') {
    return properties.lang === defaultLanguage
      ? `/${properties.uid}`
      : `/${properties.lang.slice(0, 2)}/${properties.uid}`;
  }

  // Backup for all other types
  return '/';
};

module.exports = linkResolver;
