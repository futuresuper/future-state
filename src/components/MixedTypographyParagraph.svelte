<script>
  import TextContent from "./TextContent.svelte";

  export let array;

  console.log(array[1]);
</script>

{#each array as textContent}
  {#if textContent.nodeType === "hyperlink"}
    <a href={textContent.data.uri}>
      {#each textContent.content as nestedTextContent}
        <TextContent textContent={nestedTextContent}>
          {nestedTextContent.value}
        </TextContent>
      {/each}
    </a>
  {:else}
    <TextContent {textContent}>
      {textContent.value}
    </TextContent>
  {/if}
{/each}
