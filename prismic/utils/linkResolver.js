export const linkResolver = (doc) => {
  const properties = doc._meta || doc;
  const defaultLanguage = 'en-gb';
  // URL for a solution type
  if (properties.type === 'homepage') {
    return properties.lang === defaultLanguage ? '/' : `/${properties.lang}`;
  }
  if (properties.type === 'solutionpage') {
    return `/solution/${properties.uid}`;
  }
  if (properties.type === 'technologypage') {
    return `/technology/${properties.uid}`;
  }
  if (properties.type === 'featurepage') {
    return `/feature/${properties.uid}`;
  }
  if (properties.type === 'blogpostpage') {
    return `/blog/${properties.uid}`;
  }
  if (properties.type === 'bookspage') {
    return `/books`;
  }
  if (properties.type === 'copmarepage') {
    return `/${properties.uid}`;
  }
  // Backup for all other types
  return '/';
};
