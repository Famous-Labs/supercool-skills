---
name: supercool-presentation
description: Brief SuperCool for a presentation or slide deck (pitch deck, report, training, sales deck) and get the file. Use with the supercool skill when the user wants slides made or revised.
---

# Presentation briefs for SuperCool

Send it the way the `supercool` skill says: with `message_agent` (then `wait_for_updates`) when SuperCool's MCP tools are available, otherwise with the CLI's `supercool ask "<brief>" --wait --json`. Say:

- **Occasion and audience:** investor pitch, board update, class, sales call.
- **Length:** number of slides or minutes.
- **Storyline:** the key points in order, and the ask or conclusion.
- **Content:** attach notes, data or a draft (public https URLs with `message_agent`, or `--file` with the CLI); say which numbers must appear.
- **Look:** brand colors, logo (an https URL, or `--file` with the CLI), tone (minimal, bold, playful).
- **Format:** PowerPoint, Google Slides-friendly, or PDF.

Revisions are follow-ups: "cut it to 10 slides", "add a slide on the go-to-market plan".
