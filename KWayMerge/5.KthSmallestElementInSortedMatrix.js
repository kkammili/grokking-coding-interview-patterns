/**
 * Problem Statement:
 * Given a sorted matrix, find the Kth smallest element.
 *
 * Detailed Explanation:
 * We treat the matrix as a collection of sorted lists (each row is a sorted list). We use a MinHeap to efficiently
 * find the Kth smallest element. Initially, we insert the first element of each row into the heap. We then extract
 * the smallest element from the heap K times. Each time we extract an element, we insert the next element from the
 * same row into the heap. This approach ensures that we efficiently find the Kth smallest element.
 * The time complexity is O(K log N), where N is the number of rows.
 */

function kthSmallest(matrix, k) {
    const n = matrix.length;
    const minHeap = new MinHeap();

    for (let i = 0; i < Math.min(n, k); i++) {
        minHeap.insert({ value: matrix[i][0], row: i, col: 0 });
    }

    let number = 0;
    while (k > 0) {
        const { value, row, col } = minHeap.extractMin();
        number = value;
        k--;

        if (col + 1 < n) {
            minHeap.insert({ value: matrix[row][col + 1], row, col: col + 1 });
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
