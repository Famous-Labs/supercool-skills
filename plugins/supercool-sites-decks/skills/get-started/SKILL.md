---
name: get-started
description: "Start here with SuperCool Sites & Decks: what the user's SuperCool agent builds (websites, presentations, documents, research reports, design assets) and how a request runs. Use when the user first connects SuperCool or asks what it can do."
---

# Get started with SuperCool Sites & Decks

This plugin connects Claude to the user's own SuperCool agent, which builds real work in their SuperCool account: websites and landing pages it publishes, presentations and pitch decks, documents and research reports, and design assets such as logos, icons, diagrams, charts and UI mockups. It remembers their earlier work, so "the site from last week" works.

When the user asks what it can do, answer in a few lines from that list and suggest one or two things to try. Don't call a tool just to describe it. When they ask for something, use the matching skill (website, presentation, research report, document, design assets) or follow the steps below.

## The brief

What they want made, who it's for, and any style, length, format or files they gave.

## How to run it

0. If `message_agent` isn't available, SuperCool isn't signed in yet: ask the user to run `/mcp`, select **supercool** and choose **Authenticate** (it opens their browser), then continue.
1. Collect the brief above from what the user has already said. Ask one short question only if something essential is missing; otherwise go ahead with sensible defaults and say which you chose.
2. Call `message_agent` once with the complete brief in plain language, with any files as public https URLs. Send a fresh `request_id` with each new message; reuse one only to retry that same message.
3. Pass on the agent's reply briefly. If it started work, call `wait_for_updates` with the returned cursor until `done` is true (right away when `more` is true).
4. Share what comes back: the live link for a site, the link for a deck or document, the files for design assets.
5. Changes are follow-ups to `message_agent` about the same work ("make the hero headline shorter"). To show a finished result again, call `get_work` with its `work_id`.

## Rules

- Never claim a result you haven't received from `wait_for_updates` or `get_work`.
- Don't quote prices, credit amounts or timings unless the agent said so. If the agent says the user is out of credits, tell them plainly.
- Never invent facts, figures, prices or contact details for the user's business: leave placeholders and say which to fill in.
- This plugin is for websites, presentations, documents, research and design assets. For photos, image ads, videos, music or voiceovers, tell the user that's available in the SuperCool app at supercool.com.
