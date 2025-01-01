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

function calculateFP(num){
    let sum = 0
    for(let i = 0; i<num.length; i++){
        sum = sum + Math.pow(num[i], 2)
    }
    return sum
}

function isHappyNumber(n){

    // Replace this placeholder return statement with your code
    if(n === 1){
        return true
    }
    let sp = n
    let fp = calculateFP(n + '')
    const memoFP = []

    while(true){
        if(memoFP.includes(fp)){
            //cycle detected
            return false
        }else if(fp === 1){
            //happy number
         return true   
        }
        else{
            // recompute sp, fp and update memo.
            memoFP.push(fp)
            sp = fp
            fp = calculateFP(sp + '')
        }
    }
}

console.log(isHappyNumber(7))