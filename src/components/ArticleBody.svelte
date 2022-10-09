<script lang="ts">
  import ArticleContent from "./ArticleContent.svelte";
  import CopyShareButtons from "./CopyShareButtons.svelte";

  export let content: any[];
  export let introParagraph: string | undefined;
</script>

<article>
  <div class="hide-on-mobile">
    <slot />
  </div>
  {#if introParagraph}
    <h3>{introParagraph}</h3>
  {/if}
  {#each content as item}
    <ArticleContent {item} />
  {/each}
</article>

<style>
  h3 {
    font-family: var(--light), serif;
    margin-bottom: 40px;
    text-align: center;
  }

  article {
    padding: 60px 0;
    display: grid;
    grid-template-columns: 3fr 6fr 3fr;
    grid-column-gap: 30px;
  }

  @media (max-width: 900px) {
    .hide-on-mobile {
      display: none;
    }

    article {
      padding: 60px 0;
      display: grid;
      grid-template-columns: 100%;
      grid-column-gap: 30px;
    }

    h3 {
      font-size: 24px;
    }
  }
</style>
