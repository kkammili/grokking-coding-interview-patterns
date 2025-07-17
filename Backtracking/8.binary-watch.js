/*
PROBLEM STATEMENT:
A binary watch has 4 LEDs on the top which represent the hours (0-11), and the 6 LEDs on the bottom represent the minutes (0-59). Each LED represents a zero or one, with the least significant bit on the right. Given a non-negative integer n which represents the number of LEDs that are currently on, return all possible times the watch could represent.

PATTERN: Backtracking
*/

// Solution implementation
function readBinaryWatch(turnedOn) {
    const result = [];
    
    function backtrack(hours, minutes, leds, start) {
        if (leds === 0) {
            if (hours < 12 && minutes < 60) {
                result.push(`${hours}:${minutes < 10 ? '0' : ''}${minutes}`);
            }
            return;
        }
        
        for (let i = start; i < 10; i++) {
            if (i < 4) {
                backtrack(hours + (1 << i), minutes, leds - 1, i + 1);
            } else {
                backtrack(hours, minutes + (1 << (i - 4)), leds - 1, i + 1);
            }
        }
    }
    
    backtrack(0, 0, turnedOn, 0);
    return result;
}

/*
DETAILED EXPLANATION:
1. Pattern Identification: 
   - The Backtracking pattern is used to explore all possible configurations of LEDs to form valid times.
2. Approach:
   - Use a recursive function to try turning on LEDs for hours and minutes.
   - Ensure the hours are less than 12 and minutes are less than 60.
3. Solution Walkthrough:
   - Define a helper function `backtrack` with parameters for hours, minutes, remaining LEDs, and start index.
   - Use a loop to try turning on each LED.
   - If a valid time is formed, add it to the result.
   - Return the list of possible times.
4. Complexity: Time O(1), Space O(1)
*/
