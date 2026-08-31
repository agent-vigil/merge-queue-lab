import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

test("the pull-request and merge-queue checks share the protected App identity", () => {
  const pullRequestWorkflow = readFileSync(".github/workflows/agent-vigil.yml", "utf8");
  const queueWorkflow = readFileSync(".github/workflows/agent-vigil-merge-group.yml", "utf8");

  assert.match(pullRequestWorkflow, /governed-head-check:/);
  assert.match(pullRequestWorkflow, /name: "Agent Vigil governed evidence"/);
  assert.match(pullRequestWorkflow, /repositories: \$\{\{ github\.event\.repository\.name \}\}/);
  assert.match(
    queueWorkflow,
    /EXPECTED_ACTOR: \$\{\{ vars\.AGENT_VIGIL_GATE_ACTOR \|\| 'agent-vigil-gate\[bot\]' \}\}/,
  );
});
