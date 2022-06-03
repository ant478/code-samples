import _DoublyLinkedList from 'src/raw-code-samples/data-structures/linked-list/DoublyLinkedList';

const DoublyLinkedList = _DoublyLinkedList;

export default class DoublyLinkedListQueue {
  #list = new DoublyLinkedList();

  /**
   * @param {number} key
   * @param {*} data
   */
  enqueue(key, data) {
    this.#list.insertHead(key, data);
  }

  /**
   * @returns {[key: number, data: *]}
   */
  dequeue() {
    if (this.#list.tail === null) {
      throw new Error('DoublyLinkedListQueue: empty');
    }

    const { key, data } = this.#list.tail;

    this.#list.delete(this.#list.tail);

    return [key, data];
  }
}

DoublyLinkedListQueue.annotation =
`/**
 * Time complexity:
 *   init - O(1)
 *   enqueue - O(1)
 *   dequeue - O(1)
 */
`;
