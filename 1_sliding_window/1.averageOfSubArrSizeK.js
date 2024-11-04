function avgSubArrK(arr, k){
  let windowTotal = 0
  let avg = 0
  const avgsArr = []
//   let window = []
  const sum = (arr) => {
    return arr.reduce((acc, curr)=>{ return curr + acc}, 0)
  }
  windowTotal = sum(arr.slice(0, k))
  avg = windowTotal/k
  avgsArr.push(avg)
  
  for(let i = k; i<arr.length; i++){
    windowTotal =  windowTotal - arr[i-k] + arr[i]
    avg = windowTotal/k
    avgsArr.push(avg)
  }
  return avgsArr
}

console.log(avgSubArrK([5,2,3, 2,3,3],3))