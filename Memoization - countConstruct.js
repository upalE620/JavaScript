const countConstruct = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target]
    if (target === '') return 1

    let targetCount = 0

    for(let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const numWays = countConstruct(target.slice(word.length), wordBank, memo)
            targetCount += numWays
        }
    }
    memo[target] = targetCount
    return targetCount
}

console.log(countConstruct("purple",["purp", "le", "ur", "p", "purpl"])); // 2
console.log(countConstruct("abcdef",["ab", "abc", "cd", "def", "abcd"])); // 1
console.log(countConstruct("skateboard",["bo", "rd", "ate", "t", "ska", "sk", "boar"])); // 0
console.log(countConstruct("enterapotentpot",["a", "p", "ent", "enter", "ot", "o", "t"])); // 4
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeef",
["e", "eeee", "eeeeeeee", "eee", "ee", "eeee", "eeeee"])); // 0