// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}



const fromDollarToYen = (valueInDollar) => {

    valueInYen = Math.floor((valueInDollar/oneEuroIs.USD) * oneEuroIs.JPY);

    return valueInYen
}


const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

const fromYenToPound = (valueInYen) => {

    let valueInEuro = valueInYen / oneEuroIs.JPY;
    let valueInGbp = Math.floor(valueInEuro * oneEuroIs.GBP);
    return  valueInGbp
}


const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }


