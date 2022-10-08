<script lang="ts">
  import ArticleContent from "../components/ArticleContent.svelte";
  import ArticleHeader from "../components/ArticleHeader.svelte";
  import type { Article } from "../types/types";

  export let article: Article;
  export let assets: Assets;
  export let quotes: Quotes;

  const {
    headline,
    description,
    publishDate,
    category,
    heroImage,
    content,
    introParagraph,
  } = article;
</script>

<div>
  <ArticleHeader {headline} {publishDate} {category} {heroImage} />
  <ArticleContent {content} {assets} {introParagraph} {quotes} />
</div>
