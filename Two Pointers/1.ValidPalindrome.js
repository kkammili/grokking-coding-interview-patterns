// Problem
//Determine if a given string is a valid palindrome,
// considering only alphanumeric characters and ignoring cases.

function isPalindrome(s) {
    // Remove non-alphanumeric characters and convert to lowercase
    s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    
    let left = 0;
    let right = s.length - 1;
    
    // Use two pointers to check for palindrome
    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    
    return true;
}

// Example Usage
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome(" ")); // true
