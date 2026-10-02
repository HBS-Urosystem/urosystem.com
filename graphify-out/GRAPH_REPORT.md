# Graph Report - urosystem.kit1  (2026-10-02)

## Corpus Check
- 1204 files · ~586,103 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1389 nodes · 272 edges · 1198 communities (1190 shown, 8 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 5 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `13810ed2`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 1195|Community 1195]]
- [[_COMMUNITY_Community 1196|Community 1196]]

## God Nodes (most connected - your core abstractions)
1. `$lib/Components.svelte` - 5 edges
2. `scripts` - 4 edges
3. `_getPost()` - 4 edges
4. `load()` - 4 edges
5. `/src/lib/sanityClient.js` - 4 edges
6. `POST()` - 4 edges
7. `create-svelte` - 4 edges
8. `normalizePathname()` - 3 edges
9. `siteHref()` - 3 edges
10. `_getBlock()` - 3 edges

## Surprising Connections (you probably didn't know these)
- `load()` --calls--> `normalizePathname()`  [INFERRED]
  src/routes/+layout.server.js → src/lib/paths.js
- `GET()` --calls--> `getSanityImageUrl()`  [INFERRED]
  src/routes/[...path]/events/rss.xml/+server.js → src/lib/helpers.js
- `load()` --calls--> `_getConf()`  [INFERRED]
  src/routes/+layout.server.js → src/lib/utils.js
- `load()` --calls--> `_getPost()`  [INFERRED]
  src/routes/+layout.server.js → src/lib/utils.js
- `buildNote()` --calls--> `GET()`  [INFERRED]
  src/routes/api/pipedrive/+server.js → src/routes/[...path]/events/rss.xml/+server.js

## Communities (1198 total, 8 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.09
Nodes (13): @sapper/app, $lib/Components.svelte, $lib/config, svelte/easing, deriveClass(), dispatch, updateClass(), $lib/paths (+5 more)

### Community 1 - "Community 1"
Cohesion: 0.07
Nodes (27): devDependencies, autoprefixer, daisyui, @dansvel/vite-plugin-markdown, date-fns, lodash, marked, mdsvex (+19 more)

### Community 2 - "Community 2"
Cohesion: 0.12
Nodes (10): carous, d, futureEvents, pastEvents, $lib/helpers.js, /src/lib/sanityClient.js, $lib/SubscribeActivecamp.svelte, svelte-scrollto (+2 more)

### Community 3 - "Community 3"
Cohesion: 0.10
Nodes (10): /src/app.postcss, $lib/Cookies.svelte, $app/environment, $lib/Footer.svelte, $lib/Nav.svelte, $app/navigation, svelte-portal/src/Portal.svelte, svelte/transition (+2 more)

### Community 4 - "Community 4"
Cohesion: 0.16
Nodes (16): normalizePathname(), siteHref(), sitePath(), allblocks, allconfs, allposts, _findBlock(), _findPost() (+8 more)

### Community 5 - "Community 5"
Cohesion: 0.17
Nodes (14): $lib/my/ACmail.svelte, $lib/my/Article.svelte, $lib/my/B2Bmail.svelte, $lib/my/Buttons.svelte, $lib/my/BuyButton.svelte, $lib/my/Cta.svelte, $lib/my/Form.svelte, $lib/Grid.svelte (+6 more)

### Community 6 - "Community 6"
Cohesion: 0.14
Nodes (12): dependencies, @sanity/client, @sanity/image-url, svelte-portal, name, private, scripts, build (+4 more)

### Community 7 - "Community 7"
Cohesion: 0.22
Nodes (9): builder, getSanityImageUrl(), client, config, buildNote(), pipedrivePost(), pipedriveToken(), POST() (+1 more)

### Community 8 - "Community 8"
Cohesion: 0.20
Nodes (8): Agent Editing Rules, Architecture Overview, CMS and Routing Conventions, Current Operating Constraints, Environment Variables, Quick Start, Repository Map, Verification Checklist For Agent Changes

### Community 9 - "Community 9"
Cohesion: 0.47
Nodes (4): $app/forms, _prefillSample(), _setCheckboxByValue(), _setRadioByValue()

### Community 10 - "Community 10"
Cohesion: 0.40
Nodes (4): Building, create-svelte, Creating a new project, Developing

### Community 11 - "Community 11"
Cohesion: 1.00
Nodes (3): POST(), shopifyWebhookSecret(), verifyHmac()

### Community 1195 - "Community 1195"
Cohesion: 0.40
Nodes (4): moved, snapto, state, variables

## Knowledge Gaps
- **85 isolated node(s):** `config`, `config`, `name`, `version`, `private` (+80 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `svelte` connect `Community 3` to `Community 1`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `Community 1` to `Community 3`, `Community 6`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **What connects `config`, `config`, `name` to the rest of the system?**
  _85 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.09247311827956989 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.07407407407407407 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.12280701754385964 - nodes in this community are weakly interconnected._
- **Should `Community 3` be split into smaller, more focused modules?**
  _Cohesion score 0.10144927536231885 - nodes in this community are weakly interconnected._