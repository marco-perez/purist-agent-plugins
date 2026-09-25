// Packaging preflight only. Does not claim client or canvas acceptance.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const plugin=path.join(root,'plugins/purist-desktop');
const read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const manifests=['claude','cursor','codex'].map(platform=>read(path.join(plugin,`.${platform}-plugin/plugin.json`)));
for(const manifest of manifests){
 assert.equal(manifest.name,'purist-desktop');
 assert.equal(manifest.version,manifests[0].version);
 assert.match(manifest.version,/^\d+\.\d+\.\d+$/);
 assert.equal(manifest.author.name,'Purist');
 assert.equal(manifest.author.email,'support@purist.design');
 assert.equal(manifest.license,'MIT');
 assert.equal(manifest.mcpServers,'./.mcp.json');
 assert(!JSON.stringify(manifest).includes('[TODO:'));
 const mcp=read(path.resolve(plugin,manifest.mcpServers));
 assert.deepEqual(mcp,{mcpServers:{purist:{type:'http',url:'http://127.0.0.1:29980/mcp'}}});
}
for(const platform of ['claude','cursor','codex']){
 const file=platform==='codex'?'.agents/plugins/marketplace.json':`.${platform}-plugin/marketplace.json`;
 const market=read(path.join(root,file));
 assert.equal(market.name,'purist');
 assert.equal(market.plugins.length,1);
 const entry=market.plugins[0];assert.equal(entry.name,'purist-desktop');
 assert.equal(typeof entry.source==='string'?entry.source:entry.source.path,'./plugins/purist-desktop');
 if(platform==='codex')assert.deepEqual(entry.policy,{installation:'AVAILABLE',authentication:'ON_INSTALL'});
}
const codexInterface=manifests[2].interface;
assert.equal(codexInterface.privacyPolicyURL,'https://purist.design/privacy');
assert.equal(codexInterface.termsOfServiceURL,'https://purist.design/terms');
for(const rel of ['LICENSE','plugins/purist-desktop/LICENSE','plugins/purist-desktop/assets/NOTICE.md'])assert(fs.statSync(path.join(root,rel)).isFile(),rel);
for(const rel of ['README.md','INSTALLATION.md','assets/logo.svg','assets/logo.png','skills/purist-design/SKILL.md'])assert(fs.statSync(path.join(plugin,rel)).isFile(),rel);
for(const manifest of manifests){
 for(const rel of [manifest.logo,manifest.skills,manifest.interface?.logo,manifest.interface?.composerIcon].filter(Boolean)){
  assert(rel.startsWith('./')&&!rel.split('/').includes('..'));
  assert(fs.existsSync(path.resolve(plugin,rel)));
 }
}
assert.match(fs.readFileSync(path.join(plugin,'skills/purist-design/SKILL.md'),'utf8'),/^---\nname: purist-design\ndescription: .+\n---/);
console.log('PASS: three manifests/catalogs, one local endpoint, identity/version/path integrity, artwork and workflow guidance');
