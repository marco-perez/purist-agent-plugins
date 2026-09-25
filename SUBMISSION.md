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

## Exact publication actions remaining

These actions are **not executed by this package preparation**:

1. Package-only destination: `https://github.com/marco-perez/purist-agent-plugins` (created in the user's signed-in GitHub account as a **private** repository on 25 September 2026). Its private status is not publication. Explicit authorization is still required before making it public or submitting/distributing any listing. The support contact, live privacy/terms links, and package license are recorded above. The site legal-page source still notes unresolved entity/address/jurisdiction details for separate legal review.
2. Complete missing native-client/desktop-UI acceptance from the dated workspace verification report. Resolve app sign-in or agent authentication/access failures without turning on paid fallback. Add a reviewer screenshot only after visually verifying it.
3. Publish **this directory only** as the selected repository root, including hidden directories; do not expose the application/backend repository, workspace artifacts, test profiles or credentials. Set the real repository metadata, commit the package and tag its reviewed version. Public availability and ownership must be checked then.
4. **Cursor:** with the published source URL, submit at https://cursor.com/marketplace/publish. Include listing copy, logo and reviewer steps. Wait for Cursor review; only after approval/publication advertise `/add-plugin purist-desktop`. Local `--plugin-dir` or a custom catalog is not a curated approval.
5. **Claude Code:** distribute the Purist-owned Git marketplace URL and `claude plugin install purist-desktop@purist`. Git-marketplace publication does not require or imply Anthropic's curated approval. If curated inclusion is desired, make a separate explicit submission decision and follow the then-current Anthropic submission route.
6. **Codex:** distribute the Purist-owned Git marketplace URL via `codex plugin marketplace add <approved-git-url>`, then `codex plugin add purist-desktop@purist` on supported local clients. Custom-marketplace distribution does not imply approval in OpenAI's public directory. Any public-directory submission is a separate authorized action with its own current requirements; this package does not create a hosted MCP registration.
7. Record submission IDs, review decisions and public listing URLs only after those events occur. Keep packaged, tested, submitted, approved and published as separate fields.

## Source basis

Checked 22 September 2026:

- [Paper MCP documentation](https://paper.design/docs/mcp): local desktop endpoint and direct Codex setup.
- [Paper agent plugins](https://github.com/paper-design/agent-plugins): platform manifests and vendor marketplace pattern. Inspected commit `a8ba8b21be02f68c83470213bc72ea43cf3b6d1f`; Codex has HTTP configuration, while current Cursor/Claude manifests invoke Paper's own installed CLI. Purist has no need to copy that launcher: its existing HTTP endpoint is supported by these platforms.
- [Paper on Cursor](https://cursor.com/marketplace/paper): actual Cursor listing, distinct from Paper's own catalogs.
- [Cursor plugin reference](https://cursor.com/docs/reference/plugins): manifest/component paths and public Git submission.
- [Claude plugin reference](https://code.claude.com/docs/en/plugins-reference) and [marketplace reference](https://code.claude.com/docs/en/plugin-marketplaces): plugin metadata, local/Git sources and lifecycle.
- [OpenAI plugin packaging](https://developers.openai.com/plugins/build/plugins): local catalogs and supported Codex compatibility manifests. Current CLI help is the authority for the commands supported by the tested installed version.

The dated rollout status and test results live in the workspace report, not in the application README or CLAUDE instructions.
