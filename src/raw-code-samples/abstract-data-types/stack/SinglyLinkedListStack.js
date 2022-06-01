import _SinglyLinkedList from 'src/raw-code-samples/data-structures/linked-list/SinglyLinkedList';

const SinglyLinkedList = _SinglyLinkedList;

export default class SinglyLinkedListStack {
  #list = new SinglyLinkedList();

  push(key, data) {
    this.#list.insert(key, data);
  }

  pop() {
    if (this.#list.head === null) {
      throw new Error('SinglyLinkedListQueue: empty');
    }

    const { key, data } = this.#list.head;

    this.#list.delete(this.#list.head);

    return [key, data];
  }
}

SinglyLinkedListStack.annotation =
`/**
 *  Time complexity:
 *    init - O(1)
 *    enqueue - O(1)
 *    dequeue - O(1)
 */
`;
