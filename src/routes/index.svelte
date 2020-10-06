<script>
  import Button from "@dsengineer/svelte/lib/components/Button.svelte";
  import Heading from "@dsengineer/svelte/lib/components/Heading.svelte";
  import Grid from "@dsengineer/svelte/lib/components/Grid.svelte";
  import GridItem from "@dsengineer/svelte/lib/components/GridItem.svelte";
  import Page from "@dsengineer/svelte/lib/components/Page.svelte";
  import Input from "@dsengineer/svelte/lib/components/Input.svelte";
</script>

<style>
  :global(.content) {
    max-width: 768px;
  }
</style>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<Page>
  <Grid class="content">
    <GridItem colSpan="3">
      <Heading size="XXXL">Design Systems Engineer</Heading>
    </GridItem>
    <GridItem colSpan="3" />
    <GridItem colSpan="3">
      <p>
        Sign up for my weekly newsletter
        <a href="https://backyard-studio.ck.page/ad40317bf0">here</a>.
      </p>
    </GridItem>
    <GridItem colSpan="3">
      <form
        action="https://app.convertkit.com/forms/827850/subscriptions"
        class="seva-form formkit-form"
        method="post"
        data-sv-form="827850"
        data-uid="ad40317bf0"
        data-format="inline"
        data-version="5"
        min-width="400 500 600 700">
        <Input />
        <Button labelText="Subscribe" />
      </form>
    </GridItem>
  </Grid>
</Page>
