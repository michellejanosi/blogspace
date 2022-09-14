fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    const postsArr = data.slice(0, 5);
    let html = "";

    for (let post of postsArr) {
      html += `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        <hr>`;
    }

    const posts = document.querySelector('.posts');
    posts.innerHTML = html;
  })
