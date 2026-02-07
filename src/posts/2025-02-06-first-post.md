---
title: Design Decisions Don't Disappear — They Leak
description: If design decisions aren't explicitly captured, they leak into people, tools, and assumptions—creating hidden costs that compound over time.
date: 2025-02-06
tags:
  - codification
  - decision-making
  - design-systems
---

Teams often talk about design decisions as if they're binary. Either a decision has been made, or it hasn't. If it hasn't, the team is still being flexible.

In practice, that distinction doesn't hold.

When a team decides to "decide later," work continues. Designs ship. Code lands. Choices get made—just without being named as choices.

What this reveals is simple: **inaction is still a decision.** It just shifts who makes it and obscures accountability for the outcome.

## The comforting myth of "we'll decide later"

"Let's decide later" is usually said to keep momentum. It avoids debate and preserves the appearance of optionality.

But undecided does not mean untouched.

Spacing values get set because something had to ship. A component API hardens because it was reused. A pattern becomes "the standard" because no one challenged it early.

The decision wasn't deferred. It was made implicitly, under time pressure, and without a clear owner. When the cost shows up later, there's no obvious place to revisit it.

## Where decisions actually go when you don't codify them

When decisions aren't explicitly captured, they don't disappear. They leak into whatever containers are available:

- People's heads
- Slack threads
- Meetings
- Figma files
- Specs and tickets
- Code comments
- Assumptions copied forward

These containers are optimized for speed, not durability.

They help teams move quickly in the moment. They do not preserve intent over time. None of them make decisions easy to review, compare, evolve, or retire.

As a result, teams lose the ability to distinguish between what was intentional and what was merely expedient.

## Why this gets exponentially worse at scale

Decision leakage is manageable when teams are small and time horizons are short. It becomes corrosive as organizations grow.

More people introduce more interpretations of what a decision meant. More products create more local variations justified as exceptions. More time produces drift from the original intent.

The symptoms are familiar: painful onboarding, subtle inconsistencies, repeated debates that never quite resolve. Someone eventually asks, "Why did we do it this way?" and no one can answer with confidence.

At scale, ambiguity doesn't stay neutral. It compounds.

## The hidden cost: expert dependency

Over time, leaked decisions concentrate in people.

Certain designers or engineers become the ones everyone asks. They remember why something exists. They know which edge cases matter. They can explain what's allowed versus what's merely tolerated.

This creates a fragile system.

Knowledge doesn't scale with the organization. It scales with availability. Senior contributors become bottlenecks—not by intent, but by necessity.

What breaks isn't velocity. It's trust in the system itself.

## Design systems as decision infrastructure

This is where common definitions of design systems fall short.

A design system is not a UI library. It's not a Figma file. It's not documentation.

Those are artifacts.

The real problem design systems exist to address is decision leakage. At their best, they function as **decision infrastructure**: a way to make design decisions explicit, reviewable, and reusable over time.

When decisions are named and structured, they can survive new teams, new platforms, and inevitable change. When they aren't, entropy wins quietly.

## What to notice in your own organization

Before thinking about solutions, it's worth observing a few things:

- Where do design decisions live today?
- Who do people ask when they're unsure?
- What breaks when those people aren't available?

Those answers reveal far more about the state of a design system than any component inventory ever will.
