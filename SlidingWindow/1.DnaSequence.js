function findRepeatedSequences(dna, k) {

    // Replace this placeholder return statement with your code
    let allComb = new Set()
    let result = new Set()
    for(let i = 0; i< dna.length; i++){
        let j = i + k;
        if(allComb.has(dna.slice(i,j)) && dna.slice(i,j).length === k){
            result.add(dna.slice(i,j))
        }else{
            allComb.add(dna.slice(i,j))
}
    }
    return result
}

console.log(findRepeatedSequences('CGG', 1))