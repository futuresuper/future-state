<script lang="ts">
  import type { Article } from "../types/types";
  import ArticleDate from "./ArticleDate.svelte";
  import Category from "./CategoryPill.svelte";

  export let article: Article;

  const { headline, description, publishDate, heroImage, category, slug } =
    article;
</script>

<a href="/{slug}">
  <article>
    <img src={heroImage} alt={headline} />
    <h3>{headline}</h3>
    <div class="category">
      <Category {category} />
    </div>
    <p>{description}</p>
    <div class="date">
      <ArticleDate date={publishDate} />
    </div>
  </article>
</a>

<style>
  a {
    text-decoration: none;
  }
  article {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
    margin-bottom: 30px;
  }
  img {
    grid-row: span 2;
  }
  .date {
    text-align: right;
    align-self: flex-end;
  }
  p {
    font-family: "light", serif;
    margin-bottom: 0;
    align-self: flex-end;
  }
  .category {
    justify-self: flex-end;
  }
</style>
