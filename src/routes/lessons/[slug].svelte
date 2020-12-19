<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`lessons/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { lesson: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let lesson;
  import {Grid, GridItem, Heading, Link} from "@dsengineer/svelte";
</script>

<style>
  :global(.content) {
    max-width: 768px;
    margin: 0 auto;
  }
  :global(.videoWrapper) {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;
  }
  :global(.videoWrapper iframe) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .dse-lesson__description, .dse-lesson__transcript {
    font-size: 1.15rem;
    margin: 20px 0;
  }
  .dse-lesson__title {
    text-align: center
  }
</style>

<svelte:head>
  <title>{lesson.title}</title>
</svelte:head>


<Grid class="content">
  <GridItem colSpan="3">
    <Heading size="M">Design Systems Engineer</Heading>
    <Link href="courses/{lesson.courseSlug}" iconId="back-chevron">Back to lesson list</Link>
  </GridItem>
  <GridItem colSpan="6">
  <div class="dse-lesson">
    <Heading class="dse-lesson__title" size="XXL">{lesson.title}</Heading>
    <div class="dse-lesson__description">{lesson.summary}</div>
    <div class="videoWrapper">
      {@html lesson.embed}
    </div>
    <div class="dse-lesson__code">
      <Heading class="dse-lesson__title" size="XL">Resource</Heading>
      <ul>
        <li><a href={lesson.code.start} target=”_blank”>Starting CodePen</a></li>
        <li><a href={lesson.code.completed} target=”_blank”>Completed CodePen</a></li>
      </ul>
    </div>
    <div class="dse-lesson__transcript">
      <Heading class="dse-lesson__title" size="XL">Video Transcript</Heading>
      {@html lesson.transcript}
    </div>
  </div>
  </GridItem>
</Grid>
