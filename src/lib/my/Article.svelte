<script context="module">
  //import Article from '$lib/my/Article.svelte'
  import Images from '$lib/my/Images.svelte'
  import Cta from '$lib/my/Cta.svelte'
  import Video from '$lib/my/Video.svelte'
  import Links from '$lib/my/Links.svelte'
  import Refs from '$lib/my/Refs.svelte'
  const options = {
		//article: Article,
		images: Images,
		cta: Cta,
		video: Video,
		links: Links,
		refs: Refs,
	};
</script>
<script>
  export let comp
</script>

<article id="{comp.anchor}" style="{comp.background ? comp.background : ``}">
  {#if comp.title}<h2>{comp.title}</h2>{/if}
  {#if comp.subhead}<div><h3>{comp.subhead}</h3></div>{/if}
  {#if comp.text}<div>{@html comp.text}</div>{/if}
  {#if comp.components?.length}
    <section class={comp.framed ? 'framed' : ''}>
      {#each comp.components as c}
      <!--c.lang = comp.lang-->
      <svelte:component this={options[c.type]} comp={c}/>
      {/each}
    </section>
  {/if}
</article>

<style>
  h3 {
    text-align: center;
  }
  .framed {
    background: white;
    padding: var(--halfgap);
    /*border: 2px #fff solid;*/
    /*padding: var(--gap);*/
    
    max-width: 64ch;
    margin-inline: auto;
    margin-block: 3rem;
  }
  .framed :global(figure) {
    margin-top: 2rem;
  }
  .framed :global(*) {
    color: black;
    text-shadow: none;
  }
  .framed :global(figcaption p) {
    hyphens: none;
  }
</style>