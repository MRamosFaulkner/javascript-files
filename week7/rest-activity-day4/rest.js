const output = document.getElementById("output");

function displayResult(content) {
    output.innerHTML = JSON.stringify(content, null, 2);
}

async function getAllPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    displayResult(posts);
}

async function getPostById() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/10");
    const post = await response.json();
    displayResult(post);
}

async function getNewPost() {
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
    displayResult(post);
}

async function replacePost() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/12", {
        method: "PUT",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
            id: 12,
            title: "Replaced Post",
            body: "This is a replaced post.",
            userId: 1,
        }),
    });
    const post = await response.json();
    displayResult(post);
}

async function updatePostTitle() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/12", {
        method: "PATCH",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
            title: "Updated Title",
        }),
    });
    const post = await response.json();
    displayResult(post);
}

async function deletePost() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/12", {
        method: "DELETE",
    });
    if (response.ok) {
        displayResult("Post with ID 12 successfully deleted.");
    } else {
        displayResult("Error deleting post with ID 12.");
    }
}
