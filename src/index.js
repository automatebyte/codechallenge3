const BASE_URL = "http://localhost:3000/posts";

document.addEventListener("DOMContentLoaded", main);

function main() {
  fetchPosts();
  setupNewPostForm();
  setupEditForm();
}

function fetchPosts() {
  fetch(BASE_URL)
    .then((res) => res.json())
    .then((posts) => {
      const list = document.getElementById("post-list");
      list.innerHTML = "";
      posts.forEach((post) => renderPostItem(post));
      if (posts.length > 0) renderPostDetail(posts[0]);
    });
}

function renderPostItem(post) {
  const item = document.createElement("div");
  item.className = "post-item";
  item.textContent = post.title;
  item.addEventListener("click", () => renderPostDetail(post));
  document.getElementById("post-list").appendChild(item);
}

function renderPostDetail(post) {
  const detail = document.getElementById("post-detail");
  detail.innerHTML = `
    <h2>${post.title}</h2>
    <p>${post.content}</p>
    <p><strong>Author:</strong> ${post.author}</p>
  `;

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.addEventListener("click", () => showEditForm(post));

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.style.marginLeft = "10px";
  deleteBtn.addEventListener("click", () => deletePost(post.id));

  detail.appendChild(editBtn);
  detail.appendChild(deleteBtn);
}

function setupNewPostForm() {
  document.getElementById("new-post-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const newPost = {
      title: document.getElementById("new-title").value,
      content: document.getElementById("new-content").value,
      author: document.getElementById("new-author").value,
    };

    fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    })
      .then((res) => res.json())
      .then((post) => {
        renderPostItem(post);
        this.reset();
      });
  });
}

function showEditForm(post) {
  const form = document.getElementById("edit-post-form");
  form.classList.remove("hidden");
  form.dataset.id = post.id;
  document.getElementById("edit-title").value = post.title;
  document.getElementById("edit-content").value = post.content;
}

function setupEditForm() {
  document.getElementById("edit-post-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const id = this.dataset.id;
    const updatedPost = {
      title: document.getElementById("edit-title").value,
      content: document.getElementById("edit-content").value,
    };

    fetch(`${BASE_URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedPost),
    })
      .then((res) => res.json())
      .then((data) => {
        fetchPosts();
        renderPostDetail(data);
        this.classList.add("hidden");
      });
  });

  document.getElementById("cancel-edit").addEventListener("click", function () {
    document.getElementById("edit-post-form").classList.add("hidden");
  });
}

function deletePost(id) {
  fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  }).then(() => {
    fetchPosts();
    document.getElementById("post-detail").innerHTML = "<p>Select a post to see details.</p>";
  });
}
