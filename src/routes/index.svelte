<script>
  import { Button, Heading, Grid, GridItem, Page } from "@dsengineer/svelte";
</script>

<style>
  :global(.content) {
    max-width: 768px;
  }
  :global(.mainTitle) {
    position: relative;
    z-index: 2;
  }
  .glacierImg {
    width: 100%;
    position: relative;
    top: -120px;
    left: -20px;
    opacity: 0.2;
    z-index: 0;
  }
</style>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<Page>
  <Grid class="content">
    <GridItem colSpan="3">
      <Heading class="mainTitle" size="XXXL">Design Systems Engineer</Heading>
    </GridItem>
    <GridItem colSpan="3" />
    <GridItem colSpan="6">
      <img
        class="glacierImg"
        src="/glacier.jpg"
        alt="Hidden Lake at Glacier National Park" />
    </GridItem>
    <GridItem colSpan="6">
      <p>
        The Design Systems Engineering course content is built for engineers to
        follow me along the path as we together create an entire Design System.
        Follow along with the video content and apply your knowledge of the
        design system building process to meet the needs of your businesses or
        clients. You will gain experience in building, testing, and maintaining
        a design system in a structured and predictable fashion throughout the
        course. At the end of each unit, a constructivist activity will be
        provided to allow each learner to apply the knowledge obtained and build
        your own individual design system while keeping your own engineering
        goals in mind.
      </p>

      <ul>
        <li>Structured and Predictable</li>
        <li>Building</li>
        <li>Testing</li>
        <li>Maintaining</li>
      </ul>
      <p>
        Create a usable Design System following a minimum viable product
        strategy. Each subsequent unit will take the existing viable product and
        augment it with additional features.
      </p>

      <p>Subscribe Now</p>
    </GridItem>
  </Grid>
</Page>
