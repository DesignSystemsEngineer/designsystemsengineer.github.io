---
title: Design Decisions Don’t Disappear; They Leak
description: When teams don’t make design decisions explicit, they don’t stay undecided. They leak into systems in ways that are hard to see and harder to undo.
date: 2026-02-06
tags:
  - design systems
  - design decisions
  - scale
---

Teams often talk about design decisions as if they’re binary: either decided or not.

In practice, an undecided decision still shapes behavior. It just hides the cost.

When teams defer decisions, they don’t disappear. They leak into the system through whatever paths are available.

## Undecided doesn’t mean neutral

Design decisions are rarely optional. If a decision isn’t made explicitly, the system still needs an answer.

So it invents one.

That answer might come from:
- whoever ships first
- whoever has the strongest opinion in the room
- whatever tool or framework sets a default
- whatever pattern already exists nearby

None of these are inherently wrong. The problem is that they’re implicit, uneven, and hard to reason about later.

Inaction is still a decision - it’s just one you didn’t name.

## Where decisions leak

When decisions aren’t captured, they leak into containers that aren’t designed to hold them:

- people’s heads  
- Slack threads and meeting notes  
- tickets and specs  
- Figma files  
- code comments and APIs  

These containers are optimized for velocity, not durability.

For example: when naming conventions aren’t decided, the first engineer to touch an API picks something that “feels right.” Six months later, that name is imported across multiple repos, documented in examples, and depended on by downstream teams. What started as a local choice quietly becomes global policy.

At that point, changing it isn’t a design decision anymore. It’s a migration problem.

## Leakage compounds at scale

Decision leakage is manageable in small teams with short time horizons.

As systems grow, it compounds.

New teams inherit patterns without context. New platforms re-implement behavior by copying what exists. Automation encodes assumptions that were never articulated.

Over time, the system reflects a patchwork of decisions made at different moments, by different people, under different constraints - with no shared explanation for *why* things are the way they are.

The cost isn’t just inconsistency. It’s fragility.

## The hidden cost: expert dependency

One of the clearest signs of decision leakage is when progress depends on specific people.

If someone has to ask:
- “What’s the right way to do this?”
- “Why is this component structured like that?”
- “Are we allowed to change this?”

-and the only reliable answer lives in a person’s memory, the system isn’t carrying its own weight.

The organization becomes dependent on experts not just for judgment, but for basic continuity.

## Design systems as decision infrastructure

A design system isn’t just a collection of components. It’s an attempt to make decisions explicit enough that they can be reused safely.

That means:
- naming decisions
- constraining them
- documenting tradeoffs
- versioning change
- making intent legible to people who weren’t in the room

When a decision can be named, typed, and referenced, it’s less likely to leak.

When it can’t, the system will still answer - just in ways that are harder to see and harder to undo.

## Questions worth asking

If you want to understand where decisions are leaking in your system, ask:

- Where do design decisions live today?
- Which decisions exist only in people’s heads?
- Who do people ask when they’re unsure?
- What breaks when those people aren’t available?
- Which defaults have become “rules” without ever being agreed on?

You don’t need perfect answers. You just need to make the invisible visible.

Because design decisions don’t disappear.

They leak.
