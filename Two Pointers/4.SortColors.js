/*
Question:
Given an array `colors`, which contains a combination of the following three elements:
- 0 (representing red),
- 1 (representing white), and
- 2 (representing blue).

Sort the array in place so that elements of the same color are adjacent, with the colors in the order of red (0), white (1), and blue (2).

Constraints:
1 <= colors.length <= 300
colors[i] can only contain 0, 1, or 2.
*/

function sortColors(colors) {
    // Initialize pointers
    let low = 0;       // Pointer for 0s (red)
    let high = colors.length - 1; // Pointer for 2s (blue)
    let current = 0;   // Pointer for traversal

    // Traverse the array
    while (current <= high) {
        if (colors[current] === 0) {
            // Swap current with low pointer, then increment both
            [colors[current], colors[low]] = [colors[low], colors[current]];
            low++;
            current++;
        } else if (colors[current] === 2) {
            // Swap current with high pointer, then decrement high
            [colors[current], colors[high]] = [colors[high], colors[current]];
            high--;
        } else {
            // If it's 1, just move the current pointer
            current++;
        }
    }
}

// Example Usage
const colors = [2, 0, 2, 1, 1, 0];
sortColors(colors);
console.log(colors); // Output: [0, 0, 1, 1, 2, 2]
