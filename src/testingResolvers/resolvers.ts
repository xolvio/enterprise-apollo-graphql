export function resolver(parent: any, args: any, context: any, info: any): any {
  return 1;
}

export async function asyncResolver(
  parent: any,
  args: any,
  context: any,
  info: any
): Promise<any> {
  return 1;
}
