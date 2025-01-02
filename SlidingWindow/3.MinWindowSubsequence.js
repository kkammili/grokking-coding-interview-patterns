/**
 * Problem Statement:
 * Given two strings, str1 and str2, find the shortest substring in str1 such that str2 is a subsequence of that substring.
 * A substring is defined as a contiguous sequence of characters within a string.
 * A subsequence is a sequence that can be derived from another sequence by deleting zero or more elements without changing the order of the remaining elements.
 * If there is no substring in str1 that covers all characters in str2, return an empty string.
 * If there are multiple minimum-length substrings that meet the subsequence requirement, return the one with the left-most starting index.
 *
 * Constraints:
 * - 1 ≤ str1.length ≤ 2000
 * - 1 ≤ str2.length ≤ 100
 * - str1 and str2 consist of uppercase and lowercase English letters.
 */

/**
 * 

1. **Step 0**: Begin iterating through `str1` to locate a potential window that contains all the characters of `str2` in their order of appearance.

2. **Step 1**: Once you've identified a potential end, backtrack through the characters of `str1` from this end position until you've found all the characters of `str2` in reverse order. This helps locate the potential start of the smallest subsequence.

3. **Step 2**: Update the minimum window subsequence if the current window is smaller than the shortest subsequence found so far.

4. **Step 3**: Repeat the process, starting every time from the second character of the current window, until the end of `str1` has been reached.

5. **Step 4**: Return the minimum window subsequence.* @param {*} str1 
 * @param {*} str2 
 * @returns 
 */


function findShortestSubsequenceSubstring(str1, str2) {
    let minSubstring = ""; // To store the result substring
    let minLength = Infinity; // Track the minimum length of the substring

    let i = 0; // Pointer for str1
    while (i < str1.length) {
        let j = 0; // Pointer for str2

        // Step 0: Locate a potential window in str1 that contains all characters of str2 in order
        while (i < str1.length) {
            if (str1[i] === str2[j]) {
                j++;
            }
            if (j === str2.length) break; // Found all characters of str2 in order
            i++;
        }

        if (j < str2.length) break; // No valid window found, exit loop

        // Step 1: Backtrack to find the starting point of the smallest window
        let end = i; // Current end position of the window
        j = str2.length - 1; // Reset j to the last character of str2
        while (j >= 0) {
            if (str1[i] === str2[j]) {
                j--;
            }
            i--;
        }

        i++; // Adjust `i` back to the start of the window
        const currentSubstring = str1.slice(i, end + 1); // Extract the current window

        // Step 2: Update the minimum substring if the current window is smaller
        if (currentSubstring.length < minLength) {
            minLength = currentSubstring.length;
            minSubstring = currentSubstring;
        }

        // Step 3: Start the next iteration from the second character of the current window
        i = i + 1; // Move one step forward
    }

    // Step 4: Return the minimum window subsequence
    return minSubstring;
}

// Example Usage:
const str1 = "abbcb";
const str2 = "ac";
console.log(findShortestSubsequenceSubstring(str1, str2)); // Output: "abbc"
