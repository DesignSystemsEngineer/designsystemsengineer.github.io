<script>
import { Button, Grid, GridItem, Heading } from "@dsengineer/svelte";
</script>

<style>
  :global(.homeheader) {
    max-width: 768px;
    margin: 0 auto;
    padding: 20px 0 20px 0;
    align-items: center;
  }
  :global(.loginButtonContainer) {
    grid-column-start: 5;
    grid-column-end: 7;
    text-align: right;
  }
  .fullwidth {
    background: white;
    border-bottom: 1px solid var(--dse-color-gray-200);
  }
  :global(.logoTitle) {
    margin: 0;
    font-weight: var(--dse-font-weight-semi-bold);
    text-transform: uppercase;
  }
</style>

<div class="fullwidth">
  <Grid class="homeheader">
    <Heading size="XS" class="dse-grid__2col logoTitle"><img src="/favicon.svg" height="30" alt="logo" style="vertical-align: middle;"/> Design Systems Engineer</Heading>
    <GridItem colSpan="2" class="loginButtonContainer">
      <Button href="courses">email login link</Button>
    </GridItem>
  </Grid>
</div>
