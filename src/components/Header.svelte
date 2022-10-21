<script>
  import { format } from "date-fns";
  import { onMount } from "svelte";

  export let hideLogo = false;

  let date;

  const clientSide = !import.meta.env.SSR;

  console.log("hello");
  if (clientSide) {
    console.log("CLIENT SIDE");
  }

  onMount(async () => {
    console.log("MOUNTED");
    date = format(new Date(), "dd.MM.yyyy");
    console.log("date", date);
  });
</script>

<header>
  <h4>Today&nbsp;&nbsp;|&nbsp;&nbsp;{date}</h4>
  {#if !hideLogo}
    <div class="logo">
      <a href="/">
        <img id="logo" src="/futurestate-logo.svg" alt="Future State logo" />
      </a>
    </div>
  {:else}
    <div class="hide-mobile" />
  {/if}
  <h4 style="text-align: right;">
    Global Temperature&nbsp;&nbsp;|&nbsp;&nbsp;+1.01˚C Since 1880
  </h4>
</header>

<style>
  header {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    border-bottom: 1px solid var(--black);
    padding-bottom: 20px;
  }

  h4 {
    font-size: 16px;
  }

  .logo {
    width: 200px;
    justify-self: center;
  }

  @media (max-width: 700px) {
    header {
      grid-template-columns: 1fr 1fr;
      border-bottom: 0;
      padding-bottom: 0;
    }

    .hide-mobile {
      display: none;
    }

    .logo {
      padding-top: 20px;
      justify-self: center;
      grid-row: 2;
      grid-column: span 2;
    }
  }

  @media (max-width: 460px) {
    h4 {
      font-size: 13px;
    }
  }
</style>
