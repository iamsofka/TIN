export const calculate = function(measureUnit1, measureUnit2, value) {
    if (measureUnit1 === measureUnit2) return value

    if (measureUnit1 === 'Celsius')
    {
        if (measureUnit2 === 'Fahrenheit')
        {
            return (9 / 5) * parseFloat(value) + 32
        }
        else if (measureUnit2 === 'Kelvin')
        {
            return parseFloat(value) + 273.15
        }
    }
    else if (measureUnit1 === 'Fahrenheit')
    {
        if (measureUnit2 === 'Celsius')
        {
            return ((parseFloat(value) - 32) * 5) / 9 
        }
        else if (measureUnit2 === 'Kelvin')
        {
            return (((parseFloat(value) - 32) * 5) / 9) + 273.15
        }
    }
    else if (measureUnit1 === 'Kelvin')
    {
        if (measureUnit2 === 'Celsius')
        {
            return parseFloat(value) - 273.15 
        }
        else if (measureUnit2 === 'Fahrenheit')
        {
            return (9 / 5) * (parseFloat(value) - 273.15) + 32
        }
    }
}