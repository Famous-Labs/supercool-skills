---
name: supercool-website
description: Brief SuperCool to build or change a website or landing page and get the live link. Use with the supercool skill when the user wants a site, landing page, portfolio or web page made or updated.
---

# Website briefs for SuperCool

SuperCool builds and hosts the site; the result is a live link rather than source files (the CLI saves it as a `.url` shortcut). Send it the way the `supercool` skill says: with `message_agent` (then `wait_for_updates`) when SuperCool's MCP tools are available, otherwise with the CLI's `supercool ask "<brief>" --wait --json`.

Say:

- **What it's for** and who visits it; the main action (book, buy, sign up).
- **Pages and sections:** hero, features, pricing, testimonials, FAQ, contact.
- **Content:** real copy if you have it (attach docs (public https URLs with `message_agent`, or `--file` with the CLI)), or what to write.
- **Look:** style words, colors, fonts, sites they like (as descriptions, links are fine).
- **Assets:** logos and images (public https URLs with `message_agent`, or `--file` with the CLI).

Changes are follow-ups: "make the hero headline shorter", "add a pricing section with three tiers".
