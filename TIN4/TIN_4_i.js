function amountToCoins(total, arr) {
    let sum = 0;
    let coins = [];

    arr.forEach(e => {
        while (total - e >= 0) {
            total -= e;
            sum += e;
            coins.push(e);
        }
    });

    return coins;
}
console.log(amountToCoins(12, [50, 10, 5, 2, 1]));