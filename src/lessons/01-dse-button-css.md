---
title: DSE Button CSS
slug: dse-button-css
duration: PT10M2S
summary: Let's create the first component. We'll take a sprite sheet design file and create the CSS for the component in CodePen. This will allow us to get started very quickly without having to worry about setting up dev environments. We can even distribute the components and nest them.
embed: <iframe width="560" height="349" src="https://www.youtube.com/embed/Q4F0yIz8wL8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
courseSlug: css-design-system-components
code:
  start: https://codepen.io/GarthDB/pen/mdEZWRj
  completed: https://codepen.io/GarthDB/pen/jOrXyWW
---

Now that we've made our first component, let's go to our first solo activity. You're going to take our existing button and create a call to action variant, a button that is similar to our first button, but that draws the attention a little more. I've set you up a code pen to get you started. You can fork it and save it to your own account if you want to save your progress. But let me show you what we have. You can see that we have our button that we styled, like we did our last one.

And if we look, we can see in our CSS that we've actually linked the external style sheet, I've linked the previous code pen. So it brings in all that styling that we just did. And what we want to do. If we look at our S sticker sheet, as we want to create a button that. Has a slightly lighter blue.

Then our hover, but other than that, the States are fairly similar. So it's slightly lighter blue so that we still have high enough contrast when we go from the default state to the hover state and the downstate or the active state. And, keeping all that contrast, means that you'd be able to tell the differences between the States.

But we also want to keep some contrast between the call to action button and the primary button. These want to be different enough that if they were sitting next to each other, That you draw more attention, hopefully to the call to action button. So if we look at our button here. I don't want you just to use the same class. I want you to create a modifier class so that if we had two instances of two different buttons,

One of the called action button and one of the regular button that you'd be able to tell the difference between them side-by-side and they wouldn't conflict with each other. So, I'm not going to tell you how to solve that problem. I'm not going to tell you how to, to create that variant class. I want to see what you come up with.

And then when you're done, we'll go through a possible solution together.
