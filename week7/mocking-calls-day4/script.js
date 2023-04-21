//mocking calls

const users = [
    {id:4301, name:'John', email:'jonh@mymail.com'},
    {id:4302, name:'Jane', email:'jane@mymail.com'},
    {id:4303, name:'Mary', email:'mary@mymail.com'},
    {id:4304, name:'Mike', email:'mike@mymail.com'},
];

function fetchUserById(userID) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = users.find((user => user.id === userID));

            if (user) {
                resolve(user);
            } else {
                reject('User not found');
            }    
        }, 1000);
    });        
}    

fetchUserById(4301)
.then((user) => {
    console.log(user.name + "'s user ID is " + user.id);

    return fetchUserById(4306);
})
.then((user) => {
    console.log(user.name + "'s user ID is " + user.id);
})   
.catch((error) => {
    console.log(error);

})
