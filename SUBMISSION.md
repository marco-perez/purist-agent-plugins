# Purist submission materials

## Listing copy

**Name:** Purist  
**Identifier:** `purist-desktop` (stable installation identifier)  
**Publisher:** Purist  
**Website:** https://purist.design  
**Support:** support@purist.design  
**Privacy:** https://purist.design/privacy  
**Terms:** https://purist.design/terms  
**Package license:** MIT for software/documentation; Purist brand assets excluded (see `LICENSE` and `plugins/purist-desktop/assets/NOTICE.md`)  
**Category:** Design  
**Short description:** Create and refine designs with your AI agent.

**Description:** Bring your AI agent into Purist to create layouts, inspect layers and styles, and refine text and spacing. Review changes with screenshots of your canvas. Requires the Purist app to be open on the same computer.

**Suggested prompts:**

- Create a simple settings screen in Purist.
- Review my Purist design and suggest layout improvements.
- Refine the typography and spacing in my Purist design.

**Artwork:** `plugins/purist-desktop/assets/logo.svg` and `logo.png`, copied from Purist's existing mark. Do not use Paper's branding. Add only a verified, non-sensitive product screenshot after full canvas acceptance.

**Permissions/data:** Local HTTP read/write access to designs exposed by the running Purist app. Design content and screenshots can be processed by the selected agent/model provider. No package install scripts, shell hooks, credentials, generation providers, extra servers, or hosted endpoint are included.

## Reviewer workflow

1. Install Purist, sign in using the reviewer's authorized app account, and open a disposable design.
2. Install `purist-desktop` with the platform instructions in `plugins/purist-desktop/INSTALLATION.md`. Confirm one local Purist connection.
3. Discover tools and inspect the design. Create a separate review file, read the design guide, create an artboard/text, and change that text.
4. Capture and inspect a screenshot. Wait for autosave; reopen the file in a fresh session and verify the edit persisted.
5. Remove the plugin. Confirm unrelated MCP servers/settings remain. Existing design files should remain.

Do not invoke generation, share designs publicly, or use production administrative access for review. Tool registration is not proof of end-to-end acceptance.

## Public directory routes

The source repository is `https://github.com/marco-perez/purist-agent-plugins`. It contains only this package. Public directory submission and approval are separate from making the source public.

1. **Cursor:** submit the public repository at https://cursor.com/marketplace/publish. Include the listing copy, logo and reviewer steps above. Advertise `/add-plugin purist-desktop` as a marketplace install only after Cursor publishes the listing.
2. **Claude Code:** submit at https://clau.de/plugin-directory-submission for Anthropic's community marketplace. The Purist-owned Git marketplace is an additional direct install route, not community approval. Claude model workflow acceptance remains blocked by a 401 until an entitled reviewer account is available.
3. **Codex:** the public Plugins Directory currently requires a remote HTTPS MCP endpoint for MCP-backed submissions and directs local-only publishers to contact OpenAI for local MCP support. This package intentionally uses the desktop endpoint; a public directory submission requires an official local-MCP exception. The Purist-owned Git marketplace is an additional direct install route, not public-directory approval.

Record submission IDs, review decisions and public listing URLs only after those events occur. Keep packaged, tested, submitted, approved and published as separate fields. Do not enable hosted MCP or paid generation to satisfy a directory requirement.

## Source basis

Checked 22 September 2026:

- [Paper MCP documentation](https://paper.design/docs/mcp): local desktop endpoint and direct Codex setup.
- [Paper agent plugins](https://github.com/paper-design/agent-plugins): platform manifests and vendor marketplace pattern. Inspected commit `a8ba8b21be02f68c83470213bc72ea43cf3b6d1f`; Codex has HTTP configuration, while current Cursor/Claude manifests invoke Paper's own installed CLI. Purist has no need to copy that launcher: its existing HTTP endpoint is supported by these platforms.
- [Paper on Cursor](https://cursor.com/marketplace/paper): actual Cursor listing, distinct from Paper's own catalogs.
- [Cursor plugin reference](https://cursor.com/docs/reference/plugins): manifest/component paths and public Git submission.
- [Claude plugin reference](https://code.claude.com/docs/en/plugins-reference) and [marketplace reference](https://code.claude.com/docs/en/plugin-marketplaces): plugin metadata, local/Git sources and lifecycle.
- [OpenAI plugin packaging](https://developers.openai.com/plugins/build/plugins): local catalogs and supported Codex compatibility manifests. Current CLI help is the authority for the commands supported by the tested installed version.

The dated rollout status and test results live in the workspace report, not in the application README or CLAUDE instructions.
