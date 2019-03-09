import defaultSuffixes from "../data/fuzzers/suffixes";
import DomainName from "../model/DomainName";
import Name from "../model/Name";
import Fuzzer from "./Fuzzer";

/**
 * Adds common suffixes to a name.
 */
export default class SuffixFuzzer extends Fuzzer {

  private suffixes: string[];

  constructor(suffixes: string[] = defaultSuffixes) {
    super();

    this.suffixes = suffixes;
  }

  public async fuzz(name: Name): Promise<Name[]> {
    const base = name.getBase();
    const tld = name instanceof DomainName ? name.getTLD() : null;

    return this.suffixes.map((suffix) => {
      const suffixedBase  = `${base}${suffix}`;

      if (tld) {
        return new DomainName(suffixedBase, tld);
      }

      return new Name(suffixedBase);
    });
  }

}
