/*
PROBLEM STATEMENT:
Given a string s containing only digits, return all possible valid IP addresses that can be obtained from s. You can return them in any order. A valid IP address consists of exactly four integers, each integer is between 0 and 255, separated by single dots, and cannot have leading zeros.

PATTERN: Backtracking
*/

// Solution implementation
function restoreIpAddresses(s) {
    const result = [];
    
    function backtrack(start = 0, path = []) {
        if (path.length === 4 && start === s.length) {
            result.push(path.join('.'));
            return;
        }
        if (path.length === 4 || start === s.length) return;
        
        for (let len = 1; len <= 3; len++) {
            if (start + len > s.length) break;
            const segment = s.substring(start, start + len);
            if ((segment.length > 1 && segment[0] === '0') || parseInt(segment) > 255) continue;
            path.push(segment);
            backtrack(start + len, path);
            path.pop();
        }
    }
    
    backtrack();
    return result;
}

/*
DETAILED EXPLANATION:
1. Pattern Identification: 
   - The Backtracking pattern is used to explore all possible configurations and backtrack when a configuration is invalid.
2. Approach:
   - Use a recursive function to build segments of the IP address.
   - Check if each segment is valid (not leading zero unless single digit, and <= 255).
   - If a valid IP is formed, add it to the result list.
3. Solution Walkthrough:
   - Define a helper function `backtrack` with parameters `start` and `path`.
   - Use a loop to try segments of length 1 to 3.
   - Check if the segment is valid and recursively call `backtrack`.
   - If a valid IP is formed, add it to the result.
   - Return the list of valid IP addresses.
4. Complexity: Time O(3^4), Space O(4)
*/
