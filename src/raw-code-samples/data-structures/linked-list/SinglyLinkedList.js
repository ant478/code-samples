export default class SinglyLinkedList {
  #head = null;

  get head() {
    return this.#head;
  }

  insert(key, data) {
    this.#head = { key, data, next: this.#head };
  }

  delete(item) {
    if (this.#head !== null && item === this.#head) {
      this.#head = item.next;
      return;
    }

    let prev = this.#head;

    while (prev !== null && prev.next !== item) {
      prev = prev.next;
    }

    if (prev === null) {
      throw new Error('SinglyLinkedList: not found');
    }

    prev.next = item.next;
  }

  search(key) {
    let item = this.#head;

    while (item !== null) {
      if (item.key === key) {
        return item;
      }

      item = item.next;
    }

    throw new Error('SinglyLinkedList: not found');
  }
}

SinglyLinkedList.annotation =
`/**
 *  Time complexity:
 *    init - O(1)
 *    head - O(1)
 *    insert - O(1)
 *    search - O(n)
 *    delete O(n)
 */
`;
