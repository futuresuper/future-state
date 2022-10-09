<script>
  import { copyTextToClipboard } from "../scripts/clipboard";

  const handleCopy = () => {
    copyTextToClipboard(window.location.href);
    alert("Copied ✅");
  };
</script>

<div class="copy-share">
  <div on:click={() => handleCopy()}>
    <img src="/copy.svg" alt="Copy icon" />
    Copy
  </div>
</div>

<style>
  .copy-share {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    cursor: pointer;
  }

  img {
    margin-bottom: 10px;
  }

  .copy-share > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>
