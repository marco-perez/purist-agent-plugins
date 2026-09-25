# Install Purist

Install/open Purist and sign in to your Purist account on the same computer as the agent. Use Purist's local MCP mode. Keep the app running while inspecting, editing or capturing designs. Start a new client session after installation or update. The endpoint is always `http://127.0.0.1:29980/mcp` (Streamable HTTP).

The packaged commands were exercised with Claude Code 2.1.104, Cursor Agent CLI 2026.09.18-9a7762b, and Codex CLI/app-server 0.155.0-alpha.9.2 on macOS arm64. These are observed versions, not claimed minimums. Check command help on older clients and use direct setup if plugin management is unavailable. Cursor desktop 3.0.16 was present; its plugin-browser install flow and Codex IDE-extension flow require separate verification.

Choose **one** connection for each client: the plugin below, or Purist's existing Connect panel/direct setup. Before migrating, inspect the client's MCP list and back up its configuration. Disable/remove only an existing Purist connection after confirming its name and URL; leave other servers and preferences intact. Keep separately configured hosted Purist disabled in a local session to avoid duplicate tool sets. Installing this plugin does not change Purist's mode or existing MCP settings.

In the local-development commands below, `/absolute/path/to/agent-plugins` means this complete marketplace directory, containing `plugins/` and the three hidden marketplace directories. The public Git repository can be used for Codex installation as shown below; do not use a URL to a standalone marketplace JSON file.

## Claude Code

```sh
claude plugin marketplace add /absolute/path/to/agent-plugins
claude plugin install purist-desktop@purist
claude plugin list
claude mcp list
```

In the interactive CLI, the equivalents start with `/plugin`. Check `/mcp` for the plugin's Purist connection. The same local configuration can be used by Claude Code's local editor integration, but verify that surface separately. A plugin installed from Purist's marketplace has not been approved for Anthropic's curated directory.

Update the checkout first, then:

```sh
claude plugin marketplace update purist
claude plugin update purist-desktop@purist
```

Restart the session. Remove with `claude plugin uninstall purist-desktop@purist`. Optionally remove this catalog with `claude plugin marketplace remove purist`; this affects the catalog, not design documents. Use `--scope` if you originally chose a project/local scope rather than the default user scope.

## Codex CLI and desktop app

For the public Git marketplace, use:

```sh
codex plugin marketplace add marco-perez/purist-agent-plugins
codex plugin add purist-desktop@purist
codex plugin list
```

On Codex builds with custom marketplace browser support, browse the Purist marketplace after adding the source. This is a public Git install route, not a listing in OpenAI's public Plugins Directory.

For a local checkout during development, use:

```sh
codex plugin marketplace add /absolute/path/to/agent-plugins
codex plugin add purist-desktop@purist
codex plugin list
```

In the desktop app, the custom marketplace is also selectable in the plugin browser. Refresh/restart the app as needed and start a new local task after installation. The `.codex-plugin/plugin.json` format is a supported compatibility manifest. It intentionally uses a bundled local HTTP MCP definition, without a hosted app registration.

For a local marketplace, update the checkout, then remove and add `purist-desktop@purist` to refresh its installed copy. For a Git marketplace, first run `codex plugin marketplace upgrade purist`. The upgrade command does not apply to a local directory source. Start a new task; running tasks can retain old skills and tools.

```sh
codex plugin remove purist-desktop@purist
codex plugin add purist-desktop@purist
```

For removal, run only the first command, then optionally `codex plugin marketplace remove purist`. A custom marketplace is distinct from the OpenAI-curated directory. CLI/app-server verification does not establish every desktop UI or IDE-extension surface; consult the release's verification report.

If your Codex version lacks plugin support, retain direct setup through Purist's Connect panel or **Settings → MCP Servers → Add custom → Streamable HTTP**, name `purist`, URL above. The CLI equivalent is:

```sh
codex mcp add purist --url http://127.0.0.1:29980/mcp
codex mcp get purist
```

Remove that direct entry with `codex mcp remove purist`. Do not use these direct commands in addition to an enabled plugin. Never replace the whole `config.toml` to add one server.

## Cursor desktop and local Agent CLI

For local development before publication, load the package for one Agent CLI session:

```sh
agent --plugin-dir /absolute/path/to/agent-plugins/plugins/purist-desktop
```

In Cursor desktop's local plugin workflow, use the plugin's directory or a checkout in the workspace as supported by your installed version. The `.cursor-plugin/marketplace.json` catalog is included for submission. Cursor's marketplace registration command requires a Git URL; a local catalog is not a public listing.

After a listing is published, `/add-plugin purist-desktop` can be used from Cursor's plugin browser. This command is **not a claim that a listing currently exists**. Manage updates, disabling and removal from Cursor Settings → Plugins. For `--plugin-dir`, update the local checkout and start a new session; omit the flag to unload it.

Direct fallback: use Purist's existing Connect panel or merge just this entry into `mcpServers` in `~/.cursor/mcp.json` (or project `.cursor/mcp.json`):

```json
{"purist":{"type":"http","url":"http://127.0.0.1:29980/mcp"}}
```

Back up before editing. Preserve other keys and servers. Remove only this `purist` entry to uninstall direct setup. The CLI's `agent mcp list` command may list direct configurations without enumerating session-only plugins; verify plugin loading inside a session.

## Verify the installation

Confirm exactly one Purist tool set. In a disposable design, ask the agent to read `get_basic_info`, create/open a new file, read the design guide, create an artboard with text, inspect the nodes, change that text, and get a screenshot. Inspect the screenshot. Wait for autosave, reopen the file in a fresh session, and read the edited text again. Signed-in Purist normally saves through its account-backed document storage; absence of a JSON file under the local data directory is not proof of a failed save. Verify the reopened document through the existing app/MCP workflow. A successful connection or tool list alone is not full acceptance. Do not call paid generation tools for this test.

## Troubleshooting

- **Connection refused / failed to connect:** open Purist and wait for startup. Check `http://127.0.0.1:29980/health` for `service: purist-server`. Reconnect MCP or restart the agent. The plugin does not launch Purist for you.
- **Port already in use:** identify the existing process; do not kill an unknown process or change ports. Purist can adopt its own validated server. Close only an instance you control before retrying.
- **Tools connect but no canvas:** open a design in Purist. Canvas tools need its live renderer. The sidecar alone is insufficient.
- **Fresh profile shows sign-in / screenshot says node is not on the canvas:** sign in to Purist and open the target design. A signed-out profile may expose MCP tools and even accept document edits while its auth gate prevents canvas rendering. This is not screenshot acceptance. No hosted MCP setup or provider key is needed for app sign-in.
- **Session not found after restart:** reconnect to create a new MCP session.
- **Duplicate tools:** disable the previous direct/plugin/hosted Purist connection; preserve unrelated servers. Check both user and project scopes.
- **Unauthorized / subscription / credits:** the agent's login and entitlement are separate from Purist local connectivity. Do not add provider keys or enable paid fallback to fix an agent entitlement issue.
- **No visible change:** confirm file/page and node IDs; background edits need not move the user's viewport. Read back the target and capture its screenshot.
- **Save not yet durable:** local edit replies can precede autosave. Wait and verify the reopened document. Never treat `finish_working_on_nodes` as a save receipt.
- **Broken configuration:** restore the relevant backed-up entry or use the client's own add/remove commands. Do not overwrite a whole settings file, run a second installer, or delete a whole client directory.
