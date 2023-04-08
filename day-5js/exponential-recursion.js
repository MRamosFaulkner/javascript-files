
function recurse(number, exponentNumber) {

    if(exponentNumber > 0) {
        return number * recurse(number, exponentNumber-1);
        }
    else {
        return 1;
    }    
}

// iterative way

function iterationExponent (number, exponentNumber) {
    let product = number;
    for(let i = 1; i < exponentNumber; i++) {
        product *= number;
    }
    
    console.log(product);
} 


console.log(recurse(2,5));
iterationExponent(2,5);

