function isValidEmail(email) {
  const regexp = new RegExp(/[^@]+@[^.]+\..+/g);
  return regexp.test(email);
}

function parseUrl(link) {
  return link ? link.url : '/';
}

export { isValidEmail, parseUrl };
