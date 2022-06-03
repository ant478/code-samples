import _BinaryHeap from 'src/raw-code-samples/data-structures/heap/BinaryHeap';

const BinaryHeap = _BinaryHeap;

export default class BinaryHeapPriorityQueue {
  #heap = new BinaryHeap();

  /**
   * @param {number} key
   * @param {*} data
   */
  insert(key, data) {
    this.#heap.insert(key, data);
  }

  /**
   * @returns {[key: number, data: *]}
   */
  extractMin() {
    return this.#heap.extractMin();
  }
}

BinaryHeapPriorityQueue.annotation =
`/**
 * Time complexity:
 *   init - O(1)
 *   insert - O(log(n))
 *   extractMin - O(log(n))
 */
`;
