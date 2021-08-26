/**
 * Removes nullish values (null and undefined) from array
 */
export function deNullish<T>(arr: (T | null)[]): T[] {
  return arr.filter((item) => item !== null) as T[];
}
