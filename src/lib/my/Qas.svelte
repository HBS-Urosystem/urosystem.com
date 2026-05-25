<script>
  export let comp

  const isHeadingItem = (item) => item?.subhead && !item?.q && !item?.text
</script>

<article id={comp.anchor} style="{comp.background ? comp.background : ``}">
  {#if comp.title}<h2>{comp.title}</h2>{/if}
  <div>
    {#if comp.fixed}
      {#each comp.items || [] as item}
        {#if isHeadingItem(item)}
          <div class="mid-subhead"><h3>{item.subhead}</h3></div>
        {:else}
          <h3 id={item.anchor}>{item.q}</h3>
          {@html item.text}
        {/if}
      {/each}
    {:else}
      {#each comp.items || [] as item}
        {#if isHeadingItem(item)}
          <div class="mid-subhead"><h3>{item.subhead}</h3></div>
        {:else}
          <details>
            <summary><h3 id={item.anchor}>{item.q}</h3></summary>
            {@html item.text}
          </details>
        {/if}
      {/each}
    {/if}
  </div>
</article>

<style>
  details {
    margin: 4em 2rem;
    margin-inline-start: 2rem;
  }
  /*[open] summary {
    list-style: none;
  }*/
  :not([open]) summary h3 {
    display: inline;
    /*color: var(--pale);*/
  }
  .mid-subhead {
    text-align: center;
  }
  /*h3 {
    display: inline;
  }*/
</style>