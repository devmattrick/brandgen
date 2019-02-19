import axios from "axios";

let tlds = [];

export default async () => {
  if (tlds.length === 0) {
    tlds = await axios.get("https://data.iana.org/TLD/tlds-alpha-by-domain.txt")
    .then((response) => {
      return response.data.toLowerCase().split("\n").filter((line) => {
        return !line.startsWith("#") && line !== "";
      });
    });
  }

  return tlds;
};
