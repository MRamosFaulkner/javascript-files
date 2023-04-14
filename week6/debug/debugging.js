
const storeOwners = [
    { Charles: 1 },
   { Sally: 1 },
  { Cassandra: 1 },
    {
         "Danny Shavez": 1,
        location: "in NM",
},
];

const listNumberOfStores = function () {
    let totalLocations;
    for (let i = 0; i < storeOwners.length; i++) {
            totalLocations += i;
    }
    return totalLocations;
    };

function tellMeMyStores() {
    console.log("Hey, can you tell me how many stores you have?");
        if (locations > 0) {
            console.log("Of course, we have " + locations() + " stores.");
        }
    }

function hasStore() {
for (let i = 0; i < 3; i++) {
        let  people = Object.keys(storeOwners[i]);
        let person = people.toString();
        console.log("Yes, " + person + " has one.");
}
}

let locations = listNumberOfStores();
tellMeMyStores();
hasStore();

let man = Object.keys(storeOwners[3]);
let mister = man[0];

let whereHeLives = storeOwners[3].location;
console.log("Yes, " + mister + " that lives " + whereHeLives + " owns one too.");