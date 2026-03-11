<script>
  import { state, gateway } from '$lib/stores'
  import Components from '$lib/Components.svelte'

  let post
  $: post = $state.post.subpage || $state.post
</script>

<main>
  <div id="content"></div>

  {#each post.blocks || [] as block}
    {#if block.published == undefined || (block.published === true || !!$gateway[block.published])}
      <div style="{block.background}">
        {#each block.components || [] as comp}
          <Components {comp}/>
        {/each}
      </div>
    {/if}
  {/each}
</main>