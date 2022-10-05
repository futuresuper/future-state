<script lang="ts">
  import type { Article } from "../types/types";
  import ArticleDate from "./ArticleDate.svelte";
  import Category from "./CategoryPill.svelte";
  import MinsToRead from "./MinsToReadPill.svelte";

  export let article: Article;

  const { headline, description, publishDate, heroImage, category, slug } =
    article;
</script>

<div>
  <a href="/{slug}">
    <article>
      <div>
        <div style="margin-bottom: 20px">
          <ArticleDate date={publishDate} />
        </div>
        <div style="margin-bottom: 20px">
          <Category {category} />
        </div>
        <img src={heroImage} alt={headline} />
        <h3>{headline}</h3>
        <p>{description}</p>
      </div>
      <MinsToRead />
    </article>
  </a>
</div>

<style>
  a {
    text-decoration: none;
    display: block;
  }
  article {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  img {
    width: 100%;
  }
  p {
    font-family: "light", serif;
  }
</style>
