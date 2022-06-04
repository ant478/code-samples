import * as mapPerformance from './performance/map';
import * as setPerformance from './performance/set';
import DoublyLinkedListQueue from './abstract-data-types/queue/DoublyLinkedListQueue';
import ArrayQueue from './abstract-data-types/queue/ArrayQueue';
import LimitedArrayQueue from './abstract-data-types/queue/LimitedArrayQueue';
import HashTableSet from './abstract-data-types/set/HashTableSet';
import BinaryHeapPriorityQueue from './abstract-data-types/priority-queue/BinaryHeapPriorityQueue';
import ArrayPriorityQueue from './abstract-data-types/priority-queue/ArrayPriorityQueue';
import SortedArrayPriorityQueue from './abstract-data-types/priority-queue/SortedArrayPriorityQueue';
import ArrayStack from './abstract-data-types/stack/ArrayStack';
import SinglyLinkedListStack from './abstract-data-types/stack/SinglyLinkedListStack';
import LimitedArrayStack from './abstract-data-types/stack/LimitedArrayStack';
import DoublyLinkedList from './data-structures/linked-list/DoublyLinkedList';
import SinglyLinkedList from './data-structures/linked-list/SinglyLinkedList';
import BinarySearchTree from './data-structures/tree/BinarySearchTree';
import BinaryHeap from './data-structures/heap/BinaryHeap';
import {
  ChainedHashTable,
  HastTableArray,
} from './data-structures/hash-table/ChainedHashTable';
import treeSort from './sort/treeSort';
import heapSort from './sort/heapSort';
import IterableSinglyLinkedList1 from './javascript/iterators/IterableSinglyLinkedList1';
import IterableSinglyLinkedList2 from './javascript/iterators/IterableSinglyLinkedList2';
import IterableBinarySearchTree from './javascript/iterators/IterableBinarySearchTree';

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
    priorityQueue: {
      BinaryHeapPriorityQueue,
      ArrayPriorityQueue,
      SortedArrayPriorityQueue,
    },
    stack: {
      ArrayStack,
      SinglyLinkedListStack,
      LimitedArrayStack,
    },
    set: {
      HashTableSet,
    }
  },
  dataStructures: {
    linkedList: {
      DoublyLinkedList,
      SinglyLinkedList,
    },
    tree: {
      BinarySearchTree,
    },
    heap: {
      BinaryHeap,
    },
    hashTable: {
      ChainedHashTable: {
        ChainedHashTable,
        HastTableArray,
      },
    },
  },
  sort: {
    treeSort,
    heapSort,
  },
  javascript: {
    iterators: {
      IterableSinglyLinkedList1,
      IterableSinglyLinkedList2,
      IterableBinarySearchTree,
    },
  },
}
