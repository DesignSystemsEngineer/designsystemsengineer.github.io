<script>
import { Button, Grid, GridItem } from "@dsengineer/svelte";
</script>

<style>
  :global(.content) {
    max-width: 768px;
    margin: 0 auto;
  }
</style>

<Grid class="content">
  <GridItem colSpan="2">
    <Button href="courses">email login link</Button>
  </GridItem>
</Grid>
