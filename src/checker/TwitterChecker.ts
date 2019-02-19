import axios from "axios";

import Name from "../model/Name";
import Checker from "./Checker";

export default class TwitterChecker extends Checker {

  public name() {
    return "Twitter";
  }

  public format(name: Name): string {
    return `@${name.getBase()}`;
  }

  public async check(name: Name): Promise<boolean> {
    try {
      await axios.get(`https://twitter.com/${name.getBase()}`);
    } catch (error) {
      if (error.response.status === 404) {
        return true;
      }

      throw new Error(`An error occurred when checking for Twitter name availability: ${error}`);
    }

    return false;
  }

}
