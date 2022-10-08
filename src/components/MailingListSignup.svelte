<div>
  <h2>Sign up for updates</h2>
  <p>Enter your email to stay up to date with the latest from Future State</p>
  <form name="future-state-mailing-list" method="POST" data-netlify="true">
    <input type="email" name="email" placeholder="Your email address" />
    <button type="submit">Submit</button>
  </form>
</div>

<style>
  div {
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top: 1px solid var(--black);
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
</style>
