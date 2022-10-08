<script lang="ts">
  import type { Assets, Quotes } from "../types/types";
  import MixedTypographyParagraph from "./MixedTypographyParagraph.svelte";
  import TextContent from "./TextContent.svelte";

  export let content: any[];
  export let introParagraph: string | undefined;
  export let assets: Assets;
  export let quotes: Quotes;

  // NOTES FOR NEXT TIME
  /*
    Disalow adding asset in CMS and instead link to Quote or Image entry.

    Have option in each for 'Full width'.

    Use the Title in asset for ALT tag
  */
</script>

<div class="grid">
  <div />
  <article>
    {#if introParagraph}
      <h3>{introParagraph}</h3>
    {/if}
    {#each content as item}
      {#if item.nodeType === "paragraph"}
        <p>
          <MixedTypographyParagraph array={item.content} />
        </p>
      {/if}
      {#if item.nodeType === "heading-2"}
        <h2>
          {item.content[0].value}
        </h2>
      {/if}
      {#if item.nodeType === "heading-3"}
        <h3>
          {item.content[0].value}
        </h3>
      {/if}
      {#if item.nodeType === "hr"}
        <hr />
      {/if}
      {#if item.nodeType === "unordered-list"}
        <ul>
          {#each item.content as listItem}
            <li>
              <MixedTypographyParagraph array={listItem.content[0].content} />
            </li>
          {/each}
        </ul>
      {/if}
      {#if item.nodeType === "ordered-list"}
        <ol>
          {#each item.content as listItem}
            <li>
              <MixedTypographyParagraph array={listItem.content[0].content} />
            </li>
          {/each}
        </ol>
      {/if}
      {#if item.nodeType === "blockquote"}
        <blockquote>
          <MixedTypographyParagraph array={item.content[0].content} />
        </blockquote>
      {/if}
      {#if item.nodeType === "embedded-asset-block"}
        <img src={assets[item.data.target.sys.id]} alt="" />
      {/if}
      {#if item.nodeType === "embedded-entry-block"}
        <p>
          <MixedTypographyParagraph
            array={quotes[item.data.target.sys.id].quoteText[0].content}
          />
        </p>
        <p>
          {quotes[item.data.target.sys.id].author}
        </p>
      {/if}
    {/each}
  </article>
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: 3fr 6fr 3fr;
    grid-column-gap: 30px;
  }

  article {
    padding: 60px 0;
  }

  h2,
  h3 {
    text-align: center;
  }
</style>
