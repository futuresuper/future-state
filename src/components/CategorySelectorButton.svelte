<script lang="ts">
  import type { Category } from "../types/types";

  export let category: Category;
  export let selected: boolean = false;
  export let handleClick: () => void;

  const { name } = category;
</script>

<button on:click={handleClick} class={selected ? "selected" : null}
  >{name}</button
>

<style>
  button {
    border: 1px solid var(--black);
    padding: 20px;
    width: 100%;
    background-color: var(--white);
    cursor: pointer;
    font-family: var(--headings);
    font-size: 24px;
  }

  button:hover {
    text-decoration: underline;
  }

  button.selected {
    background-color: var(--black);
    color: var(--white);
  }
</style>
