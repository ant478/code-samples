export default class UnlimitedArrayQueue {
  #queue = [];

  enqueue(dataItem) {
    this.#queue.push(dataItem);
  }

  dequeue() {
    if (this.#queue.length === 0) {
      throw new Error('UnlimitedArrayQueue: empty');
    }

    return this.#queue.shift();
  }
}
