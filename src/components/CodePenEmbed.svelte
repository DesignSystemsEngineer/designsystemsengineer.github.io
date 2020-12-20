<script>
  import { onMount } from "svelte";
  export let slug;
  export let user = "GarthDB";
  export let userName = "Garth Braithwaite";
  export let codepenTitle;
  export let theme = "light";
  export let showCodePen = true;
  onMount(async () => {
    window.__CPEmbed();
  });
</script>

<svelte:head>
  <script async src="https://cpwebassets.codepen.io/assets/embed/ei.js">
  </script>
</svelte:head>

<style>
  .hidden {
    display: none;
  }
</style>
<label>
  <input type="checkbox" bind:checked={showCodePen}>
  show {codepenTitle} CodePen
</label>
<iframe height="265" class:hidden={!showCodePen} style="width: 100%;" scrolling="no" title={codepenTitle} src="https://codepen.io/{user}/embed/{slug}?height=265&theme-id={theme}&default-tab=css,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/{user}/pen/{slug}'>DSE Button Start</a> by {userName}
  (<a href='https://codepen.io/{user}'>@{user}</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
