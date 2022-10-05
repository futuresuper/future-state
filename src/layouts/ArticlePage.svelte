<script lang="ts">
  import ArticleContent from "../components/ArticleContent.svelte";
  import ArticleHeader from "../components/ArticleHeader.svelte";
  import type { Article } from "../types/types";

  export let article: Article;

  const { headline, description, publishDate, category, heroImage, content } =
    article;
</script>

<div>
  <ArticleHeader {headline} {publishDate} {category} {heroImage} />
  <ArticleContent {content} />
</div>
