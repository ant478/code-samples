export default class LimitedArrayQueue {
  #queue = [];
  #maxLength = 0;
  #lastItemIndex = -1;
  #itemsCount = 0;

  constructor({ maxLength }) {
    if (maxLength === undefined) {
      throw new Error('LimitedArrayQueue: maxLength is required');
    }

    this.#queue = new Array(maxLength);
    this.#maxLength = maxLength;
    this.#lastItemIndex = -1;
    this.#itemsCount = 0;
  }

  enqueue(dataItem) {
    if (this.#itemsCount === this.#maxLength) {
      throw new Error('LimitedArrayQueue: maximum exceeded');
    }

    this.#lastItemIndex = (this.#lastItemIndex + 1) % this.#maxLength;
    this.#queue[this.#lastItemIndex] = dataItem;
    this.#itemsCount++;
  }

  dequeue() {
    if (this.#itemsCount === 0) {
      throw new Error('LimitedArrayQueue: empty');
    }

    const itemIndex = (
      this.#lastItemIndex - this.#itemsCount + 1 + this.#maxLength
    ) % this.#maxLength;

    const dequeuedItem = this.#queue[itemIndex];
    this.#itemsCount--;

    return dequeuedItem;
  }
}
