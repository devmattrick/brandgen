import tlds from "../../data/fuzzers/tlds";
import DomainName from "../model/DomainName";
import Name from "../model/Name";
import Fuzzer from "./Fuzzer";

/**
 * Fuzzes domains to include domain hacks. For example, digg.com would return di.gg.
 */
export default class DomainHackFuzzer extends Fuzzer {

  public async fuzz(name: Name): Promise<Name[]> {
    const tldList = await tlds();
    const baseName = name.getBase();
    const foundHacks: Name[] = [];

    // Find names that end in a TLD
    tldList.forEach((tld) => {
      if (baseName.endsWith(tld)) {
        foundHacks.push(new DomainName(baseName.slice(0, baseName.lastIndexOf(tld)), tld));
      }
    });

    return foundHacks;
  }

}
