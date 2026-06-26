<script>
  export let comp
</script>

<article id={comp.anchor} style={comp.background || ''}>
  <figure>
    {#if comp.link}
      <a href={comp.link} target={comp.ext ? '_blank' : ''} rel={comp.ext ? 'noopener' : ''}>
        <img loading="lazy" src={comp.src} alt={comp.alt || ''} />
      </a>
    {:else}
      <img loading="lazy" src={comp.src} alt={comp.alt || ''} />
    {/if}
  </figure>
</article>

<style>
  figure {
    margin: 0;
    text-align: center;
  }
  img {
    display: block;
    margin-inline: auto;
    max-height: 4rem;
    max-width: 100%;
  }
</style>
