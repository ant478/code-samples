import _BinaryHeap from 'src/raw-code-samples/data-structures/heap/BinaryHeap';

const BinaryHeap = _BinaryHeap;

export default function heapSort(arrayOfNumbers) {
  const heap = BinaryHeap.createFromNumbersArray(arrayOfNumbers);
  const result = new Array(arrayOfNumbers.length);

  for (let i = 0; i <= arrayOfNumbers.length - 1; i++) {
    result[i] = heap.extractMin();
  }

  return result;
}

heapSort.annotation =
`/**
 *  Time complexity:
 *    O(n*log(n))
 */
`;
