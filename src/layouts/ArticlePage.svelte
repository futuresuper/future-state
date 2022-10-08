<script lang="ts">
  import ArticleBody from "../components/ArticleBody.svelte";
  import ArticleHeader from "../components/ArticleHeader.svelte";
  import type { Article } from "../types/types";

  export let article: Article;

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
  <ArticleBody {content} {introParagraph} />
</div>
