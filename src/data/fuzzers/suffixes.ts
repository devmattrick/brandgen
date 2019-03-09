import { readFileSync } from "fs";
import { join } from "path";

import { parseNewlineString } from "../../util/parse";
import adfixes from "./adfixes";

const suffixes = parseNewlineString(readFileSync(join(__dirname, "../../../data/suffixes.txt")).toString());

export default [
  ...adfixes,
  ...suffixes,
];
