//export const csr = false
export const prerender = true
// export const trailingSlash = 'never' // default

import { redirect } from '@sveltejs/kit'
import { _getPost, _getConf } from '$lib/utils'
import { normalizePathname } from '$lib/paths'

/** @type {import('./$types').LayoutServerLoad} */
export const load = async ({ params, url }) => {
  let [l, p, s] = params.path?.split('/') || []
  let [x, lang, path, sub] = normalizePathname(url.pathname).split('/') || []
  lang = lang || 'en'
  path = path || ''
  sub = sub || ''

	let post, conf

	conf = await _getConf(lang)
  // console.log('conf.thislang',conf.thislang)
  if (!conf.thislang) {
    // no language prefix in the URL (e.g. /contact) means English; must not depend on the
    // module-level sitelang store, which is shared by all requests on the server
		conf = await _getConf('en')
    if (!conf.thislang) return false
    sub = path
    path = lang
    lang = conf.thislang.id || 'en'
	}
  // console.log(conf.topnav)

  post = await _getPost({lang, path, sub})
  //console.log('post',{lang, path, sub},post.blocks[0].components)
	if (post.title && !!post.published) {
    // console.log('...conf', ...conf)
		return {
			post, ...conf
		}
	}
  throw redirect(303, '/'/*'/en'*/)
}
