
let candyBarSize ="jumbo";
let candyBarName ="All My Toffee"

if (candyBarSize === "small"){
    console.log("This " + candyBarName + " costs $1.00.");
}
else if (candyBarSize === "medium"){
    console.log("This " + candyBarName + " costs $1.75.");
}
else if (candyBarSize === "large"){
    console.log("This " + candyBarName + " costs $2.50.");
}        
else if (candyBarSize === "jumbo"){
    console.log("This " + candyBarName + " costs $4.75.");
}
// else if(candyBarSize === "lArge"){
//     console.log("You have a " + candyBarName + "and it is " + candyBarSize + ".");
// }
// else if(candyBarSize === "size"){
//     console.log("You have a " + candyBarName + "and it is " + candyBarSize + ".");
// }
else {
    console.log("Please look up the price and check if it's valid.");
}   