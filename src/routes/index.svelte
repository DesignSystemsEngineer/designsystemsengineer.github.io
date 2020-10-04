<script>
  import Button from "humdrum-svelte/src/Button.svelte";
  import Heading from "humdrum-svelte/src/Heading.svelte";
  import "humdrum-svelte/src/css/humdrum-ui.css";
</script>

<style>
  h1,
  figure,
  p {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  figure {
    margin: 0 0 1em 0;
  }

  img {
    width: 100%;
    max-width: 400px;
    margin: 0 0 1em 0;
  }

  p {
    margin: 1em auto;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>
<Heading>Design Systems Engineer</Heading>
<p>
  Sign up for my weekly newsletter <a
    href="https://backyard-studio.ck.page/ad40317bf0">here</a>.
</p>
<Button labelText="Garth"/>

<form
  action="https://app.convertkit.com/forms/827850/subscriptions"
  class="seva-form formkit-form"
  method="post"
  data-sv-form="827850"
  data-uid="ad40317bf0"
  data-format="inline"
  data-version="5"
  min-width="400 500 600 700">
  <input
    type="text"
    class="formkit-input"
    name="email_address"
    placeholder="Your email address"
    required="" />
  <input type="submit" value="Subscribe" />
</form>
