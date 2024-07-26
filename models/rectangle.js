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
}

module.exports = Rectangle;
