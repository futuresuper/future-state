<script lang="ts">
  import type { Article } from "../types/types";

  export let articles: Article[];
</script>

<div>
  {#each articles as article}
    <h2>{article.headline}</h2>
  {/each}
</div>
