import _SinglyLinkedList from 'src/raw-code-samples/data-structures/linked-list/SinglyLinkedList';

const SinglyLinkedList = _SinglyLinkedList;

export default class IterableSinglyLinkedList extends SinglyLinkedList {
  [Symbol.iterator]() {
    return this.entries();
  }

  entries() {
    return IterableSinglyLinkedList.#entries(this.head);
  }

  keys() {
    return IterableSinglyLinkedList.#keys(this.head);
  }

  values() {
    return IterableSinglyLinkedList.#values(this.head);
  }

  static* #entries(node) {
    yield [node.key, node.data];

    if (node.next) {
      yield* this.#entries(node.next);
    }
  }

  static* #keys(node) {
    yield node.key;

    if (node.next) {
      yield* this.#keys(node.next);
    }
  }

  static* #values(node) {
    yield node.data;

    if (node.next) {
      yield* this.#values(node.next);
    }
  }

  static entries(instance) {
    return [...instance.entries()];
  }

  static keys(instance) {
    return [...instance.keys()];
  }

  static values(instance) {
    return [...instance.values()];
  }
}

IterableSinglyLinkedList.annotation =
`/**
 * list = new IterableSinglyLinkedList();
 *
 * const entries = [...list];
 * const entries = [...list.entries()];
 * const keys = [...list.keys()];
 * const values = [...list.values()];
 *
 * const entries = IterableSinglyLinkedList.entries(list);
 * const keys = IterableSinglyLinkedList.keys(list);
 * const values = IterableSinglyLinkedList.values(list);
 *
 * for (const [key, value] of list) {}
 * for (const [key, value] of list.entries()) {}
 * for (const key of list.keys()) {}
 * for (const value of list.values()) {}
 */
`;
