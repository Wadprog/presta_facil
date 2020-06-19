export const linkResolver = (doc) => {
  // URL for a solution type
  if (doc.type === 'solutionpage') {
    return `/solution/${doc.uid}`;
  }
  if (doc.type === 'technologypage') {
    return `/technology/${doc.uid}`;
  }
  // Backup for all other types
  return '/';
};
