let testable = 5;

function recursive(num) {
    if (num === 0)
        return 1;
    else
        return num * recursive(--num)
}
function iterative(num) {
    let res = 1;
    for (let i = 2; i <= num; i++)
        res *= i;
    return res;
}

console.log("Result of the recursive function for number '" + testable + "' is " + recursive(testable));
console.log("Result of the iterative function for number '" + testable + "' is " + iterative(testable));