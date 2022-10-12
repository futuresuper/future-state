<div>
  <h2>Future State will be live soon.</h2>
  <p>Enter your email to stay up to date when we launch</p>
  <form name="future-state-mailing-list" method="POST" data-netlify="true">
    <input type="email" name="email" placeholder="Your email address" />
    <button type="submit">Submit</button>
  </form>
</div>

<style>
  h2 {
    text-align: center;
  }

  div {
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border-top: 1px solid var(--black); */
  }

  p {
    font-family: var(--light);
    max-width: 260px;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: row;
    margin-top: 60px;
  }

  input {
    font-family: var(--headings);
    font-size: 24px;
    padding: 20px;
    width: 400px;
  }

  button {
    margin-left: 30px;
    display: inline-block;
    border: 1px solid var(--black);
    padding: 20px 80px;
    background-color: var(--white);
    cursor: pointer;
    font-family: var(--headings);
    font-size: 24px;
  }

  button:hover {
    background-color: var(--black);
    color: var(--white);
  }

  @media (max-width: 840px) {
    form {
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    input {
      width: calc(100% - 42px);
      text-align: center;
    }

    button {
      margin: 10px 0 0 0;
      width: 100%;
    }
  }
</style>
