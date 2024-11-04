/*
The sliding window technique we used is essentially a refined version of the two-pointer approach. In fact, the sliding window method is a type of two-pointer technique where:

One pointer (start) marks the beginning of the current window.
The other pointer (end) iterates over the array, expanding the window by adding one element at a time.
With each new character that end points to, we expand the window. When the window contains more than k distinct characters, we increment start to "shrink" the window, maintaining only k distinct characters.
*/
function longestSubstringKDistinct(s, k) {
    let start = 0;                // Start of the sliding window
    let maxLength = 0;            // To keep track of the longest substring length
    const charFrequency = new Map(); // Map to store the frequency of characters
  
    // Expand the window by moving `end` from the start to the end of the string
    for (let end = 0; end < s.length; end++) {
      const endChar = s[end];
      charFrequency.set(endChar, (charFrequency.get(endChar) || 0) + 1);
  
      // Shrink the window if we have more than `k` distinct characters
      while (charFrequency.size > k) {
        const startChar = s[start];
        charFrequency.set(startChar, charFrequency.get(startChar) - 1);
        if (charFrequency.get(startChar) === 0) {
          charFrequency.delete(startChar); // Remove the character completely if its frequency is 0
        }
        start++; // Move the start of the window forward
      }
  
      // Update the maximum length if we have exactly `k` distinct characters
      if (charFrequency.size === k) {
        maxLength = Math.max(maxLength, end - start + 1);
      }
    }
  
    return maxLength;
  }
  
  // Example usage:
  console.log(longestSubstringKDistinct("araaci", 2)); // Output: 4 ("araa")
  console.log(longestSubstringKDistinct("araaci", 1)); // Output: 2 ("aa")
  console.log(longestSubstringKDistinct("cbbebi", 3)); // Output: 5 ("cbbeb" or "bbebi")
  