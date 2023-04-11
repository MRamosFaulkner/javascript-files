
//Grocery Store List

//#1
let groceryList = ['pop tarts', 'ramen noodles', 'chips', 'salsa', 'coffee'];
//#2
groceryList.push('fruit loops');
//#3
groceryList[4] = 'fair trade coffee';
//#4
// groceryList[2] = 'rice';
// groceryList[3] = 'beans';
groceryList.splice(2, 3, 'rice', 'beans');
//#5
let shoppingCart = [];
//#6
shoppingCart.push(groceryList.pop());
//#7
shoppingCart.push(groceryList.shift());
//#8
while (groceryList.length > 0) {
    shoppingCart.push(groceryList.pop());
}
//#9
shoppingCart.sort();
//#10
shoppingCart.reverse();

console.log(shoppingCart.join(','));

// for (let i=0; i < groceryList.length; i++){

// }