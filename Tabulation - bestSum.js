const bestSum = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(null)
    table[0] = []
    for (let i = 0; i < targetSum; i++) {
        if (table[i] !== null) {
            for (let num of numbers) {
                const combination = [...table[i], num]
                // if this current combination is shorter than what is previously stored
                if (!table[i + num] || combination.length < table[i + num].length) {
                    table[i + num] = combination
                }
            }
        }
    }
    return table[targetSum]
}

console.log(bestSum(7 , [5 , 3 , 4 , 7])) // [7]
console.log(bestSum(8 , [5 , 3 , 2])) // [5 , 3]
console.log(bestSum(8 , [5 , 1 , 4])) // [4 , 4]
console.log(bestSum(100 , [5 , 2 , 1 , 25])) // [25 , 25 , 25 , 25]