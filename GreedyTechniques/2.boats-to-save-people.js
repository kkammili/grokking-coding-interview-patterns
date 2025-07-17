/*
PROBLEM STATEMENT:
You are given an array people where people[i] is the weight of the i-th person, and an infinite number of boats where each boat can carry a maximum weight of limit. Each boat carries at most two people at the same time, provided the sum of the weight of those people is at most limit. Return the minimum number of boats to carry every given person.

PATTERN: Greedy Techniques
*/

// Solution implementation
function numRescueBoats(people, limit) {
    people.sort((a, b) => a - b);
    let left = 0, right = people.length - 1;
    let boats = 0;
    
    while (left <= right) {
        if (people[left] + people[right] <= limit) {
            left++;
        }
        right--;
        boats++;
    }
    return boats;
}

/*
DETAILED EXPLANATION:
1. Pattern Identification: 
   - The Greedy Techniques pattern is used to make the optimal choice at each step to ensure the best outcome.
2. Approach:
   - Sort the array of people by weight.
   - Use two pointers, one starting at the lightest person and the other at the heaviest.
   - Try to pair the lightest and heaviest person together if possible.
   - If they can't be paired, send the heaviest person alone.
3. Solution Walkthrough:
   - Sort the people array.
   - Initialize two pointers, `left` and `right`.
   - Use a loop to iterate while `left` is less than or equal to `right`.
   - If the sum of weights at `left` and `right` is within the limit, increment `left`.
   - Always decrement `right` and increment the boat count.
   - Return the total number of boats used.
4. Complexity: Time O(n log n), Space O(1)
*/
