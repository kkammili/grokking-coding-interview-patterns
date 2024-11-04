function maxSumSubArrK(arr, k){
 const totals = []
 let currTotal
 currTotal = arr.slice(0,k).reduce((acc,curr)=> {return curr + acc}, 0)
 totals.push(currTotal)
 for(let i = k; i<arr.length; i++){
  currTotal = currTotal + arr[i] - arr[i - k]
  totals.push(currTotal)
 }
 return Math.max(...totals)   
}

console.log(maxSumSubArrK([4,53,6,65], 3))

//qtip

// instead of totals array
// create a variable maxTotal
// and     maxTotal = Math.max(maxTotal, currTotal); at the for loop end.