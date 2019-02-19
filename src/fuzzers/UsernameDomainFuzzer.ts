import DomainName from "../model/DomainName";
import Name from "../model/Name";
import Fuzzer from "./Fuzzer";

/**
 * Fuzzes usernames to include the top level domain. For example, "example.com" would produce examplecom and
 * example_com. Useful for when other usernames are already taken.
 */
export default class UsernameDomainFuzzer extends Fuzzer {

  public async fuzz(name: Name): Promise<Name[]> {
    if (name instanceof DomainName) {
      const base = name.getBase();
      const tld = name.getTLD();

      return [
        new Name(`${base}${tld}`),
        new Name(`${base}_${tld}`),
      ];
    }

    // We don't have an included TLD, so we can't fuzz it properly!
    return [];
  }

}
