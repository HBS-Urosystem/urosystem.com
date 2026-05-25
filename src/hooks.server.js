import { building } from '$app/environment';
import { redirect } from '@sveltejs/kit';
import { normalizePathname } from '$lib/paths';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  const pathname = event.url.pathname;
  if (!building && pathname.length > 1 && pathname.endsWith('/')) {
    throw redirect(301, normalizePathname(pathname) + event.url.search + event.url.hash);
  }
  return resolve(event);
}
