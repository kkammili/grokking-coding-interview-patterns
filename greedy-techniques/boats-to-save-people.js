/*
PROBLEM STATEMENT:
You are given an array people where people[i] is the weight of the ith person, and an infinite number of boats where each boat can carry a maximum weight of limit. Each boat carries at most two people at the same time, provided the sum of the weight of those people is at most limit.

Return the minimum number of boats to carry every given person.

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
