export function health() {
  return "ok";
}

export function queueProof() {
  return "strict";
}

export function proofFreshness(ageDays) {
  return ageDays <= 7 ? "current" : "expired";
}
