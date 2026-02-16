<script context="module">
  import "/src/app.postcss"
  import { onMount } from 'svelte'
  import { state, sitelang, cookies, variables } from '$lib/stores'
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
  $: $sitelang = $state.langs.length > 1 ? data.thislang.id : ''
	onMount(() => {
    document.querySelector('html').lang = $state.thislang.id
    document.querySelector('html').dir = $state.thislang.dir
    //console.log($state.post.id.indexOf('index'))
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
  <link rel="canonical" href="{variables.siteurl[$state.post.canonical] || _siteurl}/en{!!$state.post.subpage && $state.post.subpage.slug !== '.' ? ('/' + $state.post.subpage.path) : ('/' + $state.post.path || '')}"/>

  <!-- https://sveltekit.io/blog/structured-data -->
  <script type="application/ld+json">
    {
      "@context": "http://schema.org",
      "@type": "Organization",
      "url": "https://www.urosystem.com",
      "logo": "https://www.urosystem.com/android-chrome-512x512.png",
      "headline": "Urosystem • Innovative Treatment of Lower Urinary Tract Symptoms",
      "sameAs": [
        "https://www.youtube.com/@urosystemltd3699/about",
        "https://www.linkedin.com/company/urosystem-inc"
      ]
    }
  </script>

  {#if !dev}
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-T4KTKF5');
      function gtag(){dataLayer.push(arguments);}
      gtag('consent', 'default', {
        'ad_storage': 'denied',
        'analytics_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied'
      });
    </script>
    
    {#if _site == '_us'}
      <script>
        /*window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}*/
        gtag('js', new Date());
        //gtag('config', 'AW-433475160');
        gtag('config', 'G-KREFNHDNH0');
      </script>
    {/if}
    {#if _site == '_ud'}
      <script>
        /*window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}*/
        gtag('js', new Date());
        //gtag('config', 'AW-433475160');
        gtag('config', 'G-1SZ43L7KWV');
      </script>
    {/if}
      
    {#if !!$cookies}
      <script>
        /*window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}*/
        gtag('consent', 'update', {
          // 'ad_storage': 'granted',
          'analytics_storage': 'granted',
          // 'ad_user_data': 'granted',
          // 'ad_personalization': 'granted'
        });
      </script>

      <!-- {#if $state.post.id.indexOf('index') == 0} -->
        <!-- Event snippet for Oldalmegtekintés conversion page --> 
        <!-- <script> gtag('event', 'conversion', {'send_to': 'AW-433475160/DN5ECOK9rvwCENic2c4B'}); </script> -->
      <!-- {/if} -->
    {:else}
      <script>
        /*window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}*/
        gtag('consent', 'update', {
          // 'ad_storage': 'denied',
          'analytics_storage': 'denied',
          // 'ad_user_data': 'denied',
          // 'ad_personalization': 'denied'
        });
      </script>
    {/if}

    <!--{#if !!$cookies}-->
      <!--{#if $moved}-->
    
      <!-- Facebook Pixel Code -->
      <!--<script>
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '699963074016051');
        fbq('track', 'PageView');
      </script>
      <noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=551710929579793&ev=PageView&noscript=1" alt="fb-pixel"/></noscript>-->
      <!-- End Facebook Pixel Code -->
      
      <!--{/if}--> <!-- $moved -->
      
    <!--{/if}-->
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

{#each $state.langs || [] as lang}
  {#if !!lang.active}
    <link rel="alternate" href="{_siteurl}/{lang.id}/{!!$state.post.subpage && $state.post.slug !== '.' ? $state.post.path : ($state.post.path || '')}" hreflang="{lang.id}" />
    
    <a rel="alternate" href="/{lang.id}/{!!$state.post.subpage && $state.post.subpage.slug !== '.' ? $state.post.subpage.path : ($state.post.path || '')}" hidden aria-hidden="true">
    </a>
  {/if}
{/each}

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