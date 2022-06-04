import _SinglyLinkedList from 'src/raw-code-samples/data-structures/linked-list/SinglyLinkedList';

const SinglyLinkedList = _SinglyLinkedList;

export default class IterableSinglyLinkedList2 extends SinglyLinkedList {
  [Symbol.iterator]() {
    return this.entries()[Symbol.iterator]();
  }

  entries() {
    return IterableSinglyLinkedList2.#entries(this.head);
  }

  keys() {
    return IterableSinglyLinkedList2.#keys(this.head);
  }

  values() {
    return IterableSinglyLinkedList2.#values(this.head);
  }

  static *#entries(node) {
    yield [node.key, node.data];

    if (node.next) {
      yield* this.#entries(node.next);
    }
  }

  static *#keys(node) {
    yield node.key;

    if (node.next) {
      yield* this.#keys(node.next);
    }
  }

  static *#values(node) {
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

IterableSinglyLinkedList2.annotation = '';
