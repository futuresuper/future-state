<script lang="ts">
  import type { Category } from "../types/types";

  export let category: Category;
  export let white: boolean = false;

  const { name, slug } = category;
</script>

<div style="border-color: {white ? 'var(--white)' : 'inherit'}">
  <span style="color: {white ? 'var(--white)' : 'inherit'}">{name}</span>
</div>

<style>
  div {
    margin-bottom: 20px;
    border: 1px solid var(--black);
    padding: 10px 20px;
    text-decoration: none;
  }
</style>
