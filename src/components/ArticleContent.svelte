<script>
  import MixedTypographyParagraph from "./MixedTypographyParagraph.svelte";
  import { images, quotes } from "../data/content.json";

  export let item;
</script>

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
{#if item.nodeType === "embedded-entry-block"}
  {#if quotes[item.data.target.sys.id]}
    <div
      class={quotes[item.data.target.sys.id].fullWidth
        ? "fullWidth"
        : "contained"}
    >
      <p>
        <MixedTypographyParagraph
          array={quotes[item.data.target.sys.id].quoteText[0].content}
        />
      </p>
      <p>
        {quotes[item.data.target.sys.id].author}
      </p>
    </div>
  {/if}
  {#if images[item.data.target.sys.id]}
    <img
      class={images[item.data.target.sys.id].fullWidth
        ? "full-width"
        : "contained"}
      src={images[item.data.target.sys.id].href}
      alt={images[item.data.target.sys.id].altText}
    />
  {/if}
{/if}

<style>
  p,
  h2,
  h3,
  ol,
  ul,
  .contained {
    grid-column: 2;
  }

  hr,
  .full-width {
    grid-column: 1 / span 3;
  }

  h2,
  h3 {
    text-align: center;
  }
</style>
