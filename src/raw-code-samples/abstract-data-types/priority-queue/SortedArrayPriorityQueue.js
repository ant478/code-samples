export default class SortedArrayPriorityQueue {
  #array = [];

  /**
   * @param {number} key
   * @param {*} data
   */
  insert(key, data) {
    const index = this.#getNewKeyIndex(key);

    this.#array.splice(index, 0, { key, data });
  }

  /**
   * @returns {[key: number, data: *]}
   */
  extractMin() {
    if (this.#array.length === 0) {
      throw new Error('SortedArrayPriorityQueue: empty');
    }

    const min = this.#array.pop();

    return [min.key, min.data];
  }

  #getNewKeyIndex(key) {
    let low = 0;
    let high = this.#array.length;

    while (low < high) {
      const mid = (low + high) >>> 1;

      if (key < this.#array[mid].key)
        low = mid + 1;
      else
        high = mid;
    }

    return low;
  }
}

SortedArrayPriorityQueue.annotation =
`/**
 * Time complexity:
 *   init - O(1)
 *   insert - O(n)
 *   extractMin - O(1)
 */
`;
