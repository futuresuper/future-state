<div>
  <slot />
</div>

<style>
  div {
    padding: 60px 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
    border-bottom: 1px solid var(--black);
  }

  @media (max-width: 740px) {
    div {
      grid-template-columns: 1fr 1fr;
      grid-row-gap: 60px;
    }
  }

  @media (max-width: 620px) {
    div {
      grid-template-columns: 100%;
    }
  }
</style>
