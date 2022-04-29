const bestSum = (targetSum , Numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum]
    if (targetSum === 0) return []
    if (targetSum < 0) return null

    let shortestCombination = null

    for (let num of Numbers) {
        const remainder = targetSum - num
        const remainderCombination = bestSum(remainder, Numbers, memo)
        if (remainderCombination !== null) {
            const combination = [ ...remainderCombination, num ]
            // if the combination is shorter than the current "shortest", update it
            if (shortestCombination == null || combination.length < shortestCombination.length) {
                shortestCombination = combination
            }
        }
    }
    memo[targetSum] = shortestCombination
    return memo[targetSum]
}

console.log(bestSum(7 , [5 , 3 , 4 , 7])) // [7]
console.log(bestSum(8 , [5 , 3 , 2])) // [5 , 3]
console.log(bestSum(8 , [5 , 1 , 4])) // [4 , 4]
console.log(bestSum(100 , [5 , 2 , 1 , 25])) // [25 , 25 , 25 , 25]