---
name: document
description: "Write a polished document with SuperCool: a proposal, plan, brief, one-pager, guide or policy, delivered as a formatted file. Use when the user wants a finished document rather than text in the chat."
---

# Document

Writes and formats a finished document and returns the file.

## The brief

- What the document is (proposal, business plan, one-pager, guide) and who reads it.
- The key points, facts and sections to include; source material as https URLs.
- Length, tone and format (Word, PDF or Google Doc style).

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
