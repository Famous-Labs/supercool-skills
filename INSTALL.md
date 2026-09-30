# Installing the SuperCool skills

Prerequisite: the SuperCool CLI, signed in (`supercool login`).

| Method | Command | Update |
|---|---|---|
| SuperCool CLI | `supercool setup claude` (or `cursor`, `codex`) | run it again |
| skills CLI | `npx skills add Famous-Labs/supercool-skills` | run it again |
| Claude Code marketplace | `/plugin marketplace add Famous-Labs/supercool-skills` then `/plugin install supercool@supercool` | `/plugin update supercool@supercool` |
| Manual | copy `skills/*` into your agent's skills folder (`~/.claude/skills`, `~/.cursor/skills`, `~/.codex/skills`) | copy again |
