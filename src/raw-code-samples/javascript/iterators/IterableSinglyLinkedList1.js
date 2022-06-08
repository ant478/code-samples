import _SinglyLinkedList from 'src/raw-code-samples/data-structures/linked-list/SinglyLinkedList';

const SinglyLinkedList = _SinglyLinkedList;

export default class IterableSinglyLinkedList extends SinglyLinkedList {
  [Symbol.iterator]() {
    return this.entries();
  }

  entries() {
    return this.#makeIterator(({ key, data }) => [key, data]);
  }

  keys() {
    return this.#makeIterator(({ key }) => key);
  }

  values() {
    return this.#makeIterator(({ data }) => data);
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

  #makeIterator(getValue) {
    return {
      nextItem: this.head,
      next() {
        if (this.nextItem === null) {
          return { done: true };
        }

        const value = getValue(this.nextItem);
        this.nextItem = this.nextItem.next;

        return { value };
      },
      [Symbol.iterator]() {
        return this;
      },
    };
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
