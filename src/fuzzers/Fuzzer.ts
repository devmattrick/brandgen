import Name from "../model/Name";

export default abstract class Fuzzer {

  public abstract async fuzz(name: Name): Promise<Name[]>;

}
