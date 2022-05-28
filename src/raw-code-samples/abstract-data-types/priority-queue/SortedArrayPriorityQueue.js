export default class SortedArrayPriorityQueue {
  #array = [];

  insert(key, data) {
    let index = 0;
    while (index < this.#array.length && key < this.#array[index].key)
      index++;

    this.#array.splice(index, 0, { key, data });
  }

  extractMin() {
    if (this.#array.length === 0) {
      throw new Error('SortedArrayPriorityQueue: empty');
    }

    return this.#array.pop().data;
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
