// side effects

let i = 1

function impure(param) {
    i++
    return param + i
}

console.log(impure(1));
console.log(impure(1));
console.log(impure(1));


function pure(param) {
    return param * Math.PI
}

console.log(pure(1));
console.log(pure(1));
console.log(pure(1));
