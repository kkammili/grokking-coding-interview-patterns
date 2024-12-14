/*
Question:
Given a string num representing an integer, determine whether it is a strobogrammatic number. 
Return TRUE if the number is strobogrammatic or FALSE if it is not.

A strobogrammatic number appears the same when rotated 180 degrees (viewed upside down). 
For example, "69" is strobogrammatic because it looks the same when flipped upside down, 
while "962" is not.

Constraints:
1 <= num.length <= 50
- num contains only digits.
- num has no leading zeros except when the number itself is zero.

Examples:
Input: "69"
Output: true

Input: "962"
Output: false

Input: "818"
Output: true
*/

function isStrobogrammatic(num) {
    // Map of strobogrammatic digit pairs
    const validPairs = {
        '0': '0',
        '1': '1',
        '6': '9',
        '8': '8',
        '9': '6'
    };

    // Two-pointer approach
    let left = 0;
    let right = num.length - 1;

    while (left <= right) {
        // Check if current characters are valid strobogrammatic pairs
        if (
            !(num[left] in validPairs) || 
            validPairs[num[left]] !== num[right]
        ) {
            return false;
        }
        // Move the pointers
        left++;
        right--;
    }

    return true; // Number is strobogrammatic
}

// Example Usage
console.log(isStrobogrammatic("69")); // Output: true
console.log(isStrobogrammatic("962")); // Output: false
console.log(isStrobogrammatic("818")); // Output: true
