import defaultPrefixes from "../data/fuzzers/prefixes";
import DomainName from "../model/DomainName";
import Name from "../model/Name";
import Fuzzer from "./Fuzzer";

/**
 * Adds common prefixes to a name.
 */
export default class PrefixFuzzer extends Fuzzer {

  private prefixes: string[];

  constructor(prefixes: string[] = defaultPrefixes) {
    super();

    this.prefixes = prefixes;
  }

  public async fuzz(name: Name): Promise<Name[]> {
    const base = name.getBase();
    const tld = name instanceof DomainName ? name.getTLD() : null;

    return this.prefixes.map((prefix) => {
      const prefixedBase  = `${prefix}${base}`;

      if (tld) {
        return new DomainName(prefixedBase, tld);
      }

      return new Name(prefixedBase);
    });
  }

}
