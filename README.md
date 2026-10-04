# SuperCool skills

Skills that let coding agents (Claude Code, Cursor, Codex and others that load
`SKILL.md` skills) hand creative and research work to your
[SuperCool](https://supercool.com) agent through the
[SuperCool CLI](https://github.com/Famous-Labs/supercool-cli), and bring back
the finished files.

| Skill | What it's for |
|---|---|
| [`supercool`](skills/supercool) | The core: when to hand work to your agent, `supercool ask --wait --json`, exit codes, follow-ups |
| [`supercool-video`](skills/supercool-video) | Briefs for ads, UGC, explainers, trailers, social clips |
| [`supercool-website`](skills/supercool-website) | Briefs for websites and landing pages (live links) |
| [`supercool-presentation`](skills/supercool-presentation) | Briefs for decks and presentations |
| [`supercool-research`](skills/supercool-research) | Briefs for researched reports |
| [`supercool-images`](skills/supercool-images) | Briefs for images, thumbnails, graphics and edits |

## Install

First install the CLI and sign in:

```bash
npm i -g @famous-labs/supercool-cli   # or: brew install famous-labs/tap/supercool
supercool login
```

Then the skills, any one of:

```bash
supercool setup claude          # or cursor, codex
npx skills add Famous-Labs/supercool-skills
```

In Claude Code:

```
/plugin marketplace add Famous-Labs/supercool-skills
/plugin install supercool@supercool
```

The Claude Code plugin also connects SuperCool's MCP server
(`https://mcp.supercool.com/mcp`), so it works without the CLI: Claude talks
to your agent through `message_agent`, `wait_for_updates` and `get_work`, and
you sign in once: run `/mcp`, select **supercool** and choose **Authenticate**
(it opens SuperCool in your browser).

### SuperCool Sites & Decks

A second plugin in this marketplace, for websites, presentations, documents,
research and design assets only (no image, video or audio generation):

```
/plugin install supercool-sites-decks@supercool
```

See [plugins/supercool-sites-decks](plugins/supercool-sites-decks).

Agent-driven install: paste [INSTALL_FOR_AGENTS.md](INSTALL_FOR_AGENTS.md) into your agent.

## Try it

> "Make a 15-second vertical ad for my candle shop with SuperCool."

The agent runs `supercool ask "…" --wait --json` and reports the saved video.

Work uses your SuperCool credits like any chat.

## License

MIT
