---
name: supercool-research
description: Brief SuperCool for deep research (market research, competitor analysis, literature review, due diligence) and get the report. Use with the supercool skill when the user wants a researched report rather than a quick answer.
---

# Research briefs for SuperCool

Send it the way the `supercool` skill says: with `message_agent` (then `wait_for_updates`) when SuperCool's MCP tools are available, otherwise with the CLI's `supercool ask "<brief>" --wait --json --timeout 60m`. Say:

- **The question** to answer, and the decision it feeds.
- **Scope:** markets, regions, time period, sources to prefer or avoid.
- **Depth and length:** a one-page summary or a detailed report with citations.
- **Output:** document format (report, table, slides), and any structure to follow.
- **Inputs:** attach existing notes or data (public https URLs with `message_agent`, or `--file` with the CLI).

The agent's reply summarizes; the full report is in the saved files.
