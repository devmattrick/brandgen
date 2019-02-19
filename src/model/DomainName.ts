import Name from "./Name";

/**
 * Represents a possble name including a TLD
 */
export default class DomainName extends Name {

  private tld: string;

  constructor(base: string, tld: string = "com") {
    super(base);

    this.tld = tld.trim().toLowerCase();
  }

  public getTLD(): string {
    return this.tld;
  }

}
