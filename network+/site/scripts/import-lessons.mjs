// Network City import pipeline.
// Reads the canonical course Markdown in ../modules and generates Starlight
// docs in src/content/docs/modules. The authored lessons stay the source of
// truth; this script is re-run on every build (see package.json).
//
// What it does per lesson:
//   * lifts the title from front-matter (Starlight renders it as the page H1)
//   * strips the in-body leading "# ..." H1 (would duplicate the title)
//   * removes INSTRUCTOR-ONLY sections so the student site stays clean:
//       answer keys, instructor notes, production briefs, glossary updates
//   * prepends a small objective/time badge
//   * embeds the interactive <SwitchSim/> in the flagship switch lesson (MDX)

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const SITE = path.resolve(here, '..');
const REPO = path.resolve(SITE, '..'); // network+/
const SRC = path.join(REPO, 'modules');
const OUT = path.join(SITE, 'src', 'content', 'docs', 'modules');

const FLAGSHIP_ID = 'NA-M07-L02';

// A section is instructor-only if its "## " heading matches one of these.
const STRIP = [/answer key/i, /instructor notes/i, /production brief/i, /glossary updates/i];

function fm(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!m) return { data: {}, raw: '', body: text };
  return { data: parseYaml(m[1]), raw: m[1], body: text.slice(m[0].length) };
}
// tiny front-matter reader for the few scalar/array keys we need
function parseYaml(block) {
  const out = {};
  for (const line of block.split('\n')) {
    const m = line.match(/^([A-Za-z_]+):\s*(.*)$/);
    if (!m) continue;
    let [, k, v] = m;
    v = v.trim();
    if (/^\[.*\]$/.test(v)) {
      out[k] = v.slice(1, -1).split(',').map((s) => s.trim().replace(/^["']|["']$/g, '')).filter(Boolean);
    } else {
      out[k] = v.replace(/^["']|["']$/g, '');
    }
    out['__raw_' + k] = v; // keep the raw (quoted) form for title reuse
  }
  return out;
}

function stripInstructorSections(body) {
  const lines = body.split('\n');
  const kept = [];
  let skipping = false;
  for (const line of lines) {
    if (/^##\s/.test(line)) skipping = STRIP.some((re) => re.test(line));
    if (!skipping) kept.push(line);
  }
  return kept.join('\n');
}

function metaChip(d) {
  const chips = [];
  const ids = Array.isArray(d.objective_ids) ? d.objective_ids : [];
  for (const id of ids) {
    if (/^\d/.test(id)) chips.push('<span class="chip obj">Objective ' + id + '</span>');
    else chips.push('<span class="chip">' + id.replace(/(^|\s)\w/g, (c) => c.toUpperCase()) + '</span>');
  }
  if (d.est_minutes) chips.push('<span class="chip">~' + d.est_minutes + ' min</span>');
  if (d.module && d.lesson) chips.push('<span class="chip">Module ' + d.module + ' · Lesson ' + d.lesson + '</span>');
  return chips.length ? '<p class="nc-meta">' + chips.join('') + '</p>\n\n' : '';
}

function convert(file, moduleDir) {
  const text = fs.readFileSync(file, 'utf8');
  const { data, body } = fm(text);
  const title = data['__raw_title'] || JSON.stringify(data.title || path.basename(file, '.md'));
  const descBits = [];
  if (Array.isArray(data.objective_ids) && data.objective_ids.length && /^\d/.test(data.objective_ids[0]))
    descBits.push('Objective ' + data.objective_ids.join(', '));
  if (data.est_minutes) descBits.push('~' + data.est_minutes + ' min');
  const description = descBits.join(' · ');

  let out = body;
  out = out.replace(/^\s*#\s+.*\n/, '');           // drop leading in-body H1
  out = stripInstructorSections(out);
  out = out.replace(/^\s*---\s*$/gm, '');          // drop "---" thematic breaks (we style sections via headings)
  out = out.replace(/\n{3,}/g, '\n\n').trim();

  const isFlagship = data.id === FLAGSHIP_ID;
  const ext = isFlagship ? 'mdx' : 'md';
  let front = '---\ntitle: ' + title + '\n';
  if (description) front += 'description: "' + description.replace(/"/g, '') + '"\n';
  front += '---\n\n';

  let content = metaChip(data) + out + '\n';

  if (isFlagship) {
    // embed the interactive simulator right where the concept is explained
    const importLine = "import SwitchSim from '../../../../components/SwitchSim.astro';\n\n";
    const inject = '\n\n:::tip[Try it yourself]\nSend cars between the houses and watch the switch learn. The first time it *floods*; after that it delivers straight to the right road.\n:::\n\n<SwitchSim />\n\n';
    if (/\n##\s*6\./.test(content)) content = content.replace(/\n(##\s*6\.)/, inject + '\n$1');
    else content = content + inject;
    front += importLine;
  }

  const destDir = path.join(OUT, moduleDir);
  fs.mkdirSync(destDir, { recursive: true });
  const base = path.basename(file, '.md');
  fs.writeFileSync(path.join(destDir, base + '.' + ext), front + content);
  return base + '.' + ext;
}

// ---- run ----
fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

let n = 0;
for (const moduleDir of fs.readdirSync(SRC).sort()) {
  const lessonsDir = path.join(SRC, moduleDir, 'lessons');
  if (!fs.existsSync(lessonsDir)) continue;
  for (const f of fs.readdirSync(lessonsDir).sort()) {
    if (!f.endsWith('.md') || f.startsWith('.')) continue;
    convert(path.join(lessonsDir, f), moduleDir);
    n++;
  }
}
console.log('Network City: imported ' + n + ' lessons into src/content/docs/modules');
