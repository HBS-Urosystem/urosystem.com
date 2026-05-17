<script>
  import { snapto, sitelang } from '$lib/stores'
  import { trackEvent } from '$lib/analytics'
  //console.log({sitelang})
  export let comp//, lang
  let rel = '', target = '', link, scrollto = false

  function _trackDistributorCtaClick(href) {
    if (!href || !href.toLowerCase().includes('distributor')) return
    trackEvent('distributor-cta-click', {
      label: comp?.button || comp?.title || '',
      href,
      path: href,
      location: 'cta'
    })
  }

  function _trackClinicianCtaClick(href) {
    if (!href || !href.toLowerCase().includes('sample')) return
    trackEvent('clinician-cta-click', {
      label: comp?.button || comp?.title || '',
      href,
      path: href,
      location: 'cta'
    })
  }

  function _handleCtaClick() {
    $snapto = `${scrollto}`
    _trackDistributorCtaClick(link)
    _trackClinicianCtaClick(link)
  }
  //console.log(comp.lang, $sitelang)
  $: {
    //console.log('1',/*scrollto,*/ comp.link)
    //if (comp.link && comp.link.startsWith('/')) comp.link = comp.link.substring(1)
    if (comp.link && comp.link.startsWith('/')) {
      link = ($sitelang !== 'en' ? '/' + $sitelang : '') + (comp.link == '/index' ? '' : comp.link)
      //scrollto = false
    } else if (comp.link && comp.link.startsWith('http')) {
      rel = 'noopener'
      target = '_blank'
      link = comp.link
    } else if(comp.link && comp.link.startsWith('#')) {
      link = scrollto = comp.link
    } else {
      if (comp.link == '/index' || !comp.link) {
        comp.link = ''
      } else {
        comp.link = '/' + comp.link
      }
      link = ($sitelang !== 'en' ? '/' + $sitelang : '') + comp.link //+ (scrollto || '')
    }
    //console.log('2',/*scrollto,*/ link) 
  }
</script>

<aside id="{comp.anchor}" style="{comp.background ? comp.background : ``}">
  {#if comp.title}<h2>{comp.title}</h2>{/if}
  {#if comp.text}<div>{@html comp.text}</div>{/if}
  {#if comp.button}
  <div>
    <a on:click|stopPropagation={_handleCtaClick} on:keypress={() => $snapto = `${scrollto}`} href={link} rel={rel} target={target}><button tabindex="-1">{#if comp.icon}<img src="{comp.icon}" aria-hidden="true" alt=""/>{/if}{comp.button}</button></a>
    <!--<a on:click|stopPropagation href={link} rel={rel} target={target}><button tabindex="-1">{#if comp.icon}<img src="{comp.icon}" aria-hidden="true" alt=""/>{/if}{comp.button}</button></a>-->
    {#if comp.below}<p>{comp.below}</p>{/if}
  </div>
  {/if}
</aside>

<style>
  /*button {
    margin-block: 0;
  }*/
  div {
    text-align: center;
    /*margin-bottom: 3.75em;
    margin-top: 2.5rem;*/
  }
  a {
    text-decoration: none;
    margin-top: 1.5rem;
    margin-bottom: 2.5rem;
    display: block;
  }
  p {
    text-align: center;
    margin-top: -1.5rem;
  }
  
</style>