<script context="module">
  import "/src/app.postcss"
  import { onMount } from 'svelte'
  import { state, sitelang, cookies, sample, variables } from '$lib/stores'
  import { dev/*, browser, amp, prerendering*/ } from '$app/environment'
  import Nav from '$lib/Nav.svelte'
  import Footer from '$lib/Footer.svelte'
  import Cookies from '$lib/Cookies.svelte'

  const _site = variables.site
  const _siteurl = variables.siteurl[_site] || 'https://www.urosystem.com'
</script>

<script>
  export let data
  $: $state = data
  // $: console.log($state.langs)
  $: $sitelang = $state.langs.length > 1 ? data.thislang.id : 'en'
	onMount(() => {
    document.querySelector('html').lang = $state.thislang.id
    document.querySelector('html').dir = $state.thislang.dir
    const params = new URLSearchParams(window.location.search)
    if (params.has('email')) {
      $sample = 'email'
    } else if (params.has('mail')) {
      $sample = 'mail'
    } else if (params.has('app')) {
      $sample = 'app'
    } else if (params.has('reset')) {
      $sample = false
    }
	});
</script>

<svelte:head>
  {#if $state.post.subpage}
    <title>{$state.post.subpage.title}</title>
    <meta name="description" content="{$state.post.subpage.description}">
    <meta name="keywords" content="{$state.post.subpage.keywords}">
    {#if $state.post.subpage.meta}
      {#each $state.post.subpage.meta as meta}
        <meta name={meta.name} content={meta.content}>
      {/each}
    {/if}
  {:else}
    <title>{$state.post.title}</title>
    <meta name="description" content="{$state.post.description}">
    <meta name="keywords" content="{$state.post.keywords}">
    {#if $state.post.meta}
      {#each $state.post.meta as meta}
        <meta name={meta.name} content={meta.content}>
      {/each}
    {/if}
  {/if}
  <link rel="canonical" href="{variables.siteurl[$state.post.canonical] || _siteurl}{!!$state.post.subpage && $state.post.subpage.slug !== '.' ? ('/' + $state.post.subpage.path) : ('/' + $state.post.path || '')}"/>

  <!-- https://sveltekit.io/blog/structured-data -->
  {#if _site == '_us'}
  <script type="application/ld+json">
    {
      "@context": "http://schema.org",
      "@type": "Organization",
      "url": "https://www.urosystem.com",
      "logo": "https://www.urosystem.com/android-chrome-512x512.png",
      "name": "UroSystem",
      "slogan": "UroSystem • Innovative Treatment of Lower Urinary Tract Symptoms",
      "sameAs": [
        "https://www.youtube.com/@urosystemltd3699/about",
        "https://www.linkedin.com/company/urosystem-inc"
      ]
    }
  </script>
  {/if}
  {#if _site == '_ud'}
  <script type="application/ld+json">
    {
      "@context": "http://schema.org",
      "@type": "Product",
      "url": "https://www.urodapter.com",
      "logo": "https://www.urodapter.com/android-chrome-512x512.png",
      "name": "UroDapter®",
      "slogan": "UroDapter® • Replacing Catheter in the Field of Bladder Instillation",
      "manufacturer": {
        "@type": "Organization",
        "url": "https://www.urosystem.com",
        "name": "UroSystem"
      },
      "sameAs": [
        "https://www.youtube.com/@urosystemltd3699/about",
        "https://www.linkedin.com/company/urosystem-inc"
      ]
    }
  </script>
  {/if}

  {#if !dev}
  <script async defer src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
  <noscript>
    <img
      src="https://queue.simpleanalyticscdn.com/noscript.gif"
      alt=""
      referrerpolicy="no-referrer-when-downgrade"
    />
  </noscript>
  {/if}
  
  {#if _site == '_ud' || _site == '_na'}
    <style>
      body {
        --pale: var(--pale-green);
        --light: var(--light-green);
        --mid: var(--mid-green);
        /* --dark: var(--mid-green); */
        --pale-75: var(--pale-green-75);
        --light-75: var(--light-green-75);
        --mid-75: var(--mid-green-75);
        /* --dark-75: var(--mid-green-75); */

        --grad-pale: var(--grad-pale-green);
        --grad-light: var(--grad-light-green);
        --grad-dark: var(--grad-dark-green);
        --grad-light-75: var(--grad-light-green-75);
        --grad-dark-75: var(--grad-dark-green-75);
      }
      main {
        background-color: var(--mid);
        background-position: 50% 50%;
        background-size: cover;
      }
    </style>
  {/if}
</svelte:head>

<Nav/>

<slot/>

<Footer/>
<Cookies/>

<!-- {#each $state.langs || [] as lang} -->
  {#if $sitelang == 'hu' && $state.post.path != 'urostill'}
    <link rel="alternate" href="{_siteurl}/{!!$state.post.subpage && $state.post.slug !== '.' ? $state.post.path : ($state.post.path || '')}" hreflang="en" />
  {:else if $sitelang == 'en'}
    <link rel="alternate" href="{_siteurl}/hu/{!!$state.post.subpage && $state.post.slug !== '.' ? $state.post.path : ($state.post.path || '')}" hreflang="hu" />
  {/if}
<!-- {/each} -->

<!--{#if !dev && !!$cookies}
<script>
  _linkedin_partner_id = "6306329";
  window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
  window._linkedin_data_partner_ids.push(_linkedin_partner_id);
  </script><script>
  (function(l) {
  if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
  window.lintrk.q=[]}
  var s = document.getElementsByTagName("script")[0];
  var b = document.createElement("script");
  b.type = "text/javascript";b.async = true;
  b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
  s.parentNode.insertBefore(b, s);})(window.lintrk);
</script>
<noscript>
  <img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=6306329&fmt=gif" />
</noscript>
{/if}-->