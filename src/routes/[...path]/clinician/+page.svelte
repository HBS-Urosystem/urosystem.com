<script context="module">
  import { state, /* sitelang,  */snapto, gateway, variables } from '$lib/stores'
  import Components from '$lib/Components.svelte'
</script>
<script>
  let post
  $: {
    post = $state.post.subpage || $state.post
  }
</script>

  {#each post.blocks || [] as block}
    {#if block.published == undefined || (block.published === true || !!$gateway[block.published])}
      <div style="{block.background}">
        {#each block.components || [] as comp}
          <Components {comp}/>
        {/each}
      </div>
    {/if}
  {/each}
