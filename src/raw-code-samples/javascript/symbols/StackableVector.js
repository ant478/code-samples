export default class StackableVector {
  #value;

  constructor(value = 0) {
    if (this.#value >= (1 << 30)) {
      throw new Error('StackableVector: overflow');
    }

    this.#value = value;
  }

  [Symbol.toPrimitive](hint) {
    return (hint === 'string' ? this.toString() : this.valueOf());
  }

  valueOf() {
    return this.#value;
  }

  toString() {
    const mask = ((1 << 15) - 1);
    const x = (this.#value >> 15 & mask);
    const y = (this.#value & mask);

    return `StackableVector: (${x}, ${y})`;
  }

  /**
   * @param {number} x
   * @param {number} y
   * @returns {StackableVector}
   */
  static create(x, y) {
    if (x >= (1 << 15) || y >= (1 << 15)) {
      throw new Error('StackableVector: overflow');
    }

    return new StackableVector((x << 15) + y);
  }
}

StackableVector.annotation =
`/**
 * x ∈ [0, 2**15); y ∈ [0, 2**15);
 *
 * v1 = StackableVector.create(100, 200);
 * v2 = StackableVector.create(300, 100);
 * v3 = StackableVector.create(200, 500);
 *
 * v4 = new StackableVector(3*v1 + 2*v2 + v3);
 */
`;
