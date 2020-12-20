<script>
  import { stores } from "@sapper/app";
  const { page } = stores();
  import { Page, Nav } from "@dsengineer/svelte";
  // import Nav from "../components/Nav.svelte";
  import "@dsengineer/tokens/lib/default.css";
  import "@dsengineer/tokens/lib/medium.css";

  export let navItems = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Courses",
      href: "/courses",
    },
    {
      label: "Blog",
      href: "/blog",
    },
  ];
  export let currentPage;
  $: currentPage = $page.path;
</script>

<style>
  :root {
    margin: 0;
    height: 100%;
  }
  :global(main) {
    min-height: 100vh;
  }
</style>

<svelte:head>
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;900&display=swap"
    rel="stylesheet" />
  <style>
    body {
      min-height: 100vh;
    }
    #sapper {
      min-height: 100vh;
    }
  </style>
</svelte:head>

<Page>
  <Nav {navItems} {currentPage} />
  <slot />
</Page>
