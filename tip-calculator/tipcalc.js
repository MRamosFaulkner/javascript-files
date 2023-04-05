
let totalBeforeTax = 250;

function calulateTip(a) {
   let tip = a *.2;
    return (a * .2);
}

// any argument, call 'calculateTip', return amount + tip amount

function getBillTotal (b) {
    tip = calulateTip(b);
    return (tip + b);
}

console.log('The bill before tax is $' + totalBeforeTax + ".");
console.log('A 20% tip would be $' + calulateTip(totalBeforeTax).toFixed(2) + ' .' );
console.log('The total bill with tip is $' + getBillTotal(totalBeforeTax).toFixed(2) + '.')