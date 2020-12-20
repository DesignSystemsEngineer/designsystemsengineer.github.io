<script context="module">
  import { Heading, Grid, GridItem, CourseSummary } from "@dsengineer/svelte";
  export function preload({ params, query }) {
    return this.fetch(`courses.json`)
      .then((r) => r.json())
      .then((units) => {
        return { units };
      });
  }
</script>

<script>
  export let units;
</script>

<style>
  :global(.content) {
    max-width: 768px;
    margin: 0 auto;
  }
</style>

<svelte:head>
  <title>Courses</title>
</svelte:head>
<Grid class="content">
  <GridItem colSpan="3">
    <Heading size="XL">Design Systems Engineer</Heading>
  </GridItem>
  <GridItem colSpan="6">
    {#each units as { title, videoCount, duration, description, slug, lessons, image }}
      <!-- we're using the non-standard `rel=prefetch` attribute to
			tell Sapper to load the data for the page as soon as
			the user hovers over the link or taps it, instead of
			waiting for the 'click' event -->
      <CourseSummary
        {title}
        videoCount={lessons.length}
        {duration}
        {description}
        courseUrl="/courses/{slug}"
        imageUrl={image}
        watchUrl={lessons.length > 0 ? `lessons/${lessons[0].slug}` : null} />
    {/each}
  </GridItem>
</Grid>
