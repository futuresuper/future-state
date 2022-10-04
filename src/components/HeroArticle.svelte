<script lang="ts">
  import type { Article } from "../types/types";
  import ArticleDate from "./ArticleDate.svelte";
  import Category from "./CategoryPill.svelte";
  import MinsToRead from "./MinsToReadPill.svelte";

  export let article: Article;

  const { headline, description, publishDate, heroImage, category } = article;
</script>

<article>
  <div
    style="width: 100%; height: 100%; background-image: url({heroImage}); background-size: cover; background-position: center"
  />
  <div id="content">
    <div>
      <div style="margin-bottom: 20px">
        <ArticleDate date={publishDate} />
      </div>
      <Category {category} />
    </div>
    <h3>{headline}</h3>
    <p>{description}</p>
    <MinsToRead />
  </div>
</article>

<style>
  article {
    --image-width: calc(58vw - 90px); /* 5/12 minus grid gap and side padding */
    padding: 60px 0;
    display: grid;
    grid-template-columns: var(--image-width) 1fr;
    height: calc(var(--image-width) * 4 / 5); /* Image aspect ratio of 5:4 */
    grid-column-gap: 30px;
    text-align: center;
    border-bottom: 1px solid var(--black);
  }
  p {
    font-family: "light", serif;
  }
  #content {
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>
