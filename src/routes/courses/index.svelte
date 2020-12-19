<script context="module">
  import {Heading, Grid, GridItem, CourseSummary, Icon} from "@dsengineer/svelte";
  export function preload({ params, query }) {
    return this.fetch(`courses.json`)
      .then((r) => r.json())
      .then((units) => {
        return { units };
      });
  }
</script>

<script>
  import {parse, toSeconds} from 'iso8601-duration';
  import prettyMilliseconds from 'pretty-ms';
  export let units;

  function durationCalc(lessons){
    const seconds = lessons.reduce((accumulator, currentValue) => {
      return accumulator + toSeconds( parse(currentValue.duration));
    }, 0);
    return prettyMilliseconds(seconds*1000, {compact: true});
  }
</script>

<svelte:head>
  <title>Courses</title>
</svelte:head>

<style>
  :global(.content) {
    max-width: 768px;
    margin: 0 auto;
  }
</style>

<Grid class="content">
  <GridItem colSpan="3">
    <Heading size="XL">Design Systems Engineer</Heading>
  </GridItem>
  <GridItem colSpan="6">
    {#each units as {title, videoCount, duration, description, slug, lessons, image}}
      <!-- we're using the non-standard `rel=prefetch` attribute to
			tell Sapper to load the data for the page as soon as
			the user hovers over the link or taps it, instead of
			waiting for the 'click' event -->
      <CourseSummary {title} videoCount={lessons.length} duration={durationCalc(lessons)} {description} courseUrl="/courses/{slug}" imageUrl={image}
        watchUrl={ (lessons.length > 0) ? `lessons/${lessons[0].slug}` : null }
        />
    {/each}
  </GridItem>
</Grid>
