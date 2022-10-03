<script lang="ts">
  import type { Article } from "../types/types";

  export let categoryName: string;
  export let articles: Article[];
</script>

<div>
  <h1>{categoryName}</h1>
  {#each articles as article}
    <h3>{article.headline}</h3>
  {/each}
</div>
