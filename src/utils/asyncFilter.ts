export async function asyncFilter<T>(
  array: T[],
  predicate: (item: T) => Promise<boolean>
): Promise<T[]> {
  const result: T[] = [];
  for (const item of array) {
    if (await predicate(item)) {
      result.push(item);
    }
  }
  return result;
}
