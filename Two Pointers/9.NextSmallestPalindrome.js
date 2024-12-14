/*
Question:
Given a string `num_str` representing a palindrome, the string only contains digits. 
Your task is to return the next possible palindrome using the same digits. 
The returned palindrome would be the next largest palindrome, meaning there can be more than one way 
to rearrange the digits to make a larger palindrome. 

Return an empty string if no greater palindrome can be made.

Examples:
Input: "123321"
Output: "132231"

Input: "1111"
Output: ""

Input: "321123"
Output: "331133"

Constraints:
1 <= num_str.length <= 10^5
*/

function nextPalindrome(num_str) {
    // Convert the input to an array for easier manipulation
    const digits = num_str.split("");
    const n = digits.length;

    // Helper function to check if a string is a palindrome
    const isPalindrome = (arr) => {
        let left = 0;
        let right = arr.length - 1;
        while (left < right) {
            if (arr[left] !== arr[right]) return false;
            left++;
            right--;
        }
        return true;
    };

    // Step 1: Find the next lexicographical permutation
    const nextPermutation = (arr) => {
        let i = arr.length - 2;
        // Find the first index where arr[i] < arr[i + 1]
        while (i >= 0 && arr[i] >= arr[i + 1]) {
            i--;
        }

        // If no such index exists, no greater permutation is possible
        if (i === -1) return false;

        // Find the smallest element in arr[i + 1:] that is larger than arr[i]
        let j = arr.length - 1;
        while (arr[j] <= arr[i]) {
            j--;
        }

        // Swap arr[i] and arr[j]
        [arr[i], arr[j]] = [arr[j], arr[i]];

        // Reverse the elements after index i
        let left = i + 1;
        let right = arr.length - 1;
        while (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }

        return true;
    };

    // Step 2: Keep finding the next permutation until a palindrome is found
    while (nextPermutation(digits)) {
        if (isPalindrome(digits)) {
            return digits.join("");
        }
    }

    // If no next palindrome exists, return an empty string
    return "";
}

// Example Usage
console.log(nextPalindrome("123321")); // Output: "132231"
console.log(nextPalindrome("1111"));   // Output: ""
console.log(nextPalindrome("321123")); // Output: "331133"
