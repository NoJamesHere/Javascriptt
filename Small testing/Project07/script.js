const container = document.getElementById("posts-list");
let newPostColor = "#f0f0f0";
let posts = [];

// Load posts from JSON + localStorage
async function loadPosts() {
    try {
        // Start with default posts.json
        const response = await fetch("posts.json");
        const data = await response.json();
        posts = data.posts;

        // Merge with posts saved in localStorage
        const saved = localStorage.getItem("extraPosts");
        if (saved) {
            posts = posts.concat(JSON.parse(saved));
        }

        renderPosts();
    } catch (err) {
        console.log("Error loading JSON:", err);
    }
}

// Render all posts
function renderPosts() {
    container.innerHTML = "";
    posts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.style.backgroundColor = post.color || "#f0f0f0";
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
        `;
        container.appendChild(postElement);
    });
}

// Update color when picker changes
document.getElementById("colorselect").addEventListener("change", function () {
    newPostColor = this.value;
});

// Add new post
document.getElementById("addpost").onclick = () => {
    const title = document.getElementById("newtitle").value;
    const content = document.getElementById("newcontent").value;

    if (title && content) {
        const newPost = {
            title: title,
            content: content,
            color: newPostColor
        };

        // Add to posts array
        posts.push(newPost);

        // Save only the "extra" posts (not the defaults from JSON)
        const extraPosts = posts.slice(3); // first 3 came from posts.json
        localStorage.setItem("extraPosts", JSON.stringify(extraPosts));

        renderPosts();
    }
    else {
        alert("Please fill in both title and content.");
    }
};

loadPosts();