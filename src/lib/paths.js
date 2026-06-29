/** Remove trailing slashes except on the site root. */
export function normalizePathname(pathname) {
  if (!pathname || pathname === '/') return '/';
  const normalized = pathname.replace(/\/+$/, '');
  return normalized || '/';
}

/** Internal path with optional non-English language prefix. */
export function sitePath(lang, ...segments) {
  const parts = [];
  if (lang && lang !== 'en') {
    const id = String(lang).replace(/^\/+|\/+$/g, '');
    if (id) parts.push(id);
  }
  for (const seg of segments) {
    if (seg == null || seg === '') continue;
    const s = String(seg).replace(/^\/+|\/+$/g, '');
    if (s) parts.push(s);
  }
  if (parts.length === 0) return '/';
  return '/' + parts.join('/');
}

/**
 * Build an internal href from a CMS link value.
 * @param {string} lang
 * @param {string} link
 * @param {string} [pagePath] current page path for hash-only links
 */
export function siteHref(lang, link, pagePath = '') {
  if (!link) return sitePath(lang);
  if (link.startsWith('http')) return link;
  if (link.startsWith('/')) {
    const i = link.indexOf('#');
    const path = normalizePathname(i >= 0 ? link.slice(0, i) : link);
    return i >= 0 ? path + link.slice(i) : path;
  }
  if (link.startsWith('#')) {
    return sitePath(lang, pagePath) + link;
  }
  const i = link.indexOf('#');
  if (i >= 0) {
    return sitePath(lang, link.slice(0, i)) + link.slice(i);
  }
  return sitePath(lang, link);
}
