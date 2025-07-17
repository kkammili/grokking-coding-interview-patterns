/**
 * Problem Statement:
 * Given an integer, rearrange its digits such that the resulting number is the largest possible
 * and the parity of each digit remains unchanged.
 *
 * Description:
 * Use two max-heaps to separately sort even and odd digits, then reconstruct the number
 * by replacing each digit with the largest available of the same parity.
 */

function largestInteger(num) {
    const digits = num.toString().split('').map(Number);
    const oddHeap = new MaxHeap();
    const evenHeap = new MaxHeap();

    for (const digit of digits) {
        if (digit % 2 === 0) {
            evenHeap.insert(digit);
        } else {
            oddHeap.insert(digit);
        }
    }

    for (let i = 0; i < digits.length; i++) {
        if (digits[i] % 2 === 0) {
            digits[i] = evenHeap.extractMax();
        } else {
            digits[i] = oddHeap.extractMax();
        }
    }

    return parseInt(digits.join(''), 10);
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

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }
}
