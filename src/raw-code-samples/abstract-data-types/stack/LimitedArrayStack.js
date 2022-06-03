export default class LimitedArrayStack {
  #stack;
  #length;
  #maxLength;

  /**
   * @param {number} maxLength
   */
  constructor({ maxLength }) {
    if (maxLength === undefined) {
      throw new Error('LimitedArrayStack: maxLength is required');
    }

    this.#stack = new Array(maxLength);
    this.#maxLength = maxLength;
    this.#length = 0;
  }

  /**
   * @param {*} data
   */
  push(data) {
    if (this.#length === this.#maxLength) {
      throw new Error('LimitedArrayStack: maximum exceeded');
    }

    this.#stack[this.#length++] = data;
  }

  /**
   * @returns {*}
   */
  pop() {
    if (this.#length === 0) {
      throw new Error('LimitedArrayStack: empty');
    }

    return this.#stack[--this.#length];
  }
}

LimitedArrayStack.annotation =
`/**
 * Time complexity:
 *   init - O(maxLength)
 *   push - O(1)
 *   pop - O(1)
 */
`;
