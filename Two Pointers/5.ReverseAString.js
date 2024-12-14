/*
Question:
Given a sentence, reverse the order of its words without affecting the order of letters within the given word.

Constraints:
- The sentence contains English uppercase and lowercase letters, digits, and spaces.
- 1 <= sentence.length <= 10^4.
- The order of the letters within a word is not to be reversed.

Note:
The input string may contain leading or trailing spaces or multiple spaces between words. The returned string, however, should only have a single space separating each word. Do not include any extra spaces.

Examples:
Input: "Reverse this string"
Output: "string this Reverse"
*/

function reverseWords(sentence) {
    // Step 1: Trim leading and trailing spaces and split words by space
    const words = sentence.trim().split(/\s+/); // Split by one or more spaces

    // Step 2: Use two pointers to reverse the words array in place
    let left = 0;
    let right = words.length - 1;
    while (left < right) {
        // Swap words at left and right pointers
        [words[left], words[right]] = [words[right], words[left]];
        left++;
        right--;
    }

    // Step 3: Join the words with a single space and return
    return words.join(" ");
}

// Example Usage
const input = "  Reverse   this   string  ";
const output = reverseWords(input);
console.log(output); // Output: "string this Reverse"
