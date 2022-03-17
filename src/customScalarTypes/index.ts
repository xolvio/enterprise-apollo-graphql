import { readFile } from "@sanjo/read-file";
import { ApolloServer, gql } from "apollo-server";
import { join } from "path";
import { determineDirname } from "../utils/determineDirname.js";
import { dateScalar } from "./dateScalar.js";

const __dirname = determineDirname(import.meta.url);

const typeDefs = gql`
  ${await readFile(join(__dirname, "schema.gql"))}
`;

const resolvers = {
  Date: dateScalar,
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  mocks: {
    Date: () => new Date(),
  },
});

const { url } = await server.listen();
console.log(`🚀 Server listing at ${url}`);
