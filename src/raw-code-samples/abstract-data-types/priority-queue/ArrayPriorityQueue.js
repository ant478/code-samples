export default class ArrayPriorityQueue {
  #array = [];

  /**
   * @param {number} key
   * @param {*} data
   */
  insert(key, data) {
    this.#array.push({ key, data });
  }

  /**
   * @returns {[key: number, data: *]}
   */
  extractMin() {
    if (this.#array.length === 0) {
      throw new Error('ArrayPriorityQueue: empty');
    }

    let minIndex = 0;

    for (let i = 1; i <= this.#array.length - 1; i++) {
      if (this.#array[i].key < this.#array[minIndex].key)
        minIndex = i;
    }

    const min = this.#array[minIndex];

    this.#array.splice(minIndex, 1);

    return [min.key, min.data];
  }
}

ArrayPriorityQueue.annotation =
`/**
 * Time complexity:
 *   init - O(1)
 *   insert - O(1)
 *   extractMin - O(n)
 */
`;
