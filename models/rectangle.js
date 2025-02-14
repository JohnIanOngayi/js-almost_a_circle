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

  /**
   * Returns area of rectangle
   */
  area = () => {
    return this.#width * this.#height;
  };

  /**
   * Prints i the rectangle instance using `#`
   */
  display() {
    for (let _h = 0; _h < this.#height; _h++) {
      console.log(" ".repeat(this.#x) + "#".repeat(this.#width));
    }
    for (let _y = 0; _y < this.#y; _y++) {
      console.log();
    }
  }

  /**
   * Returns a string like python's __str__
   */
  describe() {
    let info = {
      type: Rectangle,
      id: this.id,
      width: this.#width,
      height: this.#height,
      x: this.#x,
      y: this.#y,
      area: this.area(),
    };
    console.log(info);
  }

  /**
   * Updates Rectangle by using an array or a dictionary
   * @param {array} args list with values for updating
   * @param {dictionary} kwargs key, values for updatng
   */
  update(kwargs = null, ...args) {
    if (kwargs == null) {
      const prop = [this.id, this.width, this.height, this.x, this.y];
      for (let a = 0; a < args.length; a++) {
        prop[a] = args[a];
      }
      [this.id, this.width, this.height, this.x, this.y] = prop;
    } else {
      Object.entries(kwargs).forEach(([key, value]) => {
        if (this.hasOwnProperty(key)) {
          this[key] = value;
        }
      });
    }
  }
}

module.exports = Rectangle;
