import assert from "node:assert/strict";
import test from "node:test";

import { consumerState } from "../src/consumer.js";

test("the consumer sees the governed queue mode", () => {
  assert.equal(consumerState(), "consumer:governed");
});
