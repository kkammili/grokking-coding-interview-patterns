/*
Question:
Write a function that takes a string as input and checks whether it can be a valid palindrome 
by removing at most one character from it.

Constraints:
1 <= string.length <= 10^5
- The string only consists of English letters.

Examples:
Input: "abceba"
Output: true

Input: "abcdef"
Output: false
*/

function validPalindrome(s) {
    // Helper function to check if a substring is a palindrome
    function isPalindrome(str, left, right) {
        while (left < right) {
            if (str[left] !== str[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }

    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            // If characters don't match, try skipping one character from either end
            return (
                isPalindrome(s, left + 1, right) || // Skip left character
                isPalindrome(s, left, right - 1)   // Skip right character
            );
        }
        left++;
        right--;
    }

    return true; // String is already a palindrome
}

// Example Usage
console.log(validPalindrome("abceba")); // Output: true
console.log(validPalindrome("abcdef")); // Output: false
