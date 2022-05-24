export default class LimitedArrayStack {
  #stack;
  #length;
  #maxLength;

  constructor({ maxLength }) {
    if (maxLength === undefined) {
      throw new Error('LimitedArrayStack: maxLength is required');
    }

    this.#stack = new Array(maxLength);
    this.#maxLength = maxLength;
    this.#length = 0;
  }

  enqueue(data) {
    if (this.#length === this.#maxLength) {
      throw new Error('LimitedArrayStack: maximum exceeded');
    }

    this.#stack[this.#length++] = data;
  }

  dequeue() {
    if (this.#length === 0) {
      throw new Error('LimitedArrayStack: empty');
    }

    return this.#stack[this.#length--];
  }
}

LimitedArrayStack.annotation =
`/**
 *  Time complexity:
 *    init - O(maxLength)
 *    enqueue - O(1)
 *    dequeue - O(1)
 */
`;
