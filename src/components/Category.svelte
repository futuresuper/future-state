<script lang="ts">
  import type { Category } from "../types/types";

  export let category: Category;

  const { name, slug } = category;
</script>

<div>
  <a href="/category/{slug}">{name}</a>
</div>

<style>
  div {
    margin-bottom: 20px;
  }

  a {
    border: 1px solid var(--black);
    padding: 10px 20px;
    text-decoration: none;
  }

  a:hover {
    background-color: var(--black);
    color: var(--white);
  }
</style>
