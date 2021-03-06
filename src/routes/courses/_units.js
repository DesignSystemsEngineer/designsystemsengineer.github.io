import { parse, toSeconds } from "iso8601-duration";
import prettyMilliseconds from "pretty-ms";

const all = [
  {
    title: "Fundamentals of Design System Engineering",
    slug: "fundamentals-of-design-system-engineering",
    image: "/components.png",
    summary: "A short post about ...",
    description: `<p>What is a design system? How is it different from a UI Kit or Styleguide? How is it different from Bootstrap or Foundation? At what point do you need a design system? How do you start one?</p>
<p>In this short course, we’ll learn the fundamentals of building a design system and how to approach it in a sustainable way.</p>`,
    lessons: [
      {
        slug: "introduction",
        title: "Let's get started",
        duration: "PT3M13S",
        description: "Welcome to Design Systems Engineer.",
      },
    ],
  },
  {
    title: "CSS Design System Components",
    slug: "css-design-system-components",
    image: "/dom.png",
    summary: "A short post about ...",
    description: `<p>There are so many ways to build a design system implementation. Should you start with a Javascript Framework? How will products find and use your components? What if products don't use the Javascript Framework you've selected?</p>
    <p>We are going to start with the simplest possible solution that still delivers something useful.</p>`,
    lessons: [
      {
        slug: "dse-button-css",
        title: "DSE Button CSS",
        duration: "PT10M2S",
        description:
          "Let's create the first component. We'll take a sprite sheet design file and create the CSS for the component in CodePen. This will allow us to get started very quickly without having to worry about setting up dev environments. We can even distribute the components and nest them.",
      },
      {
        slug: "dse-button-css-activity",
        title: "DSE Button CSS Activity",
        duration: "PT1M49S",
        description:
          "Time to fly solo for a bit. Now that you've gone through the process of making a simple component, how would you extend it to a Call To Action variant (emphasized). I've set up a starting CodePen for you to get started, and if you get stuck we can look through it together in the next video. I've also included the solution if you don't know where to start.",
      },
      {
        slug: "dse-button-css-activity-review",
        title: "DSE Button CSS Activity Review",
        duration: "PT4M41S",
        description: `Ok, let's take a look at what you made. There are so many ways to accomplish this task, and I wanted to try to highlight that. There isn't a perfect way, at least I haven't found it, but avoid letting "the perfect" become the enemy of "the good".`,
      },
      {
        slug: "dse-textinput",
        title: "DSE Textinput",
        duration: "PT8M8S",
        description: "Let's take a stab at a second component. Our button is a good start, so let's make a companion form input. We'll make a text input that is designed to pair with our button for a simple form like a login or a subscription form.",
      },
    ],
  },
  {
    title: "Design Token Management",
    slug: "design-token-management",
    image: "/config.png",
    summary: "A short post about ...",
    description: `<p>As you start to build more and more componenents you find that you're repeating yourself all over the place. Certain colors, dimensions, etc. Or worse, the components aren't sharing enough visual similarities. This problem is made more obvious when you try to update anything and realize that values are spread through out the components.</p><p>In this unit we'll start consolidating like values into tokens that can be easier to organize, share, and maintain.</p>`,
    lessons: [
      {
        slug: "dse-button-css",
        title: "DSE Button CSS",
        duration: "PT10M2S",
        description:
          "Let's create the first component. We'll take a sprite sheet design file and create the CSS for the component in CodePen. This will allow us to ",
      },
      {
        slug: "dse-button-css-activity",
        title: "DSE Button CSS Activity",
        duration: "PT10M2S",
        description:
          "Let's create the first component. We'll take a sprite sheet design file and create the CSS for the component in CodePen. This will allow us to ",
      },
    ],
  },
];

function durationCalc(lessons) {
  const seconds = lessons.reduce((accumulator, currentValue) => {
    return accumulator + toSeconds(parse(currentValue.duration));
  }, 0);
  return prettyMilliseconds(seconds * 1000, { compact: true });
}

const units = all.map((unit) => {
  return {
    ...unit,
    ...{
      duration: durationCalc(unit.lessons),
      description: unit.description.replace(/^\t{3}/gm, ""),
    },
  };
});

export default units;
