# testoncebench

Public, rerunnable benchmarks for [testonce](https://github.com/jawauntb/testonce), the CI tool that skips a test only when every file it read, every program it ran and every environment variable is byte-identical to a recorded pass.

Each run replays testonce on the recent history of open-source hardware projects, on GitHub-hosted runners, in this public repository. Anyone can open a run, read its logs and download its raw results.

## Latest results

<!-- table:start -->
_No runs yet._
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
