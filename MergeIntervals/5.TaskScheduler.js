/**
 * Task Scheduler
 * 
 * Problem Statement:
 * You are given a char array representing tasks CPU needs to do. It contains capital letters A to Z where each letter represents a different task. Tasks could be done without the original order. Each task is done in one unit of time. For each unit of time, the CPU could complete either one task or just be idle.
 * However, there is a non-negative integer n that represents the cooldown period between two same tasks (the same task can only be done again after n units of time).
 * 
 * You need to return the least number of units of times that the CPU will take to finish all the given tasks.
 * 
 * Example:
 * Input: tasks = ["A","A","A","B","B","B"], n = 2
 * Output: 8
 * Explanation: A -> B -> idle -> A -> B -> idle -> A -> B
 * 
 * Approach:
 * 1. Count the frequency of each task.
 * 2. Determine the maximum frequency.
 * 3. Calculate the number of idle slots needed.
 * 4. Fill the idle slots with other tasks or remain idle.
 */

function leastInterval(tasks, n) {
    const taskCounts = new Array(26).fill(0);
    const ACode = 'A'.charCodeAt(0);

    // Count the frequency of each task
    for (let task of tasks) {
        taskCounts[task.charCodeAt(0) - ACode]++;
    }

    // Sort the task counts in descending order
    taskCounts.sort((a, b) => b - a);

    // Find the maximum frequency
    const maxFreq = taskCounts[0];
    let idleSlots = (maxFreq - 1) * n;

    // Fill the idle slots with other tasks
    for (let i = 1; i < taskCounts.length && idleSlots > 0; i++) {
        idleSlots -= Math.min(maxFreq - 1, taskCounts[i]);
    }

    // If there are still idle slots, add them to the total length
    idleSlots = Math.max(0, idleSlots);

    return tasks.length + idleSlots;
}

// Example usage:
console.log(leastInterval(["A","A","A","B","B","B"], 2));  // Output: 8
