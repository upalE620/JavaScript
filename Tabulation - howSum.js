howSum = (targetSum, numbers) => {
    table = Array(targetSum + 1).fill(null)
    table[0] = []
    for (i = 0; i <= targetSum; i++) {
        if (table[i] !== null) {
            for (num of numbers){
                table[i + num] = [ ...table[i], num]
            }
        }
    }
    return table[targetSum]
}

console.log(howSum(7,[2,3])) // [2,2,3]
console.log(howSum(7,[5,3,4,7])) // [3,4]
console.log(howSum(7,[2,4])) // null
console.log(howSum(300,[7,14])) // null
console.log(howSum(8,[2,3,5])) // [2,3,3]