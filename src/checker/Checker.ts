import Name from "../model/Name";

export default abstract class Checker {

  public abstract name(): string;

  public format(name: Name): string {
    return name.getBase();
  }

  public abstract async check(name: Name): Promise<boolean>;

}
