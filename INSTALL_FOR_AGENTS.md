# Install for agents

You are an AI coding agent. The user asked you to set up SuperCool. Follow this exactly.

## 1. Install the CLI

```bash
npm i -g @famous-labs/supercool-cli
```

Without Node: `curl -fsSL https://supercool.com/install.sh | sh` (add
`-s -- --prefix=$HOME/.local` if there's no sudo). Verify: `supercool version`.

## 2. Sign in

Ask the user to run this themselves (it opens their browser; on an SSH box use
`supercool login --no-browser`):

```bash
supercool login
```

Wait for them to confirm. Verify: `supercool whoami --json` exits 0.

## 3. Install the skills

```bash
supercool setup claude    # or: cursor, codex
```

If that isn't possible: `npx skills add Famous-Labs/supercool-skills`.

## 4. Test

```bash
supercool ask "Make a tiny square test image of a blue circle" --wait --json
```

Expect exit code 0 and one saved file path in `files`.

If something fails: exit 2 → repeat step 2; exit 3 → the account needs credits
(supercool.com/dashboard); anything else → show the user the message.

## 5. Done

Tell the user: "SuperCool is set up. Try asking me for a video, a website, a deck,
research or images." Don't explain the internals.
