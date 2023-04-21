const showResults = document.getElementById('results');

function getAllPosts() {
  showResults.innerHTML = "";
  fetch('http://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => {
      for (let i = 0; i < json.length; i++) {
        showResults.innerHTML += 
          '<div>' +
          '<h2>' + json[i].title + '</h2>' +
          '<p>' + json[i].body + '</p>' +
          '</div>';
      }
    });
}

function getPostsWithID10() {
  showResults.innerHTML = "";
  fetch('http://jsonplaceholder.typicode.com/posts/10')
    .then(response => response.json())
    .then(post => {
      showResults.innerHTML += 
        '<div>' +
        '<h2>' + post.title + '</h2>' +
        '<p>' + post.body + '</p>' +
        '</div>';
    });
}

function createNewPost() {
  showResults.innerHTML = "";
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      title: "New Post",
      body: "This is a new post.",
      userId: 1,
    }),
  })
    .then(response => response.json())
    .then(post => {
      showResults.innerHTML += 
        '<div>' +
        '<h2>' + post.title + '</h2>' +
        '<p>' + post.body + '</p>' +
        '</div>';
    });
}

function replacePostWithID12() {
  showResults.innerHTML = "";
  fetch("https://jsonplaceholder.typicode.com/posts/12", {
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
  })
    .then(response => response.json())
    .then(post => {
      showResults.innerHTML += 
        '<div>' +
        '<h2>' + post.title + '</h2>' +
        '<p>' + post.body + '</p>' +
        '</div>';
    });
}

function updatePost12Title() {
  showResults.innerHTML = "";
  fetch("https://jsonplaceholder.typicode.com/posts/12", {
    method: "PATCH",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      title: "Updated Title for Post 12",
    }),
  })
    .then(response => response.json())
    .then(post => {
      showResults.innerHTML += 
        '<div>' +
        '<h2>' + post.title + '</h2>' +
        '<p>' + post.body + '</p>' +
        '</div>';
    });
}

function deletePost12() {
  showResults.innerHTML = "";
  fetch("https://jsonplaceholder.typicode.com/posts/12", {
    method: "DELETE",
  })
    .then(response => {
      if (response.ok) {
        showResults.innerHTML += "Post with ID 12 successfully deleted.";
      } else {
        showResults.innerHTML += "Error deleting post with ID 12.";
      }
    });
}
