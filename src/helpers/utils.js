import { RichText } from 'prismic-reactjs';

function isValidEmail(email) {
  const regexp = new RegExp(/[^@]+@[^.]+\..+/g);
  return regexp.test(email);
}

function validateUrl(value) {
  return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
    value
  );
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

function langPath(currentLang) {
  return currentLang ? `/${currentLang}` : '';
}

const isExternalUrl = (buttonUrl) => {
  if (!buttonUrl.startsWith('http')) {
    return false;
  }
  const destinationUrl = new URL(buttonUrl);
  return destinationUrl.host === 'sp-website.onrender.com' ? false : true;
};

export {
  isValidEmail,
  parseUrl,
  parseString,
  dateToString,
  langPath,
  isExternalUrl,
  validateUrl,
};
