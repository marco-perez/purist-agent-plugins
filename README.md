# Purist agent plugins

A single local Purist integration with native Cursor, Claude Code and Codex manifests. Each connects to the existing desktop MCP endpoint; no hosted setup or new server is included.

## Codex

Add the public Purist Git marketplace and install the desktop plugin:

```sh
codex plugin marketplace add marco-perez/purist-agent-plugins
codex plugin add purist-desktop@purist
```

Open Purist on the same computer, then start a new Codex task. The plugin uses Purist's local MCP server. On Codex builds with custom marketplace browser support, browse the Purist marketplace after adding the source. This Git install is separate from OpenAI's public Plugins Directory; Purist is not listed there. See the [installation guide](plugins/purist-desktop/INSTALLATION.md) for verification, updates and removal.

- [Plugin overview](plugins/purist-desktop/README.md)
- [Installation, update, removal and troubleshooting](plugins/purist-desktop/INSTALLATION.md)
- [Submission materials](SUBMISSION.md)

This directory is the self-contained public marketplace source. Preserve hidden directories when copying or archiving it. The Purist application and backend remain separate private repositories.

Package software and documentation use the [MIT license](LICENSE). The Purist name and logo remain separate brand assets; see [the asset notice](plugins/purist-desktop/assets/NOTICE.md). Support: support@purist.design. [Privacy](https://purist.design/privacy) · [Terms](https://purist.design/terms).

Validate with `node scripts/validate.mjs`. Platform CLI validators and fresh-install acceptance remain necessary; structural validation alone is not client acceptance.
