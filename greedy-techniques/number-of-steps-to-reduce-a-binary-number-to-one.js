/*
PROBLEM STATEMENT:
Given a binary string s, return the number of steps to reduce it to "1" under the following rules:
1. If the current number is even, you have to divide it by 2.
2. If the current number is odd, you have to add 1 to it.

PATTERN: Greedy Techniques
*/

// Solution implementation
function numSteps(s) {
    let steps = 0;
    let carry = 0;
    for (let i = s.length - 1; i > 0; i--) {
        if (s[i] === '1') {
            steps += 2 - carry;
            carry = 1;
        } else {
            steps += carry;
        }
    }
    return steps + carry;
}
