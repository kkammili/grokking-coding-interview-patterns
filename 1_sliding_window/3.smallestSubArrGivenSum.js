// Note: sum should be >= s

// function smallSubArrSum(arr, s){
//   const subArr = []
//   for(let i = 0; i<arr.length; i++){
//     const rem = s - arr[i]
//     if(arr.includes(rem)){
//         subArr.push(arr[i], rem)
//         return subArr
//     }
//   }
//   return subArr
// }

// console.log(smallSubArrSum( [1,2,3,5,2], 2))
// wrong impl

//this outputs 1,1 so we need to do it in set's instead 

function smallSubArrSum(arr, s) {
    const seen = new Set(); // To store elements we have seen so far
    for (let i = 0; i < arr.length; i++) {
      const rem = s - arr[i];
      if (seen.has(rem)) { // Check if rem is in the set
        return [rem, arr[i]]; // Return the pair as soon as it's found
      }
      seen.add(arr[i]); // Add the current element to the set
    }
    return []; // Return an empty array if no pair is found
  }
  
  console.log(smallSubArrSum([1, 3, 5, 2, 5, 1], 3));

  // using sliding window instead

  function minSubArrayLen(arr, targetSum) {
    let start = 0;               // Start of the current window
    let currentWindowSum = 0;     // Sum of the current window
    let minLength = Infinity;     // To keep track of the minimum length found
  
    // Expand the window by moving `end` from the start to the end of the array
    for (let end = 0; end < arr.length; end++) {
      currentWindowSum += arr[end]; // Add the next element to the current window sum
  
      // Shrink the window from the start as long as the current sum is at least `targetSum`
      while (currentWindowSum >= targetSum) {
        // Update the minimum length if the current window size is smaller
        minLength = Math.min(minLength, end - start + 1);
        // Subtract the element at the `start` index from the current sum, then move the start of the window
        currentWindowSum -= arr[start];
        start++;
      }
    }
  
    // If minLength was updated from Infinity, return it; otherwise, return 0
    return minLength === Infinity ? 0 : minLength;
  }
  
  console.log(minSubArrayLen([1, 3, 5, 2, 5, 1], 8));
  
  