/*
PROBLEM STATEMENT:
Assume you are an awesome parent and want to give your children some cookies. You have n children and m cookies. Each child i has a greed factor g[i], which is the minimum size of a cookie that the child will be content with; and each cookie j has a size s[j]. You want to maximize the number of your content children and output the maximum number.

PATTERN: Greedy Techniques
*/

// Solution implementation
function findContentChildren(g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    
    let child = 0, cookie = 0;
    while (child < g.length && cookie < s.length) {
        if (s[cookie] >= g[child]) {
            child++;
        }
        cookie++;
    }
    
    return child;
}

/*
DETAILED EXPLANATION:
1. Pattern Identification: 
   - The Greedy Techniques pattern is used to make the optimal choice at each step to ensure the best outcome.
2. Approach:
   - Sort the greed factors and cookie sizes.
   - Use two pointers to assign the smallest available cookie that satisfies each child's greed factor.
3. Solution Walkthrough:
   - Sort the arrays `g` and `s`.
   - Initialize two pointers, `child` and `cookie`.
   - Use a loop to iterate through both arrays.
   - If the current cookie can satisfy the current child, increment the `child` pointer.
   - Always increment the `cookie` pointer.
   - Return the number of content children.
4. Complexity: Time O(n log n + m log m), Space O(1)
*/
