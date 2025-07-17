/**
 * Problem Statement:
 * Given M sorted lists, find the Kth smallest number among all the lists.
 *
 * Detailed Explanation:
 * This problem can be efficiently solved using a MinHeap. We insert the first element of each list into the heap.
 * Then, we extract the minimum element from the heap K times. Each time we extract an element, we insert the next element
 * from the same list into the heap. This ensures that we always have the smallest elements available for extraction.
 * The time complexity is O(K log M), where M is the number of lists.
 */

function kthSmallestNumber(lists, k) {
    const minHeap = new MinHeap();

    for (let i = 0; i < lists.length; i++) {
        if (lists[i].length > 0) {
            minHeap.insert({ value: lists[i][0], listIndex: i, elementIndex: 0 });
        }
    }

    let numberCount = 0;
    let number = 0;

    while (minHeap.size() > 0) {
        const { value, listIndex, elementIndex } = minHeap.extractMin();
        number = value;
        numberCount++;

        if (numberCount === k) {
            break;
        }

        if (elementIndex + 1 < lists[listIndex].length) {
            minHeap.insert({ value: lists[listIndex][elementIndex + 1], listIndex, elementIndex: elementIndex + 1 });
        }
    }

    return number;
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

            if (parent.value <= element.value) break;
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
                if (leftChild.value < element.value) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if (
                    (swap === null && rightChild.value < element.value) ||
                    (swap !== null && rightChild.value < leftChild.value)
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
