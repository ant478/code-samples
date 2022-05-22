export default class LimitedArrayQueue {
  #queue;
  #maxLength;
  #lastIndex;
  #length;

  constructor({ maxLength }) {
    if (maxLength === undefined) {
      throw new Error('LimitedArrayQueue: maxLength is required');
    }

    this.#queue = new Array(maxLength);
    this.#maxLength = maxLength;
    this.#lastIndex = -1;
    this.#length = 0;
  }

  enqueue(data) {
    if (this.#length === this.#maxLength) {
      throw new Error('LimitedArrayQueue: maximum exceeded');
    }

    this.#lastIndex = (this.#lastIndex + 1) % this.#maxLength;
    this.#queue[this.#lastIndex] = data;
    this.#length++;
  }

  dequeue() {
    if (this.#length === 0) {
      throw new Error('LimitedArrayQueue: empty');
    }

    const index = (
      this.#lastIndex - this.#length + 1 + this.#maxLength
    ) % this.#maxLength;

    const data = this.#queue[index];
    this.#length--;

    return data;
  }
}

LimitedArrayQueue.annotation =
`/**
 *  Time complexity:
 *    init - O(maxLength)
 *    enqueue - O(1)
 *    dequeue - O(1)
 */
`;
