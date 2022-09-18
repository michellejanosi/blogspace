const inputs = document.querySelectorAll('.input, .content');
let postsArr = [];

function renderPosts() {
  let html = '';

  for (let post of postsArr) {
    html += `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        <hr>`;
  }

  const posts = document.querySelector(".posts");
  posts.innerHTML = html;
}

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    postsArr = data.slice(0, 5);
    renderPosts();
  });

document.querySelector(".input-group").addEventListener("submit", (e) => {
  e.preventDefault();
  const postTitle = document.querySelector(".input").value;
  const postContent = document.querySelector(".content").value;
  const data = {
    title: postTitle,
    body: postContent,
  };

  if (postTitle && postContent) {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((post) => {
        postsArr.unshift(post);
        renderPosts();
      });

    inputs.forEach((input) => (input.value = ""));
  }
});
