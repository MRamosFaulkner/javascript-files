// function for a person w/ firstName, lastName, favoriteColor, favoriteNumber, favoriteFoods(array)

function Person (firstName, lastName, favoriteColor, favoriteNumber, favoriteFoods) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber
    this.favoriteFoods = favoriteFoods;
    this.family = [];
}
Person.prototype.fullName = function() {
    return("Full name is: " + this.firstName + " " + this.lastName);
}
Person.prototype.toString = function () {
    return (peter.fullName() + "\nFavorite Color: " + this.favoriteColor + "\n" + "Favorite Number: " + this.favoriteNumber);
}

Person.prototype.addtoFamily = function (person) {
    if (!(person instanceof Person)) {
        return ("Not an instance of Person.");
    }
    else {
        for(let i = 0; i < this.family.length; i++) {
            if(person === this.family[i]) {
                return ("This person is already in your family.") + "\n";
            }
        }   
        this.family.push(person);
        return this.family.lenth;
    }   
}

let peter = new Person("Peter", "Oleary", "Green", 42, ['pasta', 'pizza', 'noodles']);
let bubs = new Person("Carlos", "Ramos", "Light Lavender", 2, ['rice', 'beans', 'pollo guisado']);
let woogie = new Person("Kyle", "Ramos", "Yankee Blue", 7, ['steak', 'shrimp', 'rice']);
let xavybaby = new Person("Xavier", "Ramos", "Lilac", 3, ['spaghetti', 'brown rice', 'vegetables']);

//console.log(peter.fullName(), '\n');
console.log(peter.toString(), '\n'); 

// console.log(bubs.toString(), '\n');
// console.log(woogie.toString(), '\n');
// console.log(xavybaby.toString(), '\n');

console.log("Displaying family members before adding to family: ");
console.log(bubs.family, "\n");

console.log("Adding family members to Bubs...");
bubs.addtoFamily(peter, '\n');
bubs.addtoFamily(woogie, '\n');
bubs.addtoFamily(xavybaby, '\n');

console.log(bubs.family, '\n');
console.log("Adding duplicate family members to Bubs...");

bubs.addtoFamily(peter, '\n');

console.log(bubs.addtoFamily(woogie, '\n'));

let poppop;
console.log(bubs.addtoFamily(poppop), '\n');
