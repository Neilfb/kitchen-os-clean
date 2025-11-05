/**
 * Runtime assertion helper
 * Throws an error if the condition is false
 */
export function invariant(condition: unknown, message: string): asserts condition {
  if (!condition) {
    throw new Error(`Invariant violation: ${message}`);
  }
}
