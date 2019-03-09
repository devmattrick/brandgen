import { readFileSync } from "fs";
import { join } from "path";

import { parseNewlineString } from "../../util/parse";

// An adfix can go either before or after a word. The more you know!
export default parseNewlineString(readFileSync(join(__dirname, "../../../data/adfixes.txt")).toString());
