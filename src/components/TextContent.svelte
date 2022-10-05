<script>
  export let textContent;
</script>

{#if textContent.marks && textContent.marks.length > 0}
  {#if textContent.marks.length > 1}
    <strong>
      <i><slot /></i>
    </strong>
  {:else if textContent.marks[0].type === "bold"}
    <strong>
      <slot />
    </strong>
  {:else}
    <i>
      <slot />
    </i>
  {/if}
{:else}
  <slot />
{/if}
