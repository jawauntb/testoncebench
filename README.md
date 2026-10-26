# testoncebench

Public, rerunnable benchmarks for [testonce](https://github.com/jawauntb/testonce), the CI tool that skips a test only when every file it read, every program it ran and every environment variable is byte-identical to a recorded pass.

Each run replays testonce on the recent history of open-source hardware projects, on GitHub-hosted runners, in this public repository. Anyone can open a run, read its logs and download its raw results.

## Latest results

<!-- table:start -->
| Subject | Commits | False skips | Faults caught | Skipped after 1st commit | vs plain | vs path filter | 1st-run overhead | testonce | Run |
|---|---|---|---|---|---|---|---|---|---|
| openc910-ISA_AMO | 5 | 0 | 1 of 1 | 100.0% | docs-only commits | same as testonce | 1.22x | `4f03e9e` | [40328219891](https://github.com/jawauntb/testoncebench/actions/runs/40328219891) |
| openc910-csr | 5 | 0 | 1 of 1 | 100.0% | docs-only commits | same as testonce | 1.17x | `4f03e9e` | [40328219891](https://github.com/jawauntb/testoncebench/actions/runs/40328219891) |
| openc910-hello_world | 5 | 0 | 1 of 1 | 100.0% | docs-only commits | same as testonce | 1.17x | `4f03e9e` | [40328219891](https://github.com/jawauntb/testoncebench/actions/runs/40328219891) |
| verilog-axis | 6 | 0 | 7 of 7 | 84.0% | 2.55x | 2.04x | 1.05x | `4f03e9e` | [40328219891](https://github.com/jawauntb/testoncebench/actions/runs/40328219891) |
| wb2axip | 8 | 0 | 5 of 5 | 0.0% | 0.91x | 0.78x | 1.12x | `4f03e9e` | [40328219891](https://github.com/jawauntb/testoncebench/actions/runs/40328219891) |
| wb2axip-configured | 8 | 0 | 5 of 5 | 92.1% | 6.92x | 5.88x | 1.09x | `4f03e9e` | [40328219891](https://github.com/jawauntb/testoncebench/actions/runs/40328219891) |

<details><summary>Every run</summary>

- openc910-ISA_AMO: 0 false skips, docs-only commits, run [40328219891](https://github.com/jawauntb/testoncebench/actions/runs/40328219891)
- openc910-csr: 0 false skips, docs-only commits, run [40328219891](https://github.com/jawauntb/testoncebench/actions/runs/40328219891)
- openc910-hello_world: 0 false skips, docs-only commits, run [40328219891](https://github.com/jawauntb/testoncebench/actions/runs/40328219891)
- verilog-axis: 0 false skips, 2.55x vs plain, run [40328219891](https://github.com/jawauntb/testoncebench/actions/runs/40328219891)
- wb2axip-configured: 0 false skips, 6.92x vs plain, run [40328219891](https://github.com/jawauntb/testoncebench/actions/runs/40328219891)
- wb2axip: 0 false skips, 0.91x vs plain, run [40328219891](https://github.com/jawauntb/testoncebench/actions/runs/40328219891)
- openc910-ISA_AMO: 0 false skips, docs-only commits, run [38271087251](https://github.com/jawauntb/testoncebench/actions/runs/38271087251)
- openc910-csr: 0 false skips, docs-only commits, run [38271087251](https://github.com/jawauntb/testoncebench/actions/runs/38271087251)
- openc910-hello_world: 0 false skips, docs-only commits, run [38271087251](https://github.com/jawauntb/testoncebench/actions/runs/38271087251)
- verilog-axis: 0 false skips, 2.63x vs plain, run [38271087251](https://github.com/jawauntb/testoncebench/actions/runs/38271087251)
- wb2axip-configured: 0 false skips, 7.63x vs plain, run [38271087251](https://github.com/jawauntb/testoncebench/actions/runs/38271087251)
- wb2axip: 0 false skips, 0.92x vs plain, run [38271087251](https://github.com/jawauntb/testoncebench/actions/runs/38271087251)
- wb2axip-configured: 0 false skips, 7.55x vs plain, run [38208299265](https://github.com/jawauntb/testoncebench/actions/runs/38208299265)
- wb2axip: 0 false skips, 0.89x vs plain, run [38208299265](https://github.com/jawauntb/testoncebench/actions/runs/38208299265)
- openc910-ISA_AMO: 0 false skips, docs-only commits, run [38197900636](https://github.com/jawauntb/testoncebench/actions/runs/38197900636)
- openc910-csr: 0 false skips, docs-only commits, run [38197900636](https://github.com/jawauntb/testoncebench/actions/runs/38197900636)
- openc910-hello_world: 0 false skips, docs-only commits, run [38197900636](https://github.com/jawauntb/testoncebench/actions/runs/38197900636)
- verilog-axis: 0 false skips, 2.62x vs plain, run [38197900636](https://github.com/jawauntb/testoncebench/actions/runs/38197900636)
- wb2axip-configured: 0 false skips, 0.93x vs plain, run [38197900636](https://github.com/jawauntb/testoncebench/actions/runs/38197900636)
- wb2axip: 0 false skips, 0.91x vs plain, run [38197900636](https://github.com/jawauntb/testoncebench/actions/runs/38197900636)
- openc910-ISA_AMO: 0 false skips, docs-only commits, run [38190950150](https://github.com/jawauntb/testoncebench/actions/runs/38190950150)
- openc910-csr: 0 false skips, docs-only commits, run [38190950150](https://github.com/jawauntb/testoncebench/actions/runs/38190950150)
- openc910-hello_world: 0 false skips, docs-only commits, run [38190950150](https://github.com/jawauntb/testoncebench/actions/runs/38190950150)
- verilog-axis: 0 false skips, 2.56x vs plain, run [38190950150](https://github.com/jawauntb/testoncebench/actions/runs/38190950150)
- wb2axip-configured: 0 false skips, 10.74x vs plain, run [38190950150](https://github.com/jawauntb/testoncebench/actions/runs/38190950150)
- wb2axip: 0 false skips, 0.92x vs plain, run [38190950150](https://github.com/jawauntb/testoncebench/actions/runs/38190950150)

</details>
<!-- table:end -->

## How to read it

- **The oracle** is each project's own test command, run plainly at every replayed commit. testonce runs the same command on the same commits on the same runner.
- **False skips:** tests testonce skipped while the oracle failed them. This is the soundness number, and it should be 0.
- **Faults caught:** a one-line compile error is put into one source file, and every test the oracle then fails must be rerun by testonce, not skipped.
- **vs plain:** wall time of plain runs divided by wall time of testonce runs, after the first, cold commit (the first commit records and skips nothing).
- **vs path filter:** the same ratio against a CI rule that skips commits touching only docs and reruns everything otherwise. It is computed from the measured plain times, so it costs no extra runs.
- **1st-run overhead:** how much slower a recording run is than a plain run.

| Subject | What one test is |
|---|---|
| `verilog-axis` ([alexforencich](https://github.com/alexforencich/verilog-axis)) | one cocotb test file, simulated with Icarus Verilog |
| `wb2axip` ([ZipCPU](https://github.com/ZipCPU/wb2axip)) | one SymbiYosys formal proof file, out of the box |
| `wb2axip-configured` | the same, with the one `ignore` line testonce prints when it refuses to cache: yosys rewrites `~/.local/state/yosys/history` on every run |
| `openc910-*` ([XuanTie C910](https://github.com/XUANTIE-RV/openc910)) | one `smart_run` case: a Verilator build of the core, the case built with XuanTie GCC, and a simulation |

openc910's replayed commits change only docs, so a path filter skips them too. It shows soundness and tracing overhead on a large CPU build, not a speedup.

## Which tests are replayed

`pins/selection-<subject>.json` lists the test files each subject replays. They were chosen once, by run 38190950150 on a 4-core runner: the first files in name order that passed within a time limit at the newest replayed commit. The list is pinned because that rule keeps more files on a faster machine. On a 2-core runner, verilog-axis kept 11 files and measured 5.6x; on 4 cores it kept 15, including a slow test the replayed commits edit, and measured 2.6x. openc910 replays named cases, so it needs no pin.

## Check a run yourself

Every run folder in `results/` holds, per subject: the raw rows (`<subject>.json`), the tool versions and download hashes (`versions-*.txt`), and a receipt (`receipt-*.json`) with sha256 hashes of those files, of the harness, and of the wrapper scripts, plus the runner and the Actions run URL. `testonce-commit.txt` is the testonce commit that ran.

```bash
git clone https://github.com/jawauntb/testonce && cd testonce && git checkout "$(cat ../testoncebench/results/<run>/testonce-commit.txt)"
mkdir -p out && cp ../testoncebench/results/<run>/* out/
node bench/rtl/check-receipt.mjs out/receipt-*.json   # every results file must print "match"
```

To rerun, start the `bench` workflow from the Actions tab (any testonce ref, any subset of subjects). It also runs every Monday.

## What this does not show

A few projects, one runner type, the last 5 to 8 commits each, and test subsets chosen by a fixed rule (the first files that pass at the newest commit within a time limit). No false skip here is evidence, not proof. The proof in testonce's `formal/` covers its model under three stated assumptions.
