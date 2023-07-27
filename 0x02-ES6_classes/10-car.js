export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  /**
   * @param {String} brand - Brand of vehicle
   * @param {String} motor - Type of motor
   * @param {String} color - Color of vehicle
   */

  set brand(brand) {
    if (typeof brand !== 'string') {
      throw new TypeError('brand must be a string');
    }
    this._brand = brand;
  }

  get brand() {
    return this._brand;
  }

  set motor(motor) {
    if (typeof motor !== 'string') {
      throw new TypeError('motor must be a string');
    }
    this._motor = motor;
  }

  get motor() {
    return this._motor;
  }

  set color(color) {
    if (typeof color !== 'string') {
      throw new TypeError('color must be a string');
    }
    this._color = color;
  }

  get color() {
    return this._color;
  }

  cloneCar() {
    const Vehicle = this.constructor[Symbol.vehicle];

    return new Vehicle();
  }

  static get [Symbol.vehicle]() {
    return this;
  }
}
