<script lang="ts">
  import type { Article, Category } from "../types/types";
  import ArticleTeaserHorizontal from "./ArticleTeaserHorizontal.svelte";
  import CategorySelectorButton from "./CategorySelectorButton.svelte";

  export let articles: Article[];
  export let categories: Category[];

  let selectedCategory = "all";
</script>

<section>
  <div
    class="category-selectors"
    style="grid-template-columns: repeat({categories.length + 1}, 1fr)"
  >
    <CategorySelectorButton
      category={{
        name: "All",
        slug: "all",
      }}
      selected={selectedCategory === "all"}
      handleClick={() => (selectedCategory = "all")}
    />
    {#each categories as category}
      <CategorySelectorButton
        {category}
        selected={selectedCategory === category.slug}
        handleClick={() => (selectedCategory = category.slug)}
      />
    {/each}
  </div>
  {#each articles as article}
    {#if selectedCategory === article.category.slug || selectedCategory === "all"}
      <ArticleTeaserHorizontal {article} />
    {/if}
  {/each}
</section>

<style>
  section {
    padding-bottom: 40px;
  }

  .category-selectors {
    padding: 60px 0;
    display: grid;
    grid-column-gap: 10px;
  }
</style>
