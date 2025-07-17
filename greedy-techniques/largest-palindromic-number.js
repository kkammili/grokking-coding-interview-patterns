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
    return left + middle + right || '0';
}
