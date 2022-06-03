export default class ArrayQueue {
  #queue = [];

  /**
   * @param {*} data
   */
  enqueue(data) {
    this.#queue.push(data);
  }

  /**
   * @returns {*}
   */
  dequeue() {
    if (this.#queue.length === 0) {
      throw new Error('ArrayQueue: empty');
    }

    return this.#queue.shift();
  }
}

ArrayQueue.annotation =
`/**
 * Time complexity:
 *   init - O(1)
 *   enqueue - O(1)
 *   dequeue - O(n)
 */
`;
