import { readFileSync } from "fs";
import { join } from "path";

import { parseNewlineString } from "../../util/parse";
import adfixes from "./adfixes";

const prefixes = parseNewlineString(readFileSync(join(__dirname, "../../../data/prefixes.txt")).toString());

export default [
  ...adfixes,
  ...prefixes,
];
