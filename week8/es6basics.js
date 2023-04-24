//1
const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [6, 7, 8, 9];

console.log("1.", numbers1,"&", numbers2, "\n");

//2
const numbers = [...numbers1,...numbers2];

console.log("2.", numbers, "\n");

//3
let square = (a) => {
    return  a * a; 
}
console.log("3.", square(10), "\n")

//4
const squares = numbers.map(square)

console.log ("4.", squares, "\n")

//5
let isEven = (n) => {
    if (n % 2 == 0){
        return true 
    } else {
        return false
    }
}
console.log("5.", isEven(6), "\n")

//6
let evenSquares = squares.filter(isEven)

console.log("6.",evenSquares, "\n")

//7 
let [firstEvenSquare,secondEvenSquare] = evenSquares;

console.log("7.", firstEvenSquare," & ", secondEvenSquare, "\n");

//8

const allOfTheNumbers = `The original numbers are  ${numbers1}, and  ${numbers2}. The squares of the original numbers are ${squares}. The even squares from those numbers are ${evenSquares}. And the extracted even squares are ${firstEvenSquare}, ${secondEvenSquare}.`;

console.log(allOfTheNumbers);