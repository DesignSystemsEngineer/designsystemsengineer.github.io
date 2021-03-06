---
title: DSE Textinput
slug: dse-textinput
duration: PT8M8S
summary: Let's take a stab at a second component. Our button is a good start, so let's make a companion form input. We'll make a text input that is designed to pair with our button for a simple form like a login or a subscription form.
embed: <iframe width="560" height="315" src="https://www.youtube.com/embed/8vEN55sPeY8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
courseSlug: css-design-system-components
code:
  start: MWjvamY
  completed: xxELGNZ
---
Almost always when talking about a design system and I need to think of an example component. Uh, I use button it's just a good starting place. Uh, it has States it's not too complex. There are variants. Um, it works. So when I'm thinking of what's our second component, now I usually move into form fields.

So let's do that. Let's, let's build a text input. So we'll start with our HTML here in our code pen. Um, we'll just do an input type and we'll do text. Well through our name equals name. Not that we're going to really use that right now, but that's. It's good to show how, um, the Dom should be set up for, um, your teams, if they want to use this component.

So then we're going to create eight, the class we're going to call it text input. So let's grab this class and start building out our styles. Um, we're gonna start with a background color. We'll set it to RGB and we'll just make it white.

That's good starting place. And let me be positioned my JavaScript. There you go. And then we're going to do box sizing order box, but I'm thinking here, here, I'm just going to save it. What I'm thinking here is, um, if you imagine our button, it's very likely that at some point you're gonna want to have a text input and a button right next to each other, and the input and button need to look like they belong.

Um, so if we keep the height about the same then, or if we keep it the same, it should look good. Um, with these two together. So let's do a border radius. Of six pixels and a height of two rim, which is the same as our button. And we'll do a border one pixel solid RGB.

We'll get a good gray color going on. And then let's, we're going to do padding and we're going to do a zero petting on the top and the bottom, but we're going to do eight pixels on the two sides. So we'll do it like that.

So let's just go ahead and open up. I got here the button code pen. I'm just going to grab some of the stuff, right? Like, uh, I know I'm going to want the same font family and we're going to do this is a little future thinking. I got some things that shifted a little future thinking we're going to do, um, display inline, flex.

What I'm thinking here is we might need to do some icon ish kind of things if we're going to. And it also makes it a little bit easier to keep something centered. Um, and we're going to do that. So alive nine items center and vertical align top that is. Actually dealing with, um, having our code pin right next to a, I mean, sorry, not a codependent, but our text input right next to our button.

There we go. So, um, we've got our text input and it does have, um, some weird focus styling. You can see that it's got an outline and the border radius doesn't quite match up with its focus. So let's adjust before we jump into the focus, let's adjust actually, our. Um, hover state,

it helps indicate that this thing is interactive 75, 75. If we give it a little hover, it gets a little just slightly darker, which is nice. And then let's, uh, do our focus state.

We're going to take off our outline because we want a little or flexibility with the controls. So here we're going to actually change the padding. Um, similar to how we had zero. Yeah. Zero for the top and bottom, but we're going to change this to seven pixels cause what we actually want. Is, um, we want to increase the order size on focus.

So we'll change the border to be two pixels solid RGB, and we'll do 2115 to 30. So looking here now, when it gets focus, Um, the board gets thicker and because I'm changing the padding and the boarder at the same time, and we have the box sizing set to border, it doesn't change the overall dimensions of the component.

So if we had other things next to it, it wouldn't mess with layout at all. It wouldn't shift things, a pixel or two. Um, then let's go ahead and do another state. Let's duplicate this so we can see them side by side, but we're going to do a disabled. You want me to keep getting network issues? There you go.

So this is disabled. It's still has a hover state, um, which isn't great. So let's go ahead and make some changes here. Text input, disabled. And we're going to say background color. We're just going to make it a little more gray than just that. White background two 45 and our border color. We're going to change to be just a little different gray too.

So let's do two, two, two, two, two, two. Finally, let's go ahead and I want to format my CSS, get those spaces in there. Okay. There we go. Now we don't have a hover style. We don't have an active style or focus or anything like that on this disabled. Um, but we do have this nice text input with the form. So now if we're looking through and I've got the button here next to it, um, and we're looking through some of the properties here, uh, between our button and our text input.

We're.

We're looking through some of the properties here between our text input and our button. We're going to see some similarities, things like the font, weight, um, the height of the button is where's our height. Here we go two REMS. Um, so we kept that the same, um, inline facts. Some of the colors are the same.

There's some similar colors, there's some, um, there's just some similar properties. So what we want to do with our design system is figure out how we can reduce, um, duplication of, of, uh, information. And because we want to be able to make adjustments that would impact both of them. If we wanted to make.

The button three REM for some weird reason, then we'd want the height of the text input to also be three REM, because we want these two components to work well together. That's why we've designed them this way. Same thing with some of the colors. So what we need to think about next is how can we share information between these components and make it so that we're not repeating ourselves and that we can maintain, and we can update those properties easier.
