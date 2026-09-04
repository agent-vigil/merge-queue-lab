import { queueProof } from "./health.js";

export function consumerState() {
  return `consumer:${queueProof()}`;
}
