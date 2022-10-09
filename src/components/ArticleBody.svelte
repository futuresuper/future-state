<script lang="ts">
  import ArticleContent from "./ArticleContent.svelte";

  export let content: any[];
  export let introParagraph: string | undefined;
</script>

<article>
  <div>share button 3</div>

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
  }

  article {
    padding: 60px 0;
    display: grid;
    grid-template-columns: 3fr 6fr 3fr;
    grid-column-gap: 30px;
  }

  h3 {
    text-align: center;
  }
</style>
