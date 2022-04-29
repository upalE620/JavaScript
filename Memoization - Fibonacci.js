// Memoization
// JS object, keys will be arg to fn, values will be the return value

const fib = (n, memo = {}) => {
    if (n in memo) return memo[n]
    if (n <= 2) return 1
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
    return memo[n]
}

console.log(fib(6))