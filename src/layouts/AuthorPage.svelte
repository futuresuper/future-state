<script lang="ts">
  import type { Article, Author } from "../types/types";

  export let author: Author;
  export let articles: Article[];
</script>

<div>
  <h1>{author.name}</h1>
  {#each articles as article}
    <h3>{article.headline}</h3>
  {/each}
</div>
