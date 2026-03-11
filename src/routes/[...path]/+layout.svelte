<script context="module">
  import { state, snapto } from '$lib/stores'
  import Components from '$lib/Components.svelte'
  import SubPage from '$lib/SubPage.svelte'
</script>
<script>
  let post
  $: {
    post = $state.post.subpage || $state.post
  }
</script>

<main>
  {#if !!post.hero}
    <header id="header" class="full" style="{post.hero.background ? post.hero.background : ``}" on:click={() => $snapto = '#content'} on:keypress={() => $snapto = '#content'} tabindex="0" role="link">{#if post.herotitle && post.herotitle.trim() != ''}
        <h1>{post.herotitle}</h1>
      {:else if post.hero.title && post.herotitle != ' '}
        <h1>{$state.post.hero.title}</h1>
      {/if}{#each post.hero.components || [] as comp}
        <Components {comp}/>
      {/each}{#if post.subhero}
        {#each post.subhero.components || [] as comp}
          <Components {comp}/>
        {/each}
      {/if}{#if $state.post.subpages && !$state.post.hidesubs}
        <nav>
          <ul>
            {#each $state.post.subpages as sub}
              <li class:active={post.id == sub.id}><SubPage {sub} scrollto="#content"/></li>
            {/each}
          </ul>
        </nav>
      {/if}</header>
  {:else}
    <header id="header" on:click={() => $snapto = '#content'} on:keypress={() => $snapto = '#content'} tabindex="0" role="link">{#if post.herotitle && post.herotitle.trim() != ''}
        <h1>{post.herotitle}</h1>
      {:else if post.title && post.herotitle != ' '}
        <h1>{post.title}</h1>
      {/if}{#if post.subhero}
        {#each post.subhero.components || [] as comp}
          <Components {comp}/>
        {/each}
      {/if}{#if $state.post.subpages && !$state.post.hidesubs}
        <nav>
          <ul>
            {#each $state.post.subpages as sub}
              <li class:active={post.id == sub.id}><SubPage {sub} scrollto="#content"/></li>
            {/each}
          </ul>
        </nav>
      {/if}</header>
  {/if}

  <div id="content"></div>

  {#if $state.post.subpage && $state.post.subpage.subpages && !$state.post.subpage.hidesubs}
    <nav>
      <ul>
        {#each $state.post.subpage.subpages as sub}
          <li class:active={post.id == sub.id}><SubPage {sub} scrollto="#content"/></li>
        {/each}
      </ul>
    </nav>
  {/if}

  <slot />

  {#if post.blocks && $state.post.subpages && !$state.post.hidesubs}
    <nav>
      <h2>{$state.post.title}</h2>
      <ul>
        {#each $state.post.subpages as sub}
          <li class:active={post.id == sub.id}><SubPage {sub} scrollto="#content"/></li>
        {/each}
      </ul>
    </nav>
  {/if}
</main>

<style>
  header {
    padding-top: 9.2rem;
  }
  header:not(:empty) {
    padding-top: 12rem;
    padding-bottom: 1rem;
  }
  header.full:not(:empty) {
    padding-bottom: 6rem;
    height: auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h1 {
    cursor: pointer;
    margin-inline: auto;
  }

  nav {
    padding-block: 3rem;
  }
</style>
