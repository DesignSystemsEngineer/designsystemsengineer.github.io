<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`courses/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { course: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let course;
  import {Grid, GridItem, CourseSummary, Heading, Button, Link} from "@dsengineer/svelte";
</script>

<style>
  :global(.content) {
    max-width: 768px;
    margin: 0 auto;
  }
  .dse-hr {
    border: none;
    border-top: 1px solid var(--dse-color-gray-500);
    width: 70%;
  }
  :global(.dse-course-summary__lesson) {
    margin: 50px 0;
  }
  :global(.dse-lesson__description) {
    font-size: 1.15rem;
    margin-bottom: 30px;
  }
</style>

<svelte:head>
  <title>{course.title}</title>
</svelte:head>


<Grid class="content">
  <GridItem colSpan="3">
    <Heading size="XL">Design Systems Engineer</Heading>
    <Link href="courses" iconId="back-chevron">Back to course list</Link>
  </GridItem>

  <GridItem colSpan="6">
    <CourseSummary title={course.title} description={course.description} videoCount={course.videoCount} duration={course.duration} isLarge={true} imageUrl={course.image}/>
    <div class="dse-course-summary__lessonList">
    {#each course.lessons as {title, description, slug}}
      <hr class="dse-hr"/>
      <div class="dse-course-summary__lesson">
        <Heading size="L"><Link href="/lessons/{slug}">{title}</Link></Heading>
        <div class="dse-lesson__description">{description}</div>
        <Button isLarge={true} isCTA={true} href="/lessons/{slug}" iconId="play">Start Watching</Button>
      </div>
    {/each}
    </div>
  </GridItem>
</Grid>
