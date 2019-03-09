import DomainName from "../model/DomainName";
import Name from "../model/Name";
import Fuzzer from "./Fuzzer";

const VOWEL_REGEX = /[aeiou]/g;

/**
 * Fuzzes names to remove vowels (and Ys) from them. Web 2.0-rrific!
 */
export default class RemoveVowelsFuzzer extends Fuzzer {

  public async fuzz(name: Name): Promise<Name[]> {
    const base = name.getBase();

    const noVowels = base.replace(VOWEL_REGEX, "");
    const noYs = noVowels.replace(/y/g, "");

    if (name instanceof DomainName) {
      const tld = name.getTLD();

      return [
        new DomainName(noVowels, tld),
        new DomainName(noYs, tld),
      ];
    }

    return [
      new Name(noVowels),
      new Name(noYs),
    ];
  }

}
