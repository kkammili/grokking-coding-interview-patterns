/*
Given an integer array, nums, find the maximum values in all the contiguous subarrays (windows) of size w.
*/
function findMaxSlidingWindow(nums,w){
    const maxWin = []
    for(let i=0; i<nums.length; i++){
        let j = i + w
        let slice = nums.slice(i,j)
        if(slice && slice.length === w){
            let windowMax = Math.max(...nums.slice(i,j))
            maxWin.push(windowMax)
        }
    }
    return maxWin
}

console.log(findMaxSlidingWindow([-4,5,4,-4,4,6,7,20], 2))