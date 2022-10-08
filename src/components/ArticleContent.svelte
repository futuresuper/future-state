<script lang="ts">
  import type { Assets } from "../types/types";
  import TextContent from "./TextContent.svelte";

  export let content: any[];
  export let assets: Assets;

  // console.log(assets[content[14].data.target.sys.id]);
</script>

<div class="grid">
  <div />
  <article>
    {#each content as item}
      {#if item.nodeType === "paragraph"}
        <p>
          {#each item.content as textContent}
            <TextContent {textContent}>
              {textContent.value}
            </TextContent>
          {/each}
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
              {#each listItem.content[0].content as textContent}
                <TextContent {textContent}>
                  {textContent.value}
                </TextContent>
              {/each}
            </li>
          {/each}
        </ul>
      {/if}
      {#if item.nodeType === "ordered-list"}
        <ol>
          {#each item.content as listItem}
            <li>
              {#each listItem.content[0].content as textContent}
                <TextContent {textContent}>
                  {textContent.value}
                </TextContent>
              {/each}
            </li>
          {/each}
        </ol>
      {/if}
      {#if item.nodeType === "blockquote"}
        <blockquote>
          {#each item.content[0].content as textContent}
            <TextContent {textContent}>
              {textContent.value}
            </TextContent>
          {/each}
        </blockquote>
      {/if}
      {#if item.nodeType === "embedded-asset-block"}
        <img src={assets[item.data.target.sys.id]} alt="" />
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
