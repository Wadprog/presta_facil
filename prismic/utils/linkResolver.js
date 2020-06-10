export const linkResolver = (doc) => {
  // URL for a solution type
  if (doc.type === 'solutionpage') {
    return `/solution/${doc.uid}`;
  }
  // Backup for all other types
  return '/';
};
