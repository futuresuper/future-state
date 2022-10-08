<script lang="ts">
  import ArticleTeaserGrid from "../components/ArticleTeaserGrid.svelte";
  import ArticleTeaserVertical from "../components/ArticleTeaserVertical.svelte";
  import HeroArticle from "../components/HeroArticle.svelte";
  import MailingListSignup from "../components/MailingListSignup.svelte";
  import type { Article } from "../types/types";

  export let articles: Article[];
</script>

<div>
  <div class="masthead">
    <img id="logo" src="/futurestate-logo.svg" alt="Future State logo" />
    <h3 id="subhead">
      Reporting on climate change and inequality by following the money
    </h3>
  </div>
  <HeroArticle article={articles[1]} />
  <ArticleTeaserGrid>
    {#each articles.slice(0, 3) as article}
      <ArticleTeaserVertical {article} />
    {/each}
  </ArticleTeaserGrid>
  <!-- category selector: inserted via a slot as it's the only component that requires hydration -->
  <slot />
  <MailingListSignup />
</div>

<style>
  #logo {
    padding: 30px 0;
  }

  #subhead {
    text-align: center;
    font-size: 40px;
  }
  .masthead {
    padding: 30px 0 40px 0;
    border-bottom: 1px solid var(--black);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>
