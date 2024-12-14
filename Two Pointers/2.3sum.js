/* Problem
Given an integer array nums, return all the unique triplets [nums[i], nums[j], nums[k]] such that:

i != j, i != k, and j != k
nums[i] + nums[j] + nums[k] == 0
The solution set must not contain duplicate triplets.
*/

function threeSum(nums) {
    const result = [];
    
    // Sort the array to enable the two-pointer approach
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicate numbers for the current index
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;  // Left pointer
        let right = nums.length - 1;  // Right pointer

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            
            if (sum === 0) {
                // Found a triplet
                result.push([nums[i], nums[left], nums[right]]);
                
                // Move pointers and skip duplicates
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                
                left++;
                right--;
            } else if (sum < 0) {
                // Increase the sum by moving the left pointer
                left++;
            } else {
                // Decrease the sum by moving the right pointer
                right--;
            }
        }
    }
    
    return result;
}

// Example Usage
console.log(threeSum([-1, 0, 1, 2, -1, -4])); 
// Output: [[-1, -1, 2], [-1, 0, 1]]

console.log(threeSum([])); 
// Output: []

console.log(threeSum([0, 0, 0, 0])); 
// Output: [[0, 0, 0]]

