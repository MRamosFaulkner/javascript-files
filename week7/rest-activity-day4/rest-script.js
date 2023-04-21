
const output = document.getElementById('output');

function showResults(results) {
    output.innerHTML = JSON.stringify(results, null, 2);
}    

// get all posts
async function getAllPosts() {

    const response = await fetch('http://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();

    showResults(posts);
}
async function getPostsWithID10() {
    
    const response = await fetch('http://jsonplaceholder.typicode.com/posts/10');
    const posts = await response.json();
    
    showResults(posts);
}
// async function createtNewPost() {

//     const response = await fetch('http://jsonplaceholder.typicode.com/posts/", {
//         method: 'POST',
//         body: JSON.stringify({
//           title: 'New Post',
//           body: 'This is a new post',
//           userId: 1,   
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     }),
// async    
//     const posts = await response.json();

//     showResults(posts);
// }
async function createNewPost() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
            title: "New Post",
            body: "This is a new post.",
            userId: 1,
        }),
    });
    const post = await response.json();
    showResults(post);
}

async function replacePostWithID12() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/12", {
        method: "PUT",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
            id: 12,
            title: "Replaced Post with ID 12",
            body: "This the replaced post.",
            userId: 1,
        }),
    });
    const post = await response.json();
    displayResult(post);
}

async function updatePost12Title() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/12", {
        method: "PATCH",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
            title: "Updated Title for Post 12",
        }),
    });
    const post = await response.json();
    displayResult(post);
}

async function deletePost12() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/12", {
        method: "DELETE",
    });
    if (response.ok) {
        displayResult("Post with ID 12 successfully deleted.");
    } else {
        displayResult("Error deleting post with ID 12.");
    }
}



