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

  document.querySelector('.input-group').addEventListener('submit', (e) => {
    e.preventDefault();
    const postTitle = document.querySelector('.input').value;
    const postContent = document.querySelector('.content').value;
    const data = {
      title: postTitle,
      content: postContent
    }
    console.log(data);
  })
