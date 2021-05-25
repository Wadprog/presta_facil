import { defaultLanguage } from '@/prismic-config';
// eslint-disable-next-line
let path = [];

if (typeof window !== 'undefined') {
  path = window.location.pathname.split('/');
}

export const linkResolver = (doc) => {
  const properties = doc._meta || doc;

  if (properties.type === 'homepage') {
    return properties.lang === defaultLanguage ? '/' : `/${properties.lang}/`;
  }

  if (properties.type === 'contact') {
    return properties.lang === defaultLanguage
      ? '/contact-us'
      : `/${properties.lang}/contact-us`;
  }

  // if (properties.type === 'solutionpage' && path.includes('solution')) {
  //   return properties.lang === defaultLanguage
  //     ? `/solution/${properties.uid}`
  //     : `/${properties.lang}/solution/${properties.uid}`;
  // }

  // if (properties.type === 'solutionpage' && path.includes('law')) {
  //   return properties.lang === defaultLanguage
  //     ? `/law/${properties.uid}`
  //     : `/${properties.lang}/law/${properties.uid}`;
  // }
  if (properties.type === 'featurepage') {
    return properties.lang === defaultLanguage
      ? `/feature/${properties.uid}`
      : `/${properties.lang}/feature/${properties.uid}`;
  }

  if (properties.type === 'solutionpage') {
    return properties.lang === defaultLanguage
      ? `/solution/${properties.uid}`
      : `/${properties.lang}/solution/${properties.uid}`;
  }

  if (properties.type === 'technologypage') {
    return properties.lang === defaultLanguage
      ? `/technology/${properties.uid}`
      : `/${properties.lang}/technology/${properties.uid}`;
  }

  if (properties.type === 'bookpage') {
    return properties.lang === defaultLanguage
      ? '/books'
      : `/${properties.lang}/books`;
  }

  if (properties.type === 'pricespage') {
    return properties.lang === defaultLanguage
      ? '/pricing'
      : `/${properties.lang}/pricing`;
  }

  if (properties.type === 'pricespagetest') {
    return properties.lang === defaultLanguage
      ? '/pricestest'
      : `/${properties.lang}/pricestest`;
  }

  if (properties.type === 'pricesenterpricepage') {
    return properties.lang === defaultLanguage
      ? '/pricing-enterprise'
      : `/${properties.lang}/pricing-enterprise`;
  }

  if (properties.type === 'pricesresellerpage') {
    return properties.lang === defaultLanguage
      ? '/pricing-reseller'
      : `/${properties.lang}/pricing-reseller`;
  }

  if (properties.type === 'pricesresellerpage') {
    return properties.lang === defaultLanguage
      ? '/pricing-reseller'
      : `/${properties.lang}/pricing-reseller`;
  }

  if (properties.type === 'videopage') {
    return properties.lang === defaultLanguage
      ? '/video-blog'
      : `/${properties.lang}/video-blog`;
  }

  if (properties.type === 'copmarepage') {
    return properties.lang === defaultLanguage
      ? `/${properties.uid}`
      : `/${properties.lang}/${properties.uid}`;
  }

  if (properties.type === 'blogpostpage' && !properties.uid) {
    return properties.lang === defaultLanguage
      ? '/blog'
      : `/${properties.lang}/blog`;
  }

  if (properties.type === 'blogpostpage' && properties.uid) {
    return properties.lang === defaultLanguage
      ? `/blog/${properties.uid}`
      : `/${properties.lang}/blog/${properties.uid}`;
  }

  if (properties.type === 'singlebookpage' && properties.uid) {
    return properties.lang === defaultLanguage
      ? `${properties.uid}`
      : `/${properties.lang}${properties.uid}`;
  }

  if (properties.type === 'privacypolicy') {
    return properties.lang === defaultLanguage
      ? `/${properties.uid}`
      : `/${properties.lang}/${properties.uid}`;
  }

  if (properties.type === 'legal_pages' && properties.uid) {
    return properties.lang === defaultLanguage
      ? `${properties.uid}`
      : `/${properties.lang}${properties.uid}`;
  }

  if (properties.type === 'thankyoupage') {
    return properties.lang === defaultLanguage
      ? `/${properties.uid}`
      : `/${properties.lang}/${properties.uid}`;
  }

  if (properties.type === 'subprocessors') {
    return properties.lang === defaultLanguage
      ? `/${properties.uid}`
      : `/${properties.lang}/${properties.uid}`;
  }

  // Backup for all other types
  return '/';
};
