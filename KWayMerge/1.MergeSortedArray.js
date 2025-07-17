/**
 * Problem Statement:
 * Given two sorted arrays, merge them into a single sorted array.
 *
 * Detailed Explanation:
 * The function takes two sorted arrays as input and merges them into a single sorted array.
 * It iterates through both arrays, comparing elements and adding the smaller element to the result array.
 * This process continues until all elements from both arrays are added to the result.
 * The time complexity is O(n + m), where n and m are the lengths of the two arrays.
 */

function mergeSortedArray(arr1, arr2) {
    const merged = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        merged.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
    }

    return merged;
}
