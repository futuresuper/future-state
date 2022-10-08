<script lang="ts">
  import type { Category } from "../types/types";

  export let category: Category;
  export let white: boolean = false;

  const { name } = category;
</script>

<div style="border-color: {white ? 'var(--white)' : 'inherit'}">
  <span style="color: {white ? 'var(--white)' : 'inherit'}">{name}</span>
</div>

<style>
  div {
    display: inline-block;
    font-family: var(--headings);
    border: 1px solid var(--black);
    padding: 4px 16px;
    text-decoration: none;
    font-size: 24px;
    line-height: 150%;
  }
</style>
