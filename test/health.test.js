import assert from "node:assert/strict";
import test from "node:test";

import { health, proofFreshness, queueProof } from "../src/health.js";

test("the lab baseline is healthy", () => {
  assert.equal(health(), "ok");
});

test("the passing queue fixture has an explicit proof marker", () => {
  assert.equal(queueProof(), "governed");
});

test("proof freshness expires after seven days", () => {
  assert.equal(proofFreshness(7), "current");
  assert.equal(proofFreshness(8), "expired");
});
