export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  /**
   * @param {Number} size - Size of class
   * @param {String} location - Location of class
   */

  set size(size) {
    if (typeof size !== 'number') {
      throw new TypeError('size must be a number');
    }
    this._size = size;
  }

  get size() {
    return this._size;
  }

  set location(local) {
    if (typeof local !== 'string') {
      throw new TypeError('location must be a string');
    }
    this._location = local;
  }

  get location() {
    return this._location;
  }

  [Symbol.toPrimitive](value) {
    if (value === 'number') {
      return this.size;
    }
    if (value === 'string') {
      return this.location;
    }
    return this;
  }
}
