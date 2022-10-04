<script lang="ts">
  import { format } from "date-fns";

  export let date: Date;
</script>

<h4>{format(new Date(date), "dd.MM.yyyy")}</h4>

<style>
  h4 {
    font-size: 18px;
  }
</style>
