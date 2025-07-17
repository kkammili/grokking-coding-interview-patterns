/**
 * Problem Statement:
 * Given K sorted linked lists, merge them into a single sorted linked list.
 *
 * Detailed Explanation:
 * This problem is a classic application of the K-way merge technique using a MinHeap. We insert the head of each list
 * into the heap. We then repeatedly extract the smallest node from the heap and add it to the merged list. After extracting
 * a node, we insert the next node from the same list into the heap. This process continues until all nodes are merged.
 * The time complexity is O(N log K), where N is the total number of nodes.
 */

function mergeKLists(lists) {
    const minHeap = new MinHeap();
    const dummy = new ListNode(0);
    let current = dummy;

    for (let i = 0; i < lists.length; i++) {
        if (lists[i] !== null) {
            minHeap.insert(lists[i]);
        }
    }

    while (minHeap.size() > 0) {
        const node = minHeap.extractMin();
        current.next = node;
        current = current.next;

        if (node.next !== null) {
            minHeap.insert(node.next);
        }
    }

    return dummy.next;
}

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(val) {
        this.heap.push(val);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let element = this.heap[index];
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.heap[parentIndex];

            if (parent.val <= element.val) break;
            this.heap[index] = parent;
            this.heap[parentIndex] = element;
            index = parentIndex;
        }
    }

    extractMin() {
        const min = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.sinkDown();
        }
        return min;
    }

    sinkDown() {
        let index = 0;
        const length = this.heap.length;
        const element = this.heap[0];

        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild.val < element.val) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if (
                    (swap === null && rightChild.val < element.val) ||
                    (swap !== null && rightChild.val < leftChild.val)
                ) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) break;
            this.heap[index] = this.heap[swap];
            this.heap[swap] = element;
            index = swap;
        }
    }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }
}
