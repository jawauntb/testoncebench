#!/usr/bin/env node
// Rebuild the results table in README.md from every results/<run id>/receipt-*.json.
// The newest run for each subject goes in the table; every run is listed under it.
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import path from 'node:path';

const runs = existsSync('results') ? readdirSync('results').filter((d) => /^\d+$/.test(d)).sort((a, b) => Number(b) - Number(a)) : [];
const rows = [];
for (const run of runs) {
  for (const f of readdirSync(path.join('results', run)).filter((f) => /^receipt-.*\.json$/.test(f))) {
    const r = JSON.parse(readFileSync(path.join('results', run, f), 'utf8'));
    rows.push({ run, name: f.slice('receipt-'.length, -'.json'.length), r });
  }
}
const pct = (x) => (x == null ? 'n/a' : `${(x * 100).toFixed(1)}%`);
const x = (v) => (v == null ? 'n/a' : `${v}x`);
const url = (run) => `https://github.com/jawauntb/testoncebench/actions/runs/${run}`;
const line = ({ run, name, r }) => {
  const h = r.headline, f = h.fault_injection ?? {}, pf = h.path_filter_baseline ?? {};
  const faults = f.effective_faults ? `${f.detected_tests} of ${f.newly_failing_tests}` : 'none effective';
  // Every replayed commit touched only docs: a path filter skips them too, so a ratio here would only measure that.
  const docsOnly = pf.wall_s_after_first === 0;
  const plain = docsOnly ? 'docs-only commits' : x(h.speedup_after_first_commit);
  const filter = docsOnly ? 'same as testonce' : x(pf.speedup_of_testonce_over_path_filter);
  return `| ${name} | ${r.commits.length} | ${h.false_skips} | ${faults} | ${pct(h.skip_rate_after_first_commit)} | ${plain} | ${filter} | ${x(h.first_run_tracing_overhead?.wall_ratio)} | \`${(r.testonce_git_head ?? '').slice(0, 7)}\` | [${run}](${url(run)}) |`;
};
const head = '| Subject | Commits | False skips | Faults caught | Skipped after 1st commit | vs plain | vs path filter | 1st-run overhead | testonce | Run |\n|---|---|---|---|---|---|---|---|---|---|';
const latestByName = new Map(); // rows are newest run first, so the first seen per subject wins
for (const row of rows) if (!latestByName.has(row.name)) latestByName.set(row.name, row);
const table = latestByName.size
  ? `${head}\n${[...latestByName.values()].sort((a, b) => (a.name < b.name ? -1 : 1)).map(line).join('\n')}`
  : '_No runs yet._';
const history = rows.length ? rows.map((row) => `- ${row.name}: ${row.r.headline.false_skips} false skips, ${row.r.headline.path_filter_baseline?.wall_s_after_first === 0 ? 'docs-only commits' : `${x(row.r.headline.speedup_after_first_commit)} vs plain`}, run [${row.run}](${url(row.run)})`).join('\n') : '';

const readme = readFileSync('README.md', 'utf8');
const block = `<!-- table:start -->\n${table}\n\n<details><summary>Every run</summary>\n\n${history || '_None yet._'}\n\n</details>\n<!-- table:end -->`;
writeFileSync('README.md', readme.replace(/<!-- table:start -->[\s\S]*<!-- table:end -->/, block));
console.log(`table: ${latestByName.size} subjects, ${rows.length} receipts`);
