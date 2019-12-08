export class DataHelper {
  static hasValue(obj: any): boolean {
    return obj !== undefined && obj !== null;
  }

  static hasAnyElement(obj: any[]): boolean {
    return this.hasValue(obj) && obj.length > 0;
  }

  // Returns a random integer between min (inclusive) and max (inclusive).
  static getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
