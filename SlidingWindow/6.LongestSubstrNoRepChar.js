/**
 * Problem: Find the length of the longest substring without repeating characters.
 * Approach: Sliding Window
 * 
 * Constraints:
 * - The input string `str` consists of English letters, digits, symbols, and spaces.
 * - The length of `str` can be large (up to 10^5).
 * - We want to solve the problem in O(n) time complexity.
 */

function findLongestSubstring(str) {
    // Step 0: Initialize an empty hash map and a variable to track the start of the window.
    let charMap = {};  // To store the index of characters in the string.
    let maxLength = 0;  // Track the maximum length of substring found.
    let start = 0;  // Start index of the sliding window.

    // Step 1: Traverse the string character by character.
    for (let end = 0; end < str.length; end++) {
        let currChar = str[end];  // Current character.

        // Step 2: If the character already exists in the map and its index falls within the current window.
        if (charMap[currChar] >= start) {
            // Step 3: Update the start of the window to the index right after the last occurrence of the current character.
            start = charMap[currChar] + 1;
        }

        // Store/update the index of the current character.
        charMap[currChar] = end;

        // Step 4: Update the longest substring length seen so far if the current window length is greater.
        maxLength = Math.max(maxLength, end - start + 1);
    }

    // Step 5: Return the length of the longest substring.
    return maxLength;
}

// Example usage:
console.log(findLongestSubstring('conceptoftheday'));  // Output: 8 ("nceptof")