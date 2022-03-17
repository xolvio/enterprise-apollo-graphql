import { readFile } from "@sanjo/read-file";
import { parse } from "graphql";
import { join } from "path";
import { determineDirname } from "../utils/determineDirname.js";

const __dirname = determineDirname(import.meta.url);

const filePath = join(__dirname, "schema.gql");
const schema = await readFile(filePath);
const ast = parse(schema);
debugger; // You can inspect the data of the ast variable in the debugger
