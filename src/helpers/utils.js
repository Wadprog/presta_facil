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

function dateToString(date) {
  const d = new Date(date);
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return d.toLocaleDateString('en-US', options);
}

export { isValidEmail, parseUrl, parseString, dateToString };
