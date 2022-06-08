import _BinarySearchTree from 'src/raw-code-samples/data-structures/tree/BinarySearchTree';

const BinarySearchTree = _BinarySearchTree;

export default class IterableBinarySearchTree extends BinarySearchTree {
  [Symbol.iterator]() {
    return this.traverse();
  }

  traverse() {
    return IterableBinarySearchTree.#traverse(this.head);
  }

  static traverse(instance) {
    return [...IterableBinarySearchTree.#traverse(instance.head)];
  }

  static* #traverse(node) {
    if (node.left) {
      yield* this.#traverse(node.left);
    }

    yield [node.key, node.data];

    if (node.right) {
      yield* this.#traverse(node.right);
    }
  }
}

IterableBinarySearchTree.annotation =
`/**
 * tree = new IterableBinarySearchTree();
 *
 * const nodes = [...tree];
 * const nodes = [...tree.traverse()];
 * const nodes = IterableBinarySearchTree.traverse(tree);
 *
 * for (const [key, value] of tree) {}
 * for (const [key, value] of tree.traverse()) {}
 */
`;
