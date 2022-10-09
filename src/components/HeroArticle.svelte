<script lang="ts">
  import type { Article } from "../types/types";
  import ArticleDate from "./ArticleDate.svelte";
  import Category from "./CategoryPill.svelte";
  import MinsToRead from "./MinsToReadPill.svelte";

  export let article: Article;

  const { headline, description, publishDate, heroImage, category, slug } =
    article;
</script>

<a href="/{slug}">
  <article>
    <div
      class="desktop"
      style="width: 100%; height: 100%; background-image: url({heroImage.href}); background-size: cover; background-position: center"
    />
    <img class="mobile" src={heroImage.href} alt={heroImage.altText} />
    <div id="content">
      <div>
        <div style="margin-bottom: 10px">
          <ArticleDate date={publishDate} />
        </div>
        <div class="category"><Category {category} /></div>
      </div>
      <h2>{headline}</h2>
      <p>{description}</p>
      <MinsToRead />
    </div>
  </article>
</a>

<style>
  .mobile {
    display: none;
  }
  a {
    text-decoration: none;
  }
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
    font-size: 30px;
    padding: 0 30px;
  }
  h2 {
    font-size: 50px;
  }
  #content {
    padding: 0 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media (max-width: 1200px) {
    h2 {
      font-size: 40px;
    }
    p {
      font-size: 20px;
    }
  }

  @media (max-width: 1000px) {
    h2 {
      font-size: 30px;
    }
  }
</style>
