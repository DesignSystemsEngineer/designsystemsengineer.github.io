<script>
import { Button, Grid, GridItem } from "@dsengineer/svelte";
</script>

<style>
  :global(.homeheader) {
    max-width: 768px;
    margin: 0 auto;
    padding-top: 30px;
  }
  :global(.loginButtonContainer) {
    grid-column-start: 5;
    grid-column-end: 7;
    text-align: right;
  }
</style>

<Grid class="homeheader">
  <GridItem colSpan="2">
  </GridItem>
  <GridItem colSpan="2" class="loginButtonContainer">
    <Button href="courses">email login link</Button>
  </GridItem>
</Grid>
