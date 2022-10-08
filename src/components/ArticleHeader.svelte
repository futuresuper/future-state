<script lang="ts">
  import type { Category, HeroImage } from "../types/types";
  import ArticleDate from "./ArticleDate.svelte";
  import CategoryPill from "./CategoryPill.svelte";

  export let publishDate: Date;
  export let headline: string;
  export let category: Category;
  export let heroImage: HeroImage;
</script>

<div class="article-header">
  <div class="background" style="background-image: url({heroImage.href})" />
  <div class="foreground">
    <div style="margin-bottom: 10px">
      <ArticleDate date={publishDate} white />
    </div>
    <CategoryPill {category} white />
    <h1>{headline}</h1>
  </div>
</div>

<style>
  .article-header {
    --width: calc(100vw - 60px);
    position: relative;
    width: 100%;
    height: calc(var(--width) * 9.1 / 16);
    padding: 30px 0;
    border-bottom: 1px solid var(--black);
  }
  .background {
    --width: calc(100vw - 60px);
    position: absolute;
    width: 100%;
    height: calc(var(--width) * 9.1 / 16);
    background-position: center;
    background-size: cover;
    filter: brightness(0.5);
  }
  .foreground {
    --width: calc(100vw - 60px);
    position: absolute;
    width: 100%;
    height: calc(var(--width) * 9.1 / 16);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h1 {
    color: var(--white);
    max-width: 800px;
    text-align: center;
    margin: 30px;
  }
</style>
