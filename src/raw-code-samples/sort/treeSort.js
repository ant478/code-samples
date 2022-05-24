import _BinarySearchTree from 'src/raw-code-samples/data-structures/tree/BinarySearchTree';

const BinarySearchTree = _BinarySearchTree;

export default function treeSort(array) {
  const tree = new BinarySearchTree();

  for (let i = 0; i <= array.length - 1; i++) {
    tree.insert(array[i], array[i]);
  }

  return tree.traverse();
}

treeSort.annotation =
`/**
 *  Time complexity:
 *    O(n*log(n))
 */
`;
