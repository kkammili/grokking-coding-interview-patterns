/*
PROBLEM STATEMENT:
You are given an array of transactions transactions where transactions[i] = [fromi, toi, amounti] indicates that the person with ID = fromi gave amounti $ to the person with ID = toi. Return the minimum number of transactions required to settle the debt.

PATTERN: Backtracking
*/

// Solution implementation
function minTransfers(transactions) {
    const balance = {};
    
    for (const [from, to, amount] of transactions) {
        balance[from] = (balance[from] || 0) - amount;
        balance[to] = (balance[to] || 0) + amount;
    }
    
    const debts = Object.values(balance).filter(amount => amount !== 0);
    
    function dfs(start) {
        while (start < debts.length && debts[start] === 0) start++;
        if (start === debts.length) return 0;
        
        let minTransactions = Infinity;
        for (let i = start + 1; i < debts.length; i++) {
            if (debts[i] * debts[start] < 0) {
                debts[i] += debts[start];
                minTransactions = Math.min(minTransactions, 1 + dfs(start + 1));
                debts[i] -= debts[start];
            }
        }
        return minTransactions;
    }
    
    return dfs(0);
}

/*
DETAILED EXPLANATION:
1. Pattern Identification: 
   - The Backtracking pattern is used to explore all possible ways to settle debts with the minimum number of transactions.
2. Approach:
   - Calculate the net balance for each person.
   - Use a recursive function to try settling debts starting from the first non-zero balance.
3. Solution Walkthrough:
   - Calculate the balance for each person and filter out zero balances.
   - Define a helper function `dfs` to explore ways to settle debts.
   - Use a loop to try settling the current debt with other debts.
   - Return the minimum number of transactions required.
4. Complexity: Time O(n!), Space O(n)
*/
