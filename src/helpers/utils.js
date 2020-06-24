import { RichText } from 'prismic-reactjs';

function isValidEmail(email) {
  const regexp = new RegExp(/[^@]+@[^.]+\..+/g);
  return regexp.test(email);
}

function parseUrl(link) {
  return link ? link.url : '/';
}

function parseString(arr) {
  return arr ? RichText.asText(arr) : '';
}

export { isValidEmail, parseUrl, parseString };
