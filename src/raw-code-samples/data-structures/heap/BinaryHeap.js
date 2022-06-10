import { ArrayStartingFromOne as _ArrayStartingFromOne } from 'src/raw-code-samples/javascript/proxy/ArrayStartingFromOne';

const ArrayStartingFromOne = _ArrayStartingFromOne;

export default class BinaryHeap {
  #heap;

  /**
   * @param {Array<{key: number, data: *}>} [array = []]
   */
  constructor(array = []) {
    this.#heap = ArrayStartingFromOne.from(array);
    for (let number = Math.floor(this.#heap.length / 2); number >= 1; number--) {
      this.#heapify(number);
    }
  }

  /**
   * @param {number} key
   * @param {*} data
   */
  insert(key, data) {
    this.#heap.push({ key, data });
    this.#bubbleUp(this.#heap.length);
  }

  /**
   * @returns {[key: number, data: *]}
   */
  extractMin() {
    if (this.#heap.length === 0) {
      throw new Error('BinaryHeap: empty');
    }

    let min;

    if (this.#heap.length === 1) {
      min = this.#heap.pop();
      return [min.key, min.data];
    }

    min = this.#heap[1];

    this.#heap[1] = this.#heap.pop();
    this.#heapify(1);

    return [min.key, min.data];
  }

  #swap(i, g) {
    const tmp = this.#heap[i];
    this.#heap[i] = this.#heap[g];
    this.#heap[g] = tmp;
  }

  #bubbleUp(number) {
    if (number === 1) {
      return;
    }

    const parentNumber = Math.floor(number / 2);

    if (this.#heap[parentNumber].key > this.#heap[number].key) {
      this.#swap(parentNumber, number);
      this.#bubbleUp(parentNumber);
    }
  }

  #heapify(number) {
    const left = (2 * number);
    const right = (2 * number + 1);
    let smallest = number;

    if (left <= this.#heap.length && this.#heap[left].key < this.#heap[smallest].key) {
      smallest = left;
    }

    if (right <= this.#heap.length && this.#heap[right].key < this.#heap[smallest].key) {
      smallest = right;
    }

    if (smallest !== number) {
      this.#swap(number, smallest);
      this.#heapify(smallest);
    }
  }

  /**
   * @param {number[]} array
   * @returns {BinaryHeap}
   */
  static createFromNumbersArray(array) {
    const heapItems = array.map((key) => ({ key, data: undefined }));

    return new this(heapItems);
  }
}

BinaryHeap.annotation =
`/**
 * Time complexity:
 *   init (with zero items) - O(1)
 *   init (with n items) - O(n)
 *   insert - O(log(n))
 *   extractMin - O(log(n))
 */
`;
