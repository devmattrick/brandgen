import axios from "axios";

import Name from "../model/Name";
import Checker from "./Checker";

export default class InstagramChecker extends Checker {

  public name() {
    return "Instagram";
  }

  public format(name: Name) {
    return `@${name.getBase()}`;
  }

  public async check(name: Name): Promise<boolean> {
    try {
      await axios.get(`https://instagram.com/${name.getBase()}`);
    } catch (error) {
      if (error.response.status === 404) {
        return true;
      }

      throw new Error(`An error occured when checking for Instagram name availability: ${error}`);
    }

    return false;
  }

}
