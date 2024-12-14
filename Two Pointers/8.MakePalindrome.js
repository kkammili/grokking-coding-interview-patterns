/*
Question:
Given a string `s`, return the minimum number of moves required to transform `s` into a palindrome. 
In each move, you can swap any two adjacent characters in `s`.

Constraints:
1 <= s.length <= 2000
- `s` consists of only lowercase English letters.
- `s` is guaranteed to be convertible into a palindrome in a finite number of moves.

Examples:
Input: "aabb"
Output: 2

Input: "abac"
Output: 3
*/

function minMovesToMakePalindrome(s) {
    let left = 0;
    let right = s.length - 1;
    let moves = 0;
    const chars = s.split("");

    while (left < right) {
        if (chars[left] === chars[right]) {
            // If the characters match, move both pointers inward
            left++;
            right--;
        } else {
            // Try to find a matching character for the left pointer in the right half
            let k = right;
            while (k > left && chars[k] !== chars[left]) {
                k--;
            }

            if (k === left) {
                // If no match is found, move the unmatched character to the center
                [chars[left], chars[left + 1]] = [chars[left + 1], chars[left]];
                moves++;
            } else {
                // Bring the matching character to the correct position
                while (k < right) {
                    [chars[k], chars[k + 1]] = [chars[k + 1], chars[k]];
                    k++;
                    moves++;
                }
                // Adjust the pointers
                left++;
                right--;
            }
        }
    }

    return moves;
}

// Example Usage
console.log(minMovesToMakePalindrome("aabb")); // Output: 2
console.log(minMovesToMakePalindrome("abac")); // Output: 3
