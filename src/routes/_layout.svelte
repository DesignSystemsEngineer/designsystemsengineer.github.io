<script>
  import Nav from "humdrum-svelte/src/Nav.svelte";
</script>

<style>
</style>

<Nav
  links={[{ text: 'Home', url: '.' }, { text: 'Blog', url: 'blog' }]} />

<main>
  <slot />
</main>
