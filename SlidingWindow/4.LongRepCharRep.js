// Problem Statement:
// Given a string `s` and an integer `k`, find the length of the longest substring in `s`
// where all characters are identical after replacing at most `k` characters 
// with any other lowercase English character.

// Constraints:
// 1. 1 ≤ s.length ≤ 1000
// 2. s consists of only lowercase English characters.
// 3. 0 ≤ k ≤ s.length

// Steps for Solution:
// 1. Use a sliding window to iterate through the string `s`.
// 2. Maintain a frequency map to store the count of characters in the current window.
// 3. Check if the window is valid. A valid window has at most `k` characters that need to be replaced.
// 4. If the window is invalid, shrink it by moving the `start` pointer forward.
// 5. Track the maximum length of the valid window as you iterate through the string.
// 6. Return the maximum length at the end.

function longestRepeatingCharacterReplacement(s, k) {
    let maxLength = 0; // To store the length of the longest valid substring
    let maxCharCount = 0; // To track the frequency of the most common character in the window
    let charFrequency = {}; // Frequency map to store counts of characters in the current window
    let start = 0; // Start pointer for the sliding window

    // Step 1: Expand the window by iterating through the string
    for (let end = 0; end < s.length; end++) {
        const endChar = s[end]; // Current character
        charFrequency[endChar] = (charFrequency[endChar] || 0) + 1; // Update its count

        // Step 2: Update the maximum frequency of any character in the current window
        maxCharCount = Math.max(maxCharCount, charFrequency[endChar]);

        // Step 3: Check if the current window is valid
        const windowLength = end - start + 1; // Current window length
        if (windowLength - maxCharCount > k) {
            // Invalid window: Shrink it from the left
            const startChar = s[start]; // Character at the start pointer
            charFrequency[startChar]--; // Decrease its count
            start++; // Move the start pointer forward
        }

        // Step 4: Update the maximum length of the valid window
        maxLength = Math.max(maxLength, end - start + 1);
    }

    // Step 5: Return the length of the longest valid substring
    return maxLength;
}

// Example Usage:
console.log(longestRepeatingCharacterReplacement("aabccbb", 2)); // Output: 5
console.log(longestRepeatingCharacterReplacement("abbccdd", 1)); // Output: 3
