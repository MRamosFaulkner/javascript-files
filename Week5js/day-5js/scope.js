
function outer() {

    let a = 'string'
    let b ={name: 'object'}
    console.log(a);
    console.log(b);
    
    function inner() {

        a = 'the string'
        b = {name: 'the oject', update: 'a property'}
        console.log(a);
        console.log(b);
    }

    inner(a, b);
    console.log(a);
    console.log(b);
}

outer();
