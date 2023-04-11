
// let counter = (function() {
//     let count =0;

//     function increment() {
//         count ++;
//         console.log('Count: ${count}');
//     }

//     function reset () {
//         count = 0;
//         console.log('Counter reset.');
//     }

//     return {
//         increment: increment,
//         reset: reset
//     };
// })();

// counter.increment();
// counter.increment();
// counter.reset();
// console.log(counter.count);

// let cars = ['honda', 'gmc', 'tesla', 'ford'];

// function useCars (myCar) {
//     console.log(myCar[0]);
//     console.log(myCar[1]);
//     console.log(myCar[2]);    
// }

// useCars(cars);

// function calculateTip(amount) {
//     return amount * 0.2
// }

// // console.log(calculateTip(40))

// function calculateTip(amount) {
//     // calculateTip(amount);
//     let total = amount =+ calculateTip(amount);

//     return total;
// }

// console.log(calculateTip(200))

//Function as an object

// let shoppingCart = {
//     items: ['apples', 'cheese', 'butter'],
//     size: 4,
//     addToCart: function (item) {
//         shoppingCart.items.push(item);
//     },

//     getCartItems: function() {
//         for (let items of shoppingCart.items) {
//             console.log(item);
//         }
//     }
// };
// shoppingCart.addToCart('grapes');

// // console.log(shoppingCart.addToCart())
// shoppingCart.getCartItems();

// function hoistFunction () {
//     let a = 10;
//     let b = 5;
    
// }

// hoistFunction();

// console.log(a);
// console.log(b);

// using a variable as a function

// subtract(10,7);

// function subtract (x,y) {
//     return x-y
// }

// myFunctionVariable();

// const myFunctionVariable = function () {
//     console.log('Some thing else')
// }

// subtract(10,7);

// function subtract (x,y) {
//     return x-y
// }

// // add (3,5)// will not work

// let add = function (x, y) {
//     return x + y;
// }


//IIFE

// (function () {
//     console.log('This is happening right away')
// })();

//objects as arguments

// function displayUserInfo(user) {
//     console.log('Name ' + user.name);
//     console.log('Name ' + user.age);
// }
// let user = {
//     name: 'Alice',
//     age: 30,
// };
// displayUserInfo(user);

// function displayWeather(data) {
//     console.log('Location: ${data.location})';
//     console.log('Location: ${data.temp})C';
//     console.log('Location: ${data.condition})';
// };
// // Sample weather data from an API
// let weatherData = {
//     location: 'San Franciso',
//     temp: 18,
//     condition: 'Sunn',
// };

// displayWeather(data);

//arrow functions
// let addNum = (x,y) => {
//     return x+y;
    
// };

// console.log(addNum(1,2));

// let n = 0;
// function addOne() {
//     n=+1;
//     return n
// }
// addOne = function() {
//     n = n=1;
//     return n
// }
// let addOne = () => n++

//scope -- how you separate code and how that code wo