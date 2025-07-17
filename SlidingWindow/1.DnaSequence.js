/**
 * Repeated DNA Sequences
 * 
 * All DNA is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T', for example: "ACGAATTCCG". When studying DNA, it is useful to identify repeated sequences within the DNA.
 * 
 * Example:
 * Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT", k = 10
 * Output: ["AAAAACCCCC", "CCCCCAAAAA"]
 * 
 * Approach:
 * 1. Use a sliding window of size k to traverse the string.
 * 2. Use a set to track all sequences of length k.
 * 3. Use another set to track sequences that appear more than once.
 * 4. Return the list of repeated sequences.
 */

function findRepeatedSequences(dna, k) {
    const seen = new Set();
    const repeated = new Set();
    
    for (let i = 0; i <= dna.length - k; i++) {
        const sequence = dna.substring(i, i + k);
        if (seen.has(sequence)) {
            repeated.add(sequence);
        } else {
            seen.add(sequence);
        }
    }
    
    return Array.from(repeated);
}

console.log(findRepeatedSequences('AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT', 10));  // Output: ["AAAAACCCCC", "CCCCCAAAAA"]
