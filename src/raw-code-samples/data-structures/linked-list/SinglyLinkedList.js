export default class SinglyLinkedList {
  #head = null;

  get head() {
    return this.#head;
  }

  insert(data) {
    this.#head = { data, next: this.#head };
  }

  delete(item) {
    if (this.#head !== null && item === this.#head) {
      this.#head = item.next;
      return;
    }

    let prevItem = this.#head;

    while (prevItem !== null && prevItem.next !== item) {
      prevItem = prevItem.next;
    }

    if (prevItem === null) {
      throw new Error('SinglyLinkedList: not found');
    }

    prevItem.next = item.next;
  }

  search(data) {
    let item = this.#head;

    while (item !== null) {
      if (item.data === data) {
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
