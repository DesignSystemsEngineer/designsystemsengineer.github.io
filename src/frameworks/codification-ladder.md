---
title: Codification Ladder
description: A mental model for understanding different levels of design decision codification.
tags:
  - frameworks
  - models
---

The **Codification Ladder** is a simple scale from ad-hoc to fully codified. It helps teams agree on where they are and where they want to go.

1. **Ad-hoc** - Decisions exist only in conversation or in someone’s head. No shared record.
2. **Documented** - Decisions are written down (docs, wikis, comments) but not structured or easy to find.
3. **Structured** - Decisions follow a schema (context, options, rationale, constraints) and are findable.
4. **Reusable** - Decisions are linked to patterns, components, or code so they can be applied consistently.
5. **Codified** - Decisions are the source of truth; components and patterns reference them. Change flows from decision → implementation.

Most teams sit between 1 and 3. High-performing design-system work usually aims for 4–5: decisions that are not only documented but *used* by the system.

Use this ladder in retrospectives or planning: “Where is this decision today? Where do we want it?” Then choose the next rung up, not a leap to the top.
