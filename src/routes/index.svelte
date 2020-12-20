<script>
  import { Button, Heading, Grid, GridItem, Page, Link } from "@dsengineer/svelte";
</script>

<style>
  :global(.content) {
    max-width: 768px;
  }
  :global(.mainTitle) {
    position: relative;
    z-index: 2;
  }
  .hero-container {
    width: 100%;
    height: 50vh;
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .hero-container::before {
    content: "";
    background: url("/bee.svg");
    background-size: cover;
    background-position: center;
    opacity: 0.5;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
  }
  .solo-bee {
    position: absolute;
    left: 25%;
    top: 15%;
  }
  :global(.hero-container--heading){
    position: relative;
    margin: 0;
    max-width: 500px;
    text-align: center;
  }
  :global(.hero-container--heading.primary) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  :global(.hero-container--heading.secondary) {
    font-weight: var(--dse-font-weight-semi-bold);
    text-transform: uppercase;
    color: var(--dse-color-gray-900);
    margin-bottom: 5px;
  }
  :global(.hero-container--heading.primary span) {
    background: rgba(255,255,255,0.8);
    padding: 4px 16px;
    overflow: hidden;
    white-space: nowrap;
    box-sizing: border-box;
    font-weight: var(--dse-font-weight-bold);
  }
  :global(.hero-container--heading.primary span:nth-of-type(1)) {
    border-radius: 8px 8px 0 0;
  }
  :global(.hero-container--heading.primary span:nth-of-type(2)) {
    border-radius: 8px;
  }
  :global(.hero-container--heading.primary span:nth-of-type(3)) {
    border-radius: 0 0 8px 8px;
  }
</style>

<svelte:head>
  <title>Design Systems Engineer</title>
</svelte:head>

<Page>
  <div class="hero-container">
    <img class="solo-bee" src="solo-bee.svg" width="100" alt="flying bee"/>
    <Heading size="XS" class="hero-container--heading secondary">New Design System Course</Heading>
    <Heading size="XL" class="hero-container--heading primary"><span>Establish, Maintain, and Scale</span> <span>a Design System That Your Team</span> <span>Will Want to Use</span></Heading>
  </div>
  <Grid class="content">
    <GridItem colSpan="6">
      <div style="height:60px;"/>
      <Heading size="L"><span style="font-weight: 600;">Let's make your products feel like they below together.</span></Heading>
      <div style="font-size: 1.2rem;">
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

      <p>
        Get a heads-up when Design System Engineer launches! <Link href="https://backyard-studio.ck.page/ad40317bf0">Subscribe Now!</Link>
      </p>
      </div>
    </GridItem>
  </Grid>
</Page>
