/*
PROBLEM STATEMENT:
Find the K closest points to the origin in a 2D plane.

PATTERN: Top K Elements
*/

// Solution implementation
function kClosest(points, K) {
    return points.sort((a, b) => (a[0]**2 + a[1]**2) - (b[0]**2 + b[1]**2)).slice(0, K);
}

/*
DETAILED EXPLANATION:
1. Pattern Identification: 
   - The problem involves selecting the top K elements based on a distance metric.
2. Approach:
   - Sort points by their Euclidean distance from the origin.
3. Solution Walkthrough:
   - Calculate distance for each point, sort, and select the top K.
4. Complexity: Time O(N log N), Space O(N)
*/
