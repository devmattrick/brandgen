/**
 * Represents a possible name
 */
export default class Name {

  private base: string;

  constructor(base: string) {
    this.base = base.trim().toLowerCase();
  }

  public getBase(): string {
    return this.base;
  }

}
