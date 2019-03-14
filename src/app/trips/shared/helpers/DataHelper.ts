export class DataHelper {
  static hasValue(obj: any): boolean {
    return obj !== undefined && obj !== null;
  }

  static hasAnyElement(obj: any[]): boolean {
    return this.hasValue(obj) && obj.length > 0;
  }
}
