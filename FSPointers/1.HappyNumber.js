/*
### **Problem Description**
Write an algorithm to determine if a number \( n \) is a **happy number**.

#### **Definition of a Happy Number:**
A number is considered happy if, when repeatedly replacing it with the sum of the squares of its digits:
1. The process eventually reaches \( 1 \), indicating the number is happy.
2. If the process results in an infinite cycle (i.e., it never reaches \( 1 \)), the number is not happy.

#### **Steps to Check if \( n \) is Happy:**
1. Start with the given number \( n \).
2. Replace \( n \) with the sum of the squares of its digits.
3. Repeat the process until:
   - \( n = 1 \), meaning \( n \) is a happy number.
   - \( n \) enters a cycle, meaning \( n \) is not a happy number.

Return **TRUE** if \( n \) is a happy number and **FALSE** otherwise.

---

### **Constraints**
- \( 1 \leq n \leq 2^{31} - 1 \)

---

### **Examples**

#### Example 1:
**Input**: \( n = 19 \)  
**Output**: `TRUE`  
**Explanation**:  
The process is as follows:
- \( 1^2 + 9^2 = 82 \)
- \( 8^2 + 2^2 = 68 \)
- \( 6^2 + 8^2 = 100 \)
- \( 1^2 + 0^2 + 0^2 = 1 \)  
Since the process ends in \( 1 \), \( 19 \) is a happy number.

---

#### Example 2:
**Input**: \( n = 2 \)  
**Output**: `FALSE`  
**Explanation**:  
The process is as follows:
- \( 2^2 = 4 \)
- \( 4^2 = 16 \)
- \( 1^2 + 6^2 = 37 \)
- \( 3^2 + 7^2 = 58 \)
- \( 5^2 + 8^2 = 89 \)
- \( 8^2 + 9^2 = 145 \)
- \( 1^2 + 4^2 + 5^2 = 42 \)
- \( 4^2 + 2^2 = 20 \)
- \( 2^2 + 0^2 = 4 \) (cycle detected)  
Since the process enters a cycle, \( 2 \) is not a happy number.

---

*/

// import sumOfSquaredDigits from "./sum_of_squared_digits.js";

/**
 * Happy Number
 * 
 * A happy number is a number defined by the following process:
 * Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.
 * 
 * Example:
 * Input: 19
 * Output: true
 * 
 * Approach:
 * 1. Use two pointers, slow and fast, to detect cycles.
 * 2. The slow pointer moves one step at a time, while the fast pointer moves two steps.
 * 3. If they meet at 1, the number is happy. If they meet at any other number, a cycle is detected, and the number is not happy.
 */

function calculateFP(num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum = sum + Math.pow(num[i], 2);
    }
    return sum;
}

function isHappyNumber(n) {
    let slow = n;
    let fast = calculateFP(n + '');
    
    while (fast !== 1 && slow !== fast) {
        slow = calculateFP(slow + '');
        fast = calculateFP(calculateFP(fast + ''));
    }
    
    return fast === 1;
}

console.log(isHappyNumber(19));  // Output: true
console.log(isHappyNumber(2));   // Output: false
