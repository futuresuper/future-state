<script>
  import Logo from "../components/images/Logo.svelte";

  const clientSide = !import.meta.env.SSR;

  if (clientSide) {
    // Do something
  }
</script>

<div>
  <Logo />
</div>

<style lang="scss">
  @use "../styles/" as *;

  div {
    margin-bottom: 80px;
  }
</style>
