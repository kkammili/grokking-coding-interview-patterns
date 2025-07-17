/*
PROBLEM STATEMENT:
Given a binary string s, return the number of steps to reduce it to "1". In one step, if the current number is even, you can divide it by 2, otherwise, you can subtract 1 from it.

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

/*
DETAILED EXPLANATION:
1. Pattern Identification: 
   - The Greedy Techniques pattern is used to make the optimal choice at each step to ensure the best outcome.
2. Approach:
   - Traverse the binary string from the end to the start.
   - Use a carry to handle the addition when a '1' is encountered.
   - Increment steps based on whether the current bit is '1' or '0'.
3. Solution Walkthrough:
   - Initialize `steps` and `carry`.
   - Loop through the binary string from the last character to the first.
   - If the current bit is '1', add 2 - carry to steps and set carry to 1.
   - If the current bit is '0', add carry to steps.
   - Return the total steps plus carry.
4. Complexity: Time O(n), Space O(1)
*/
