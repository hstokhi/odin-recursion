
// Iterative
function fib(n) {
    let result = [0, 1];

    for (let i = 2; i < n; i ++) {
        result.push(result[i-2] + result[i-1]);
    }

    return result;
}

console.log(fib(8))

function fibRecursive(n, acc = [0, 1]) {
    if (n < 3) { return acc }
    else {
        acc.push(acc[acc.length - 1] + acc[acc.length - 2])
        return fibRecursive(n-1, acc)
    }
}

console.log(fibRecursive(20))