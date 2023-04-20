// Create an array of user objects called users
const users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com' },
  ];
  
  // Implement a function called fetchUserById that accepts a user ID as an argument
  // and returns a promise
  const fetchUserById = (userId) => {
    return new Promise((resolve, reject) => {
      // Simulate an asynchronous request by using setTimeout()
      setTimeout(() => {
        // Find the user with the given ID in the users array
        const user = users.find((user) => user.id === userId);
  
        // If the user exists, resolve the promise with the user object
        // Otherwise, reject the promise with an error message
        if (user) {
          resolve(user);
        } else {
          reject(new Error(`User with ID ${userId} not found`));
        }
      }, 1000);
    });
  };
  
  // Use the fetchUserById function to fetch the user with ID 1
  fetchUserById(1)
    .then((user) => {
      console.log('User 1:', user);
  
      // Chain another fetchUserById call to fetch the user with ID 2
      return fetchUserById(2);
    })
    .then((user) => {
      console.log('User 2:', user);
    })
    .catch((error) => {
      // Log the error message if the promise is rejected
      console.error(error.message);
    });
  