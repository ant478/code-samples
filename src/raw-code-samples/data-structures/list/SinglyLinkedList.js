export default class SinglyLinkedList {
  #head = null;

  get head() {
    return this.#head;
  }

  insert(dataItem) {
    this.#head = { dataItem, next: this.#head };
  }

  delete(listItem) {
    if (this.#head !== null && listItem === this.#head) {
      this.#head = listItem.next;
      return;
    }

    let prevListItem = this.#head;

    while (prevListItem !== null && prevListItem.next !== listItem) {
      prevListItem = prevListItem.next;
    }

    if (prevListItem === null) {
      throw new Error('SinglyLinkedListItem: not found');
    }

    prevListItem.next = listItem.next;
  }

  search(dataItem) {
    let listItem = this.#head;

    while (listItem !== null) {
      if (listItem.dataItem === dataItem) {
        return listItem;
      }

      listItem = listItem.next;
    }

    throw new Error('SinglyLinkedListItem: not found');
  }
}
