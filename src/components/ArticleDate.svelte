<script lang="ts">
  import { format } from "date-fns";

  export let date: Date;
  export let white: boolean = false;
</script>

<h4 style="color: {white ? 'var(--white)' : 'inherit'}">
  {format(new Date(date), "dd.MM.yyyy")}
</h4>

<style>
  h4 {
    font-size: 18px;
  }
</style>
