import axios from "axios";

import Name from "../model/Name";
import Checker from "./Checker";

export default class NPMPackageChecker extends Checker {

  public name() {
    return "NPM Package";
  }

  public format(name: Name) {
    return `@${name.getBase()}`;
  }

  public async check(name: Name): Promise<boolean> {
    try {
      await axios.get(`https://npmjs.com/package/${name.getBase()}`);
    } catch (error) {
      if (error.response.status === 404) {
        return true;
      }

      throw new Error(`An error occured when checking for NPM Package name availability: ${error}`);
    }

    return false;
  }

}
