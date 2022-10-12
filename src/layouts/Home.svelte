<script lang="ts">
  import MailingListSignup from "../components/MailingListSignup.svelte";
</script>

<div>
  <div class="masthead">
    <img id="logo" src="/futurestate-logo.svg" alt="Future State logo" />
    <h3 id="subhead">
      Reporting on climate change and inequality by following the money
    </h3>
  </div>
  <MailingListSignup />
  <section>
    <h2>Quiz Answers</h2>
    <p>
      1. Gina Rinehart<br />
      2. Greenhouse Gases<br />
      3. 30%<br />
      4. Al Gore<br />
      5. Paul Keating<br />
      6. ICIJ - International Consortium of Investigative Journalists<br />
      7. Norway<br />
      8. 46,000 years<br />
      9. Carbon Dating<br />
      10. 69%<br />
      11. Standing Rock<br />
      12. Coking coal<br />
      13. $3.3 Trillion or $3,300,000,000,000<br />
      14. BP (British Petroleum)<br />
      15. Patagonia<br />
      16. Taylor Swift<br />
      17. 14.1%<br />
      18. Surfers For Climate<br />
      19. Dharawal and Dharug<br />
      20. Tonnes of Carbon Dioxide equivalent<br />
    </p>
  </section>
  <section>
    <h2>Crossword Answers</h2>
    <img
      class="crossword"
      src="/crossword-answers.png"
      alt="Future State Crossword Answers"
    />
  </section>
</div>

<style>
  #logo {
    padding: 30px 0;
  }

  #subhead {
    text-align: center;
    font-size: 40px;
  }

  .masthead {
    padding: 30px 0 40px 0;
    /* border-bottom: 1px solid var(--black); */
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  img.crossword {
    max-width: 535px;
    margin: 30px 0;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 80px;
  }

  h2,
  p {
    text-align: center;
  }

  @media (max-width: 640px) {
    .masthead {
      padding: 10px 0 30px 0;
    }

    #subhead {
      font-size: 16px;
    }
  }
</style>
