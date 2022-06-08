export default class BinarySearchTree {
  #head = null;

  get head() {
    return this.#head;
  }

  /**
   * @param {number} key
   * @param {*} data
   */
  insert(key, data) {
    if (!this.#head) {
      this.#head = BinarySearchTree.#createNode(key, data);
      return;
    }

    BinarySearchTree.#insert(this.#head, key, data);
  }

  /**
   * @param {number} key
   * @returns {Node}
   */
  search(key) {
    return this.constructor.#searchNode(this.#head, key);
  }

  /**
   * @param {number} key
   */
  delete(key) {
    const node = this.constructor.#searchNode(this.#head, key);
    let parent;

    try {
      parent = this.constructor.#searchParent(this.#head, node);
    } catch {}

    const replaceParentPointer = (newNode) => {
      if (!parent) {
        this.#head = newNode;
        return;
      }

      parent[node === parent.left ? 'left' : 'right'] = newNode;
    };

    if (!node.left && !node.right) {
      replaceParentPointer(null);
      return;
    }

    if (!node.left || !node.right) {
      replaceParentPointer(node.left || node.right);
      return;
    }

    let replacementNodeParent = node;
    let replacementNode = node.right;

    while (replacementNode.left) {
      replacementNodeParent = replacementNode;
      replacementNode = replacementNode.left;
    }

    if (replacementNodeParent !== node) {
      replacementNodeParent.left = replacementNode.right;
    }

    replacementNode.left = node.left;

    if (replacementNode !== node.right) {
      replacementNode.right = node.right;
    }

    replaceParentPointer(replacementNode);
  }

  /**
   * @returns {Array<{ key: number, data: * }>}
   */
  traverse() {
    return this.constructor.#traverse(this.#head);
  }

  static #searchParent(node, child) {
    if (!node) {
      throw new Error('BinarySearchTree: parent not found');
    }

    if (child === node.left || child === node.right) {
      return node;
    }

    const nextNode = (child.key < node.key ? node.left : node.right);

    return this.#searchParent(nextNode, child);
  }

  static #searchNode(node, key) {
    if (!node) {
      throw new Error('BinarySearchTree: not found');
    }

    if (key === node.key) {
      return node;
    }

    const nextNode = (key < node.key ? node.left : node.right);

    return this.#searchNode(nextNode, key);
  }

  static #createNode(key, data) {
    return { key, data, left: null, right: null };
  }

  static #traverse(node, result = []) {
    if (!node) {
      return [];
    }

    this.#traverse(node.left, result);
    result.push([node.key, node.data]);
    this.#traverse(node.right, result);

    return result;
  }

  static #insert(node, key, data) {
    if (key < node.key) {
      if (!node.left) {
        node.left = this.#createNode(key, data);
      } else {
        this.#insert(node.left, key, data);
      }

      return;
    }

    if (!node.right) {
      node.right = this.#createNode(key, data);
    } else {
      this.#insert(node.right, key, data);
    }
  }

  /**
   * @param {number[]} array
   * @returns {BinarySearchTree}
   */
  static createFromNumbersArray(array) {
    const tree = new this();

    for (let i = 0; i <= array.length - 1; i++) {
      tree.insert(array[i], undefined);
    }

    return tree;
  }
}

BinarySearchTree.annotation =
`/**
 * Time complexity: (log(n) <= h <= n)
 *   init - O(1)
 *   insert - O(h)
 *   search - O(h)
 *   delete - O(h) search + O(h) delete itself
 *   traverse - O(n)
 */
`;
