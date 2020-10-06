<script>
  import Page from "@dsengineer/svelte/lib/components/Page.svelte";
  import Nav from "../components/Nav.svelte";
  import "@dsengineer/tokens/build/css/globals.css";
  import "@dsengineer/tokens/build/css/medium.css";
  export let segment;
</script>

<style>
  :root {
    margin: 0;
    height: 100%;
  }
  :global(.sitePage) {
    min-height: 100vh;
  }
</style>

<svelte:head>
  <link rel="stylesheet" href="https://use.typekit.net/aid2ere.css" />
  <style>
    body {
      min-height: 100vh;
    }
    #sapper {
      min-height: 100vh;
    }
  </style>
</svelte:head>

<Page class="sitePage">
  <Nav {segment} />
  <slot />
</Page>
