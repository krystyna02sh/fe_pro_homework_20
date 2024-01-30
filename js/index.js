const balances = ['$123.10', '$61 123.23', '$1,321,123.10', '$0.00', '$799.50', '$1 916 161 123.25']
const balanceNums = balances.map(
    balance => {
        const numbers = balance.match(/[\d\.,]+/g);
        const number = parseFloat(numbers.join(''));
        return number;

    });

console.log(balanceNums);