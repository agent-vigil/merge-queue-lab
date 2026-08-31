import assert from "node:assert/strict";
import test from "node:test";

import { health, queueProof } from "../src/health.js";

test("the lab baseline is healthy", () => {
  assert.equal(health(), "ok");
});

test("the passing queue fixture has an explicit proof marker", () => {
  assert.equal(queueProof(), "governed");
});
