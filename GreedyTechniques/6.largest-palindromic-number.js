/*
PROBLEM STATEMENT:
Given a string num representing a large integer, return the largest palindromic integer (in the form of a string) that can be formed using the digits of num. If no palindromic number can be formed, return an empty string.

PATTERN: Greedy Techniques
*/

// Solution implementation
function largestPalindromic(num) {
    const count = Array(10).fill(0);
    for (const digit of num) {
        count[digit]++;
    }
    
    let left = '', middle = '';
    for (let i = 9; i >= 0; i--) {
        if (count[i] >= 2) {
            left += String(i).repeat(Math.floor(count[i] / 2));
        }
        if (count[i] % 2 === 1 && middle === '') {
            middle = String(i);
        }
    }
    
    const right = left.split('').reverse().join('');
    const result = left + middle + right;
    return result[0] === '0' ? '0' : result;
}

/*
DETAILED EXPLANATION:
1. Pattern Identification: 
   - The Greedy Techniques pattern is used to make the optimal choice at each step to ensure the best outcome.
2. Approach:
   - Count the frequency of each digit.
   - Form the left half of the palindrome using the most frequent digits.
   - Choose the largest possible middle digit if available.
3. Solution Walkthrough:
   - Initialize a count array for digits 0-9.
   - Loop through the digits in `num` to populate the count array.
   - Construct the left half of the palindrome using the most frequent digits.
   - Select a middle digit if any digit has an odd count.
   - Construct the right half by reversing the left half.
   - Return the constructed palindrome, handling leading zeros.
4. Complexity: Time O(n), Space O(1)
*/
