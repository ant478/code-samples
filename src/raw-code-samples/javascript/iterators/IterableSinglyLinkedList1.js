import _SinglyLinkedList from 'src/raw-code-samples/data-structures/linked-list/SinglyLinkedList';

const SinglyLinkedList = _SinglyLinkedList;

export default class IterableSinglyLinkedList1 extends SinglyLinkedList {
  [Symbol.iterator]() {
    return this.entries()[Symbol.iterator]();
  }

  entries() {
    const instance = this;

    return {
      [Symbol.iterator]() {
        return {
          nextItem: instance.head,
          next() {
            if (this.nextItem === null) {
              return { done: true };
            }

            const value = [this.nextItem.key, this.nextItem.data];
            this.nextItem = this.nextItem.next;

            return { value };
          },
        };
      },
    };
  }

  keys() {
    const instance = this;

    return {
      [Symbol.iterator]() {
        return {
          nextItem: instance.head,
          next() {
            if (this.nextItem === null) {
              return { done: true };
            }

            const value = this.nextItem.key;
            this.nextItem = this.nextItem.next;

            return { value };
          },
        };
      },
    };
  }

  values() {
    const instance = this;

    return {
      [Symbol.iterator]() {
        return {
          nextItem: instance.head,
          next() {
            if (this.nextItem === null) {
              return { done: true };
            }

            const value = this.nextItem.data;
            this.nextItem = this.nextItem.next;

            return { value };
          },
        };
      },
    };
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

IterableSinglyLinkedList1.annotation = '';
