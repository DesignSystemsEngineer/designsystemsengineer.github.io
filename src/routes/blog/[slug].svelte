<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`blog/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let post;
  import Grid from "@dsengineer/svelte/lib/components/Grid.svelte";
  import GridItem from "@dsengineer/svelte/lib/components/GridItem.svelte";
</script>

<style>
  :global(.content) {
    max-width: 768px;
    margin: 0 auto;
  }
</style>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>


<Grid class="content">
  <GridItem colSpan="6">
  <h1>{post.title}</h1>
  {@html post.html}
  </GridItem>
</Grid>
