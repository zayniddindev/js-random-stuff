function longCanculus(n) {
    let sum = 0;
    for (let i = 0; i < 1e8; i++) {
        sum += n
    }
    return sum
}

console.time('T: ')
console.log(longCanculus(10));
console.log(longCanculus(10));
console.log(longCanculus(10));
console.log(longCanculus(10));
console.log(longCanculus(10));
console.timeEnd('T: ')

function memoize(func) {
    const cache = {}
    return function (...args) {
        const token = JSON.stringify(args);
        if (cache[token]) return cache[token];
        else {
            const result = func(...args);
            console.log(result);
            cache[token] = result;
            return result
        }
    }
}

const longCanculusM = memoize(longCanculus);

console.time('T: ')
console.log(longCanculusM(10));
console.log(longCanculusM(10));
console.log(longCanculusM(10));
console.log(longCanculusM(10));
console.log(longCanculusM(10));
console.timeEnd('T: ')
