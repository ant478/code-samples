export default class SortedArrayPriorityQueue {
  #array = [];

  insert(key, data) {
    const index = this.#getNewKeyIndex(key);

    this.#array.splice(index, 0, { key, data });
  }

  extractMin() {
    if (this.#array.length === 0) {
      throw new Error('SortedArrayPriorityQueue: empty');
    }

    return this.#array.pop().data;
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
 *  Time complexity:
 *    init - O(1)
 *    insert - O(n)
 *    extractMin - O(1)
 */
`;
