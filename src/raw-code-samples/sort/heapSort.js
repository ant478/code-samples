import _BinaryHeap from 'src/raw-code-samples/data-structures/heap/BinaryHeap';

const BinaryHeap = _BinaryHeap;

export default function heapSort(array) {
  const heap = BinaryHeap.createFromNumbersArray(array);
  const result = new Array(array.length);

  for (let i = 0; i <= array.length - 1; i++) {
    result[i] = heap.extractMin()[0];
  }

  return result;
}

heapSort.annotation =
`/**
 * Time complexity:
 *   O(n*log(n))
 *
 * @param {number[]} array
 * @returns {number[]}
 */
`;
