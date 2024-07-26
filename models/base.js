#!/usr/bin/node

/**
 * Module defines the models super class
 */

class Base {
  /**
   * Base class
   * @param {number} nb_objects: no of instances (private)
   * @param {number} id: unique int id for instance
   */
  static #nb_objects = 0; // Private static property to count all instances

  constructor(id) {
    Base.#nb_objects++;
    if (id == null) {
      this.id = Base.#nb_objects;
    } else {
      this.id = id;
    }
  }
}

module.exports = Base;
