# SuperCool Sites & Decks

Connect Claude to your [SuperCool](https://supercool.com) agent and have it
build finished work in your SuperCool account: websites and landing pages it
publishes for you, presentations and pitch decks, documents and research
reports with sources, and design assets such as logos, icons, diagrams,
charts and UI mockups. Ask in plain language; the agent plans the work, makes
it, and sends back the live link or the file. Follow up to change anything
("make the hero headline shorter", "add a pricing slide").

## What's inside

- **An MCP connection** to SuperCool at `https://mcp.supercool.com/mcp`
  (three tools: `message_agent`, `wait_for_updates`, `get_work`). It sends a
  `X-SuperCool-Scope: design` header, so on this connection the agent only
  makes websites, presentations, documents, research and design assets.
- **Skills** that teach Claude how to brief the agent for each kind of work:
  `get-started`, `website`, `presentation`, `research-report`, `document`,
  `design-assets`.

## Install

In Claude Code:

```
/plugin marketplace add Famous-Labs/supercool-skills
/plugin install supercool-sites-decks@supercool
```

Then sign in once: run `/mcp`, select **supercool** and choose
**Authenticate**. It opens SuperCool in your browser; approve the connection
and come back.

## What it sends and where

Your requests, and any files you share as links, go to SuperCool's MCP
server (`mcp.supercool.com`) when Claude calls the tools. The server returns
the agent's replies, the titles and status of your work, and links to the
files it made. Nothing else is read from your machine or your conversations.
You sign in to SuperCool in your browser the first time (OAuth); you can
disconnect any time in your SuperCool account settings.

## Requirements

A SuperCool account. Work uses credits on that account, the same as in the
SuperCool app. See the [privacy policy](https://home.deal.ai/privacy-policy)
and [terms](https://home.deal.ai/tos). Support: support@supercool.com.

## License

MIT
