import dns = require("dns");
import { promisify } from "util";

const promiseResolveNs = promisify(dns.resolveNs);

import DomainName from "../model/DomainName";
import Name from "../model/Name";
import Checker from "./Checker";

export default class DomainChecker extends Checker {

  public name(): string {
    return "Domain";
  }

  public format(name: Name): string {
    return this.getHostname(name);
  }

  public async check(name: Name): Promise<boolean> {
    // This may not be the most accurate way to check for domain existence, but it should work for our purposes

    try {
      await promiseResolveNs(this.getHostname(name));
    } catch (error) {
      if (error.code === dns.NOTFOUND) {
        return true;
      }

      throw new Error(`An error occured when checking for domain name availability: ${error}`);
    }

    return true;
  }

  private getHostname(name: Name): string {
    let tld = "com";

    if (name instanceof DomainName) {
      tld = name.getTLD();
    }

    return `${name.getBase()}.${tld}`;
  }

}
