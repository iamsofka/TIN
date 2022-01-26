export const calculate = function(measureUnit1, measureUnit2, value) {
    if (measureUnit1 === measureUnit2) return value

    if (measureUnit1 === 'Miles') return parseFloat(value) * 1.609
    else if (measureUnit1 === 'Kilometers') return parseFloat(value) * 0.621
}