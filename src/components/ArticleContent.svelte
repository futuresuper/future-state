<script>
  import MixedTypographyParagraph from "./MixedTypographyParagraph.svelte";
  import { images, quotes } from "../data/content.json";

  export let item;
</script>

{#if item.nodeType === "paragraph"}
  <p class="contained">
    <MixedTypographyParagraph array={item.content} />
  </p>
{/if}
{#if item.nodeType === "heading-2"}
  <h2 class="contained">
    {item.content[0].value}
  </h2>
{/if}
{#if item.nodeType === "heading-3"}
  <h3 class="contained">
    {item.content[0].value}
  </h3>
{/if}
{#if item.nodeType === "hr"}
  <div class="hr" />
{/if}
{#if item.nodeType === "unordered-list"}
  <ul class="contained">
    {#each item.content as listItem}
      <li>
        <MixedTypographyParagraph array={listItem.content[0].content} />
      </li>
    {/each}
  </ul>
{/if}
{#if item.nodeType === "ordered-list"}
  <ol class="contained">
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
      class="quote-container {quotes[item.data.target.sys.id].fullWidth
        ? 'full-width'
        : 'contained'}"
    >
      <h3 class="quote">
        <MixedTypographyParagraph
          array={quotes[item.data.target.sys.id].quoteText[0].content}
        />
      </h3>
      <div class="author-container">
        <p class="author">
          {quotes[item.data.target.sys.id].author}
        </p>
      </div>
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
  .contained {
    grid-column: 2;
  }

  .full-width,
  .hr {
    grid-column: 1 / 4;
  }

  .hr {
    width: 100%;
    height: 1px;
    background-color: var(--black);
    margin: 30px 0;
  }

  .quote-container {
    padding: 30px 0;
  }

  h3.quote {
    font-family: var(--light);
    font-style: italic;
  }

  .author-container {
    display: flex;
    justify-content: center;
  }
  .author {
    padding: 6px 20px 3px 20px;
    border: 1px solid var(--black);
    border-radius: 100px;
    display: inline-block;
  }

  img {
    width: 100%;
    margin: 30px 0;
  }

  h2,
  h3 {
    text-align: center;
    margin-top: 40px;
    margin-bottom: 10px;
  }
</style>
