<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then((r) => r.json())
      .then((posts) => {
        return { posts };
      });
  }
  import Heading from "@dsengineer/svelte/lib/components/Heading.svelte";
  import Grid from "@dsengineer/svelte/lib/components/Grid.svelte";
  import GridItem from "@dsengineer/svelte/lib/components/GridItem.svelte";
</script>

<script>
  export let posts;
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
  :global(.content) {
    max-width: 768px;
    margin: 0 auto;
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<Grid class="content">
  <GridItem colSpan="3">
    <Heading size="XXXL">Design Systems Engineer</Heading>
  </GridItem>
  <GridItem colSpan="6">
    <h1>Recent posts</h1>
    <ul>
      {#each posts as post}
        <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
        <li><a rel="prefetch" href="blog/{post.slug}">{post.title}</a></li>
      {/each}
    </ul>
  </GridItem>
</Grid>
