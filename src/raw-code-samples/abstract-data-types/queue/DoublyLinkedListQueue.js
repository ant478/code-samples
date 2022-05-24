import _DoublyLinkedList from 'src/raw-code-samples/data-structures/linked-list/DoublyLinkedList';

const DoublyLinkedList = _DoublyLinkedList;

export default class DoublyLinkedListQueue {
  #list = new DoublyLinkedList();

  enqueue(data) {
    this.#list.insertHead(data);
  }

  dequeue() {
    if (this.#list.tail === null) {
      throw new Error('DoublyLinkedListQueue: empty');
    }

    const data = this.#list.tail.data;

    this.#list.delete(this.#list.tail);

    return data;
  }
}

DoublyLinkedListQueue.annotation =
`/**
 *  Time complexity:
 *    init - O(1)
 *    enqueue - O(1)
 *    dequeue - O(1)
 */
`;
