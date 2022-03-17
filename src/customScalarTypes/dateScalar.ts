import { GraphQLScalarType, Kind } from "graphql";

export const dateScalar = new GraphQLScalarType({
  name: "Date",
  description: "Date scalar type",
  serialize(value: unknown): number {
    return (value as Date).getTime();
  },
  parseValue(value: unknown): Date {
    return new Date(value as number);
  },
  parseLiteral(ast: any): Date | null {
    debugger;
    let result;
    if (ast.kind === Kind.INT) {
      result = new Date(parseInt(ast.value, 10));
    } else {
      result = null;
    }
    return result;
  },
});
