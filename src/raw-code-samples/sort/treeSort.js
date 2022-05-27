import _BinarySearchTree from 'src/raw-code-samples/data-structures/tree/BinarySearchTree';

const BinarySearchTree = _BinarySearchTree;

export default function treeSort(arrayOfNumbers) {
  const tree = BinarySearchTree.createFromNumbersArray(arrayOfNumbers);

  return tree.traverse();
}

treeSort.annotation =
`/**
 *  Time complexity:
 *    O(n*log(n))
 */
`;
