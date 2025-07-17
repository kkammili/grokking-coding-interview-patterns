function kSmallestPairs(nums1, nums2, k) {
    const minHeap = new MinHeap();
    const result = [];

    for (let i = 0; i < Math.min(nums1.length, k); i++) {
        minHeap.insert({ sum: nums1[i] + nums2[0], index1: i, index2: 0 });
    }

    while (k > 0 && minHeap.size() > 0) {
        const { sum, index1, index2 } = minHeap.extractMin();
        result.push([nums1[index1], nums2[index2]]);
        k--;

        if (index2 + 1 < nums2.length) {
            minHeap.insert({ sum: nums1[index1] + nums2[index2 + 1], index1, index2: index2 + 1 });
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

            if (parent.sum <= element.sum) break;
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
                if (leftChild.sum < element.sum) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if (
                    (swap === null && rightChild.sum < element.sum) ||
                    (swap !== null && rightChild.sum < leftChild.sum)
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
