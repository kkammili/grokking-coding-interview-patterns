/*
Question:
Given a string `word` and an abbreviation `abbr`, return TRUE if the abbreviation matches the given string. Otherwise, return FALSE.

Rules:
1. The abbreviation can skip multiple characters by replacing them with a number, which represents the count of characters skipped.
2. Numbers in the abbreviation should not have leading zeros.
3. Every character in the abbreviation must be valid according to the original string.

Examples:
1. word = "calendar", abbr = "cal3ar" -> TRUE
   Explanation: "cal3ar" skips the substring "end" in "calendar".
2. word = "calendar", abbr = "c6r" -> TRUE
   Explanation: "c6r" skips the substring "alenda" in "calendar".
3. word = "calendar", abbr = "c06r" -> FALSE
   Explanation: "c06r" is invalid because it has a leading zero.

Constraints:
- The word contains only lowercase letters.
- The abbreviation contains lowercase letters and digits.
*/

function validWordAbbreviation(word, abbr) {
    let i = 0; // Pointer for the word
    let j = 0; // Pointer for the abbreviation

    while (i < word.length && j < abbr.length) {
        if (!isNaN(abbr[j])) {
            // Handle numeric part in abbreviation
            if (abbr[j] === "0") return false; // Leading zeros are not allowed

            let num = 0; // To calculate the number
            while (j < abbr.length && !isNaN(abbr[j])) {
                num = num * 10 + parseInt(abbr[j]);
                j++;
            }
            i += num; // Skip the characters in the word
        } else {
            // Match characters directly
            if (word[i] !== abbr[j]) return false;
            i++;
            j++;
        }
    }

    // Both pointers must reach the end for a valid abbreviation
    return i === word.length && j === abbr.length;
}

// Example Usage
console.log(validWordAbbreviation("calendar", "cal3ar")); // Output: true
console.log(validWordAbbreviation("calendar", "c6r"));    // Output: true
console.log(validWordAbbreviation("calendar", "c06r"));   // Output: false
