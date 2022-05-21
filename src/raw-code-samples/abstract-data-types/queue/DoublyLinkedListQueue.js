import _DoublyLinkedList from 'src/raw-code-samples/data-structures/list/DoublyLinkedList';

const DoublyLinkedList = _DoublyLinkedList;

export default class DoublyLinkedListQueue {
  #list = new DoublyLinkedList();

  enqueue(dataItem) {
    this.#list.insertHead(dataItem);
  }

  dequeue() {
    if (this.#list.tail === null) {
      throw new Error('DoublyLinkedListQueue: empty');
    }

    const dataItem = this.#list.tail.dataItem;

    this.#list.delete(this.#list.tail);

    return dataItem;
  }
}
