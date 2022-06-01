export default class BinaryHeap {
  #heap;

  constructor(array = []) {
    this.#heap = [null, ...array];
    for (let number = Math.floor(this.#length / 2); number >= 1; number--) {
      this.#heapify(number);
    }
  }

  get #length() {
    return (this.#heap.length - 1);
  }

  insert(key, data) {
    this.#heap.push({ key, data });
    this.#bubbleUp(this.#length);
  }

  extractMin() {
    if (this.#length === 0) {
      throw new Error('BinaryHeap: empty');
    }

    if (this.#length === 1) {
      return this.#heap.pop().data;
    }

    const min = this.#heap[1];

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

    if (left <= this.#length && this.#heap[left].key < this.#heap[smallest].key) {
      smallest = left;
    }

    if (right <= this.#length && this.#heap[right].key < this.#heap[smallest].key) {
      smallest = right;
    }

    if (smallest !== number) {
      this.#swap(number, smallest);
      this.#heapify(smallest);
    }
  }

  static createFromNumbersArray(array) {
    const heapItems = array.map((key) => ({ key, data: key }));

    return new this(heapItems);
  }
}

BinaryHeap.annotation =
`/**
 *  Time complexity:
 *    init - O(1)
 *    makeHeap - O(n)
 *    insert - O(log(n))
 *    extractMin - O(log(n))
 */
`;
