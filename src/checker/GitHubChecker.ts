import axios from "axios";

import Name from "../model/Name";
import Checker from "./Checker";

export default class GithubChecker extends Checker {

  public name() {
    return "Github";
  }

  public format(name: Name) {
    return `@${name.getBase()}`;
  }

  public async check(name: Name): Promise<boolean> {
    try {
      await axios.get(`https://github.com/${name.getBase()}`);
    } catch (error) {
      if (error.response.status === 404) {
        return true;
      }

      throw new Error(`An error occured when checking for Github name availability: ${error}`);
    }

    return false;
  }

}
