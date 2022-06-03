import _BinarySearchTree from 'src/raw-code-samples/data-structures/tree/BinarySearchTree';

const BinarySearchTree = _BinarySearchTree;

export default function treeSort(array) {
  const tree = BinarySearchTree.createFromNumbersArray(array);

  return tree.traverse().map(([key]) => key);
}

treeSort.annotation =
`/**
 * Time complexity:
 *   O(n*log(n))
 *
 * @param {number[]} array
 * @returns {number[]}
 */
`;
