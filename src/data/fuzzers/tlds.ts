import axios from "axios";

import { parseNewlineString } from "../../util/parse";

let tlds = [];

export default async () => {
  if (tlds.length === 0) {
    tlds = await axios.get("https://data.iana.org/TLD/tlds-alpha-by-domain.txt")
      .then((response) => {
        return parseNewlineString(response.data);
      });
  }

  return tlds;
};
