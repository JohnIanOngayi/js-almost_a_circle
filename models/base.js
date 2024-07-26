#!/usr/bin/node

/**
 * Base class
 * @param {number} nb_objects: no of instances (private)
 * @param {number} id: unique int id for instance
 */
class Base {
  static #nb_objects = 0; // Private static property to count all instances

  /**
   * Creates a Base object
   */
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
