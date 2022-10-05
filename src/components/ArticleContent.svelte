<script lang="ts">
  export let content: any[];

  console.log(content[0].nodeType);
  console.log(content[0].content[0].value);
</script>

<div>
  {#each content as item}
    {#if item.nodeType === "paragraph"}
      <p>
        {item.content[0].value}
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
  {/each}
</div>
