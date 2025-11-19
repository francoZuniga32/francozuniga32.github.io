import { S as SITE } from './siteConfig-DqNQiwQv.js';

function formatDate(date, options = {}, locale = SITE.locale) {
  const defaultOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric"
  };
  const formatOptions = { ...defaultOptions, ...options };
  return new Intl.DateTimeFormat(locale, formatOptions).format(date);
}

export { formatDate as f };
