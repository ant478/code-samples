export default class ArrayStack {
  #stack = [];

  push(data) {
    this.#stack.push(data);
  }

  pop() {
    return this.#stack.pop();
  }
}

ArrayStack.annotation =
  `/**
 *  Time complexity:
 *    init - O(1)
 *    push - O(1)
 *    pop - O(1)
 */
`;

