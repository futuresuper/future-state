<script lang="ts">
  import type { Article } from "../types/types";
  import ArticleDate from "./ArticleDate.svelte";
  import Category from "./CategoryPill.svelte";
  import MinsToRead from "./MinsToReadPill.svelte";

  export let article: Article;

  const { headline, description, publishDate, heroImage, category } = article;
</script>

<article>
  <img src={heroImage} alt={headline} />
  <div class="text">
    <div class="col">
      <h3>{headline}</h3>
      <p>{description}</p>
    </div>
    <div class="col" style="align-items: flex-end;">
      <ArticleDate date={publishDate} />
      <Category {category} />
    </div>
  </div>
</article>

<style>
  article {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-column-gap: 30px;
    margin-bottom: 30px;
  }
  p {
    font-family: "light", serif;
  }
  .text {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .col {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>
