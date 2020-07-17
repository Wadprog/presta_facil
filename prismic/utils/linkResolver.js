export const linkResolver = (doc) => {
  // URL for a solution type
  if (doc.type === 'solutionpage') {
    return `/solution/${doc.uid}`;
  }
  if (doc.type === 'technologypage') {
    return `/technology/${doc.uid}`;
  }
  if (doc.type === 'featurepage') {
    return `/feature/${doc.uid}`;
  }
  if (doc.type === 'blogpostpage') {
    return `/blog/${doc.uid}`;
  }
  if (doc.type === 'bookspage') {
    return `/books`;
  }
  if (doc.type === 'copmarepage') {
    return `/${doc.uid}`;
  }
  // Backup for all other types
  return '/';
};
