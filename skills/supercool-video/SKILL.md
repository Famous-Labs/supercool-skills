---
name: supercool-video
description: Write a strong SuperCool brief for a video (ad, UGC, explainer, trailer, social clip, product demo) and get the finished video. Use with the supercool skill when the user wants any video made or edited.
---

# Video briefs for SuperCool

Send it the way the `supercool` skill says: with `message_agent` (then `wait_for_updates`) when SuperCool's MCP tools are available, otherwise with the CLI's `supercool ask "<brief>" --wait --json --timeout 60m`. Long videos can take many minutes. A good video brief says:

- **Purpose and platform:** "a 15s vertical Instagram Reels ad", "a 60s YouTube explainer".
- **Length and aspect ratio:** 9:16, 16:9 or 1:1.
- **Audience and message:** who it's for, the one thing they should remember, the call to action.
- **Style:** tone (warm, punchy, cinematic), pacing, music mood, voiceover or on-screen text, a presenter or not.
- **Assets:** attach logos, product photos, footage (public https URLs with `message_agent`, or `--file` with the CLI) and say how to use them.
- **Must-haves / must-nots:** brand colors, words to avoid, required disclaimers.

Example (with the CLI; through `message_agent` the same words go in `message`, and files as public https URLs):

```bash
supercool ask "A 15-second vertical (9:16) Instagram ad for Ember & Oak, my candle shop.
Warm, cozy, slow pacing, soft acoustic music, no voiceover. Show the candles lit in a
living room at dusk, end on the logo and 'Shop the fall collection'. Use the attached
logo and product photos." --file ./logo.png --file ./candles.jpg --wait --json --timeout 60m
```

Edits are follow-ups in the same conversation: "make the ending two seconds longer",
"swap the music for something more upbeat".
