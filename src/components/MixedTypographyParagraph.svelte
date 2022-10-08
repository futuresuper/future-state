<script>
  import TextContent from "./TextContent.svelte";

  export let array;
</script>

{#each array as textContent}
  <TextContent {textContent}>
    {textContent.value}
  </TextContent>
{/each}
