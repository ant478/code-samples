import * as mapPerformance from './performance/map';
import * as setPerformance from './performance/set';

import DoublyLinkedListQueue from './abstract-data-types/queue/DoublyLinkedListQueue';
import ArrayQueue from './abstract-data-types/queue/ArrayQueue';
import LimitedArrayQueue from './abstract-data-types/queue/LimitedArrayQueue';

import ArrayStack from './abstract-data-types/stack/ArrayStack';

import DoublyLinkedList from './data-structures/list/DoublyLinkedList';
import SinglyLinkedList from './data-structures/list/SinglyLinkedList';

export default {
  performance: {
    map: mapPerformance,
    set: setPerformance,
  },
  abstractDataTypes: {
    queue: {
      DoublyLinkedListQueue,
      ArrayQueue,
      LimitedArrayQueue,
    },
    stack: {
      ArrayStack,
    },
  },
  dataStructures: {
    linkedList: {
      DoublyLinkedList,
      SinglyLinkedList,
    },
  },
}
