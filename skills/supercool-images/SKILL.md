---
name: supercool-images
description: Brief SuperCool for images (product shots, social graphics, thumbnails, illustrations, logos, edits of existing photos) and get the files. Use with the supercool skill when the user wants images made or edited.
---

# Image briefs for SuperCool

Send it the way the `supercool` skill says: with `message_agent` (then `wait_for_updates`) when SuperCool's MCP tools are available, otherwise with the CLI's `supercool ask "<brief>" --wait --json`. Say:

- **What and where it's used:** Instagram post, YouTube thumbnail, website hero, print.
- **Size / aspect ratio** and how many variations.
- **Subject and composition:** what's in frame, setting, lighting, text on the image (exact words).
- **Style:** photo-real, illustration, flat, 3D; colors; mood.
- **References:** attach photos, logos or examples (public https URLs with `message_agent`, or `--file` with the CLI) and say how to use them
  ("keep the product exactly as in the photo").

Edits are follow-ups: "remove the background", "make three more in the same style".
