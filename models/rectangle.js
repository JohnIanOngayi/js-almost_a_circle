#!/usr/bin/node

const Base = require("./base.js");

/**
 * Class defines Rectangle shape
 * @param {number} width: defines rectangle width (private)
 * @param {number} height: defines rectangle height (private)
 * @param {number} x: defines horizontal coordinate (private)
 * @param {number} y: defines vertical coordinate (private)
 */
class Rectangle extends Base {
  #width;
  #height;
  #x;
  #y;
  /**
   * Creates a Rectangle
   */
  constructor(width, height, x, y, id) {
    super(id);
    if (width == null) {
      throw new Error("width cannot be null");
    }
    if (height == null) {
      throw new Error("height cannot be null");
    }
    try {
      this.#width = width;
      this.#height = height;
      if (x == null) {
        this.#x = 0;
      } else {
        this.#x = x;
      }
      if (y == null) {
        this.#y = 0;
      } else {
        this.#y = y;
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  /**
   * Sets value for private attribute width
   * @param {number} value: new width
   * if value isn't a number throw an error
   */
  set width(value) {
    let n = parseInt(value);
    if (n == undefined) {
      throw new Error("width must be an int");
    }
    if (n <= 0) {
      throw new Error("width must be positive int");
    }
    this.#width = value;
  }

  /**
   * Sets value for private attribute height
   * @param {number} value: new height
   * if value isn't a number throw an error
   */
  set height(value) {
    let n = parseInt(value);
    if (n == undefined) {
      throw new Error("height must be an int");
    }
    if (n <= 0) {
      throw new Error("height must be positive int");
    }
    this.#height = value;
  }

  /**
   * Sets value for private attribute x
   * @param {number} value: new x
   * if value isn't a number throw an error
   */
  set x(value) {
    let n = parseInt(value);
    if (n == undefined) {
      throw new Error("x must be an int");
    }
    if (n <= 0) {
      throw new Error("x must be positive int");
    }
    this.#x = value;
  }

  /**
   * Sets value for private attribute y
   * @param {number} value: new y
   * if value isn't a number throw an error
   */
  set y(value) {
    let n = parseInt(value);
    if (n == undefined) {
      throw new Error("y must be an int");
    }
    if (n <= 0) {
      throw new Error("y must be positive int");
    }
    this.#y = value;
  }

  /**
   * Returns value of private atribute width
   */
  get width() {
    return this.#width;
  }

  /**
   * Returns value of private atribute height
   */
  get height() {
    return this.#height;
  }

  /**
   * Returns value of private atribute x
   */
  get x() {
    return this.#x;
  }

  /**
   * Returns value of private atribute width
   */
  get y() {
    return this.#y;
  }
}

module.exports = Rectangle;
