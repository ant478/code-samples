import _BinarySearchTree from 'src/raw-code-samples/data-structures/tree/BinarySearchTree';

const BinarySearchTree = _BinarySearchTree;

export default class IterableBinarySearchTree extends BinarySearchTree {
  [Symbol.iterator]() {
    return this.traverse()[Symbol.iterator]();
  }

  traverse() {
    const instance = this;

    return {
      [Symbol.iterator]() {
        return IterableBinarySearchTree.#traverse(instance.head);
      }
    };
  }

  static traverse(instance) {
    return [...IterableBinarySearchTree.#traverse(instance.head)];
  }

  static *#traverse(node) {
    if (node.left) {
      yield* this.#traverse(node.left);
    }

    yield [node.key, node.data];

    if (node.right) {
      yield* this.#traverse(node.right);
    }
  }
}

IterableBinarySearchTree.annotation = '';
