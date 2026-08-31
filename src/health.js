export function health() {
  return "ok";
}

export function queueProof() {
  return "governed";
}

export function proofFreshness(ageDays) {
  return ageDays <= 7 ? "current" : "expired";
}
