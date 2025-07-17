/**
 * Problem Statement:
 * Given an array of numbers and a sliding window size k, find the median of each window.
 *
 * Description:
 * Use two heaps to maintain the elements of the current window.
 * The max-heap stores the smaller half, and the min-heap stores the larger half.
 * Balance the heaps as the window slides to efficiently compute the median.
 */

function medianSlidingWindow(nums, k) {
    const result = [];
    const minHeap = new MinHeap();
    const maxHeap = new MaxHeap();

    for (let i = 0; i < nums.length; i++) {
        if (maxHeap.size() === 0 || nums[i] <= maxHeap.peek()) {
            maxHeap.insert(nums[i]);
        } else {
            minHeap.insert(nums[i]);
        }

        if (maxHeap.size() > minHeap.size() + 1) {
            minHeap.insert(maxHeap.extractMax());
        } else if (minHeap.size() > maxHeap.size()) {
            maxHeap.insert(minHeap.extractMin());
        }

        if (i >= k - 1) {
            if (maxHeap.size() === minHeap.size()) {
                result.push((maxHeap.peek() + minHeap.peek()) / 2);
            } else {
                result.push(maxHeap.peek());
            }

            const elementToRemove = nums[i - k + 1];
            if (elementToRemove <= maxHeap.peek()) {
                maxHeap.remove(elementToRemove);
            } else {
                minHeap.remove(elementToRemove);
            }

            if (maxHeap.size() > minHeap.size() + 1) {
                minHeap.insert(maxHeap.extractMax());
            } else if (minHeap.size() > maxHeap.size()) {
                maxHeap.insert(minHeap.extractMin());
            }
        }
    }

    return result;
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

            if (parent <= element) break;
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
                if (leftChild < element) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if (
                    (swap === null && rightChild < element) ||
                    (swap !== null && rightChild < leftChild)
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

    remove(val) {
        const index = this.heap.indexOf(val);
        if (index === -1) return;

        const end = this.heap.pop();
        if (index === this.heap.length) return;

        this.heap[index] = end;
        this.bubbleUp(index);
        this.sinkDown(index);
    }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }
}

class MaxHeap {
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

            if (parent >= element) break;
            this.heap[index] = parent;
            this.heap[parentIndex] = element;
            index = parentIndex;
        }
    }

    extractMax() {
        const max = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.sinkDown();
        }
        return max;
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
                if (leftChild > element) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if (
                    (swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)
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

    remove(val) {
        const index = this.heap.indexOf(val);
        if (index === -1) return;

        const end = this.heap.pop();
        if (index === this.heap.length) return;

        this.heap[index] = end;
        this.bubbleUp(index);
        this.sinkDown(index);
    }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }
}
