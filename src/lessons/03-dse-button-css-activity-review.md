---
title: DSE Button CSS Activity Review
slug: dse-button-css-activity-review
duration: PT4M41S
summary: Ok, let's take a look at what you made. There are so many ways to accomplish this task, and I wanted to try to highlight that. There isn't a perfect way, at least I haven't found it, but avoid letting "the perfect" become the enemy of "the good".
embed: <iframe width="560" height="315" src="https://www.youtube.com/embed/xLrBmEvEr_E" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
courseSlug: css-design-system-components
code:
  start: ExyrgOz
  completed: wvWLJZv
---

Alright. Welcome back. Like I mentioned, there are many ways to do this activity, and I'll show you one way. And it's very likely you did it a different way, and that's great. There's nothing wrong with that. But when you're working with the team, either because your design system team is more than just you.

Or because you have teams that will be using your design system, you'll need to establish some standard practices in your naming and in your coding styles and your workflows, your release schedules, all of that stuff. So let me show you what I did and why, and we can talk about some of these conventions.

So, first of all, just to reminder, uh, this code pen is actually importing the previous code pen, where we have the. Button defined. So we've got our button and it's a disabled state. And we come in here and I have created a second class, four button CTA. So we still are using this class and we're adding an additional class on top of that.

So we are following something or I'll be following something in this course, um, called. BEM. Um, and it's a naming methodology for CSS classes. Um, it stands for block element. Modifier. And it talks about how this name right here, um, is describing what this class is doing. So, first of all, we have the prefix of DSE.

That's just for our design system engineering and it's just to help make sure that it's unique. It's not very likely that you have two different design systems that you're using together that have the same prefix. So I've thrown that on there. And then, uh, we're working on our component. So this is our block.

This is button. And then we've got a modifier here and this is indicated by two dashes. Now there are a lot of naming methodologies and we can go through some of them, uh, as part of this course, But, um, we're gonna pick this one and we're going to stick with it for now. Um, you may not like the double dashes and when you're dealing with elements, these are sub elements uses, uh, underscores and uses two of them.

Some people don't like that and that's, that's okay. You're allowed to have preferences on syntax. Uh, that said, though, it's very important that some of these things are standard because. You're going to get in situations where you're not going to be sure what to name something. And if you've already got some of these standards in place that makes it a lot easier, you can change it to a different standard later.

If you find one that better suits your organization or your needs, or if you've already using one, that's totally okay. But for this course and for where we're starting right now, we're going to be using BEM and we'll get into other ones later if you're really interested. Okay. So. Um, what I'm doing is I'm taking the first class, adding the second class and just overriding the properties that matter.

So in our call to action button, You can see that I still have the same active state. I still have the same focus state, um, that art does is change and adds a, um, an underlying, um, but some of these colors are a little bit different and it obviously it has that, that fill. So it doesn't take much to add a variant.

If these other States are the same. Now, if I wanted to make a variant that, um, the hover state was different. I could add that on top of here, I could create. The hover state, um, for this, and this would override the properties of the button, hover state, um, because, uh, of CSS and the cascading and the specificity.

So, um, because of that, this allows us to be pretty flexible. If I wanted to add to this button, multiple modifiers, let's say, um, I wanted to make a large button and a small button or quiet button. That's a little more subtle. Then you could stack these. Uh, modifiers on the same button, probably don't want to do a call to action, quiet, but a call to action.

Large. That makes sense. So Ben gives us a lot of this, this flexibility. Again, if you did something different, that's totally fine. I actually kind of wanted to demonstrate that that is a natural outcome of this sort of thing. If you just asked two different people to, to solve the same problem, they'd come up with most likely two different solutions, especially when it comes to naming.

It's hard to name things in a way that. Everyone feels as intuitive. So we do our best. Um, but then we standardized and we moved on as best we can. So good job with the activity. We're going to move on now to doing our next component and then talk about how we can make sure that these components stay together and look like they belong.
