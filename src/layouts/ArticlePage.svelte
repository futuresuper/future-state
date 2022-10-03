<script lang="ts">
  import type { Article } from "../types/types";

  export let article: Article;
</script>

<h1>{article.headline}</h1>
<p>{article.description}</p>
