---
name: supercool
description: Hand creative or research work to the user's SuperCool agent with the `supercool` CLI and bring back the finished files. Use when the user asks for a video, ad, explainer, website or landing page, presentation or deck, research report, images, music or voiceover, or mentions SuperCool. Also for "check on", "stop" or "change" work SuperCool is doing.
---

# SuperCool

The user has a SuperCool agent: their own AI agent that makes videos, websites,
presentations, research, images, music and writing, and remembers them across
calls, texts, the web app and here. The `supercool` CLI sends it a message and
saves what it makes to disk. Everything is a message to the agent, exactly as
the user would text it.

## Before the first request

1. Check the CLI: `supercool version`. If missing, tell the user to install it
   (`npm i -g @famous-labs/supercool-cli`, or `brew install famous-labs/tap/supercool`).
2. Check the login: `supercool whoami --json`. Exit code 2 means not signed in:
   ask the user to run `supercool login` themselves (it opens their browser) and
   wait for them to confirm. Never try to sign in for them. In CI, the user sets
   `SUPERCOOL_TOKEN`.

## Ask for work

Write the message the way a great brief reads: what it's for, audience, length,
format, style, any must-haves, and the files to use. One message, in full.

```bash
supercool ask "<the full brief>" --wait --json
supercool ask "<brief>" --file ./logo.png --file ./footage.mov --wait --json
```

`--wait` blocks until the work this message started is finished and saves its
files under `./supercool/<work-title>/` (or `--out DIR`). Files up to 500 MB can
be attached. Long jobs (videos) can take many minutes; that's normal.
Use `--timeout 60m` for big videos.

The JSON result:

```json
{
  "request_id": "cli_…",
  "status": "answered",
  "reply": "the agent's reply",
  "work": [{"work_id": "…", "title": "Candle shop ad", "outcome": "completed"}],
  "files": [{"file_name": "ad.mp4", "kind": "video", "path": "supercool/candle-shop-ad/ad.mp4"}],
  "exit_code": 0
}
```

## Exit codes (act on them)

| Code | Meaning | What to do |
|---|---|---|
| 0 | done, files saved | report the files (paths) and the agent's reply |
| 2 | not signed in | ask the user to run `supercool login` |
| 3 | out of credits | tell the user; they add credits at supercool.com/dashboard |
| 4 | your `--timeout` hit; still running | `supercool wait <request_id> --json` later |
| 5 | failed | say so plainly; offer to try again with a new message |
| 6 | someone stopped it | say so |
| 7 | rate limited / agent busy | wait the given seconds, then run the same command again |
| 8 | finished but a file didn't save | `supercool wait <request_id> --json` retries the downloads |
| 9 | ran past the server's watch window | `supercool wait <request_id> --json` recovers it (never resends) |
| 10 | no outcome found after recovery | tell the user to open the chat: `supercool work open <work_id>` |

## Follow-ups, status, stopping

These are just messages to the agent, in the same conversation:

```bash
supercool ask "make it 10 seconds shorter and brighter" --wait --json
supercool ask "how is the video going?" --json
supercool ask "stop that" --json
supercool ask "send me the logo from the site we made last week" --wait --json
```

Other commands: `supercool work list --json`, `supercool work get <work_id> --download --json`,
`supercool work open <work_id>`.

## Rules

- Never paste the user's secrets into a message. Attach files with `--file`.
- Don't rerun an `ask` to "retry" a long job: use `supercool wait <request_id>`;
  a new `ask` starts new (billed) work.
- Report what was saved (paths) and what the agent said, briefly. Don't narrate internals.
- Work bills the user's SuperCool credits like any chat.
